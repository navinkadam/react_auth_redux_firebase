const initState = {
  firebaseInitialized: false,
};
export default function (state = { ...initState }, actions) {
  const { type, payload } = actions;
  switch (type) {
    case 'FIREBASE_INIT_FULFILLED':
      return { ...state, firebaseInitialized: payload };

    default:
      return state;
  }
}
