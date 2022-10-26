import { FILL_USER_INFO } from './types';

const initialState = {
  info: {
    firstName: 'layon',
    id: 322,
    lastName: 'sucker',
    phoneNumber: '89831368066',
  },
};

const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case FILL_USER_INFO:
      return {
        ...state,
        info: payload,
      };
    default:
      return initialState;
  }
};

export default userReducer;
