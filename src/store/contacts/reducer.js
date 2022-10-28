import { FILL_CONTACTS_LIST } from './types';

const initialState = {
  items: [{
    id: 1,
    first_name: 'Lev',
    last_name: 'Sokolov',
    phone_number: 89831368066,
  },
  {
    id: 2,
    first_name: 'Alex',
    last_name: 'Thaiboy',
    phone_number: 89831368000,
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
