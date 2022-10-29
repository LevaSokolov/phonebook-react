import { combineReducers } from 'redux';

import contactsReducer from './contacts';
import userReducer from './user';

const globalReducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
});

export default globalReducer;
