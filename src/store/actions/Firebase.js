import { auth } from '../../config/firebase';
import { getUserData } from './index';
export function initFirebase(dispatch) {
  return {
    type: 'FIREBASE_INIT',
    payload: new Promise(function (resolve, reject) {
      auth.onAuthStateChanged(user => {
        resolve(user);
        dispatch && dispatch(getUserData(dispatch));
      });
    }),
  };
}
