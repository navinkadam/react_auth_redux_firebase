import { auth, fireStoreDB, storage } from '../../config/firebase';

export function signUp(data, dispatch) {
  const fileData = data.fileData;
  delete data.fileData;
  delete data.passwordConfirmation;
  return {
    type: 'SIGNUP',
    payload: new Promise(async (resolve, reject) => {
      try {
        // create new user
        await auth.createUserWithEmailAndPassword(data.email, data.password);
        const user = auth.currentUser;

        // save user to firebase with the doc id being the new created id we got from the response

        data.id = user.uid;
        await fireStoreDB.collection('users').doc(user.uid).set(data);
        dispatch(getUserData(dispatch));
        if (fileData) dispatch(uploadUserProfileImg({ profile: data, fileData }, dispatch), dispatch);

        resolve({ ...user });
      } catch (error) {
        reject(error);
        alert(error.message);
      }
    }),
  };
}

export function getUserData() {
  return {
    type: 'GET_USER_DATA',
    payload: new Promise(async (resolve, reject) => {
      const userID = auth.currentUser && auth.currentUser.uid;
      if (!userID) return reject();
      const userDoc = await fireStoreDB.collection('users').doc(userID).get();
      resolve({ data: userDoc.data() });
    }),
  };
}

export function logout(dispatch) {
  return {
    type: 'LOGOUT',
    payload: new Promise(async function (resolve, reject) {
      try {
        await auth.signOut();
        resolve();
        if (dispatch) dispatch(getUserData());
      } catch (error) {
        reject();
      }
    }),
  };
}

export function login(params, dispatch) {
  return {
    type: 'LOGIN',
    payload: new Promise(async (resolve, reject) => {
      try {
        await auth.signInWithEmailAndPassword(params.email, params.password);
        dispatch && resolve(getUserData(dispatch));
      } catch (error) {
        reject();
        alert(error.message);
      }
    }),
  };
}

export function updateProfile(params, dispatch) {
  return {
    type: 'UPDATE_PROFILE',
    payload: new Promise(async (resolve, reject) => {
      await fireStoreDB.collection('users').doc(params.id).set(params);
      resolve();
      dispatch && dispatch(getUserData(dispatch));
    }),
  };
}

export function uploadUserProfileImg(params, dispatch) {
  const { fileData, profile } = params;
  return {
    type: 'UPLOAD_USER_PROFILE_IMG',
    payload: new Promise(async (resolve, reject) => {
      try {
        const fileName = `profile-images/${new Date().getTime()}-${fileData.name}`;
        await storage.ref(`${fileName}`).put(fileData);
        dispatch(updateProfile({ ...profile, profileURL: fileName }, dispatch));
      } catch (error) {
        reject(error);
      }
    }),
  };
}

export function setUserData(params) {
  return { type: 'SET_USER_DATA', payload: params };
}
