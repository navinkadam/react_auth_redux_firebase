const initState = {
  loading: false,
  loaded: true,
  redirect: false,
  ui_error: false,
  profile: {},
};
export default function (state = { ...initState }, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case 'UPDATE_PROFILE_PENDING':
    case 'GET_USER_DATA_PENDING':
    case 'LOGOUT_PENDING':
    case 'LOGIN_PENDING':
    case 'UPLOAD_USER_PROFILE_IMG_PENDING':
    case 'SIGNUP_PENDING':
      return { ...state, loaded: false, loading: true };

    case 'UPLOAD_USER_PROFILE_IMG_FULFILLED':
    case 'LOGOUT_FULFILLED':
      return { ...state, loaded: true, loading: false };

    case 'LOGIN_FULFILLED':
    case 'SIGNUP_FULFILLED':
      return { ...state, redirect: true, loaded: true, loading: false, ui_error: false, ui_error_msg: '' };

    case 'GET_USER_DATA_FULFILLED':
      return { ...state, profile: payload.data, loaded: true, loading: false };
    case 'UPDATE_PROFILE_FULFILLED':
      return { ...state, loaded: true, loading: false };

    case 'SET_USER_DATA':
      return { ...state, ...payload };

    case 'LOGIN_REJECTED':
    case 'SIGNUP_REJECTED':
      return { ...state, loaded: true, loading: false, ui_error: true, ui_error_msg: payload.message };
    case 'GET_USER_DATA_REJECTED':
      return { ...state, profile: {}, loaded: true, loading: false };
    case 'LOGOUT_REJECTED':
    case 'UPDATE_PROFILE_REJECTED':
    case 'UPLOAD_USER_PROFILE_IMG_REJECTED':
      return { ...state, loaded: true, loading: false };

    default:
      return state;
  }
}
