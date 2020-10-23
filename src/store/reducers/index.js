import { combineReducers } from 'redux';

import firebase from './Firebase';
import user from './User';

export default combineReducers({ firebase, user });
