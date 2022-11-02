import { FILL_CONTACTS_LIST } from '../types/contacts';
import { TOGGLE_IS_FETCHING } from '../types/user';

const initialState = {
  items: [{
    id: 1,
    first_name: '',
    last_name: '',
    phone_number: 1,
  }],
  isFetching: false,
};

const contactsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case FILL_CONTACTS_LIST:
      return {
        ...state,
        items: payload,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: payload,
      };
    default:
      return state;
  }
};

export default contactsReducer;
