import { FILL_CONTACTS_LIST } from './types';

const initialState = {
  items: [],
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
