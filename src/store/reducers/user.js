import { CLEAR_USER_INFO, FILL_USER_INFO } from '../types/user';

const initialState = {
  info: {},
  isAuthorized: false,
};

const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case FILL_USER_INFO:
      return {
        ...state,
        info: payload,
        isAuthorized: true,
      };
    case CLEAR_USER_INFO:
      return initialState;
    default:
      return initialState;
  }
};

export default userReducer;
