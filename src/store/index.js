import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import contactsReducer from './contacts/reducer';
import userReducer from './user/reducer';

const globalReducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
});

const store = createStore(globalReducer, applyMiddleware(thunk));

export default store;
