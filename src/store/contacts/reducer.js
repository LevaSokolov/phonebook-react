import { FILL_CONTACTS_LIST } from './types';

const initialState = {
  items: [{
    id: 1,
    first_name: 'cock',
    last_name: 'dick',
    phone_number: 228322,
  }],
};

const contactsReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case FILL_CONTACTS_LIST:
      return {
        ...state,
        items: payload,
      };
    default:
      return initialState;
  }
};

export default contactsReducer;
