import { CLEAR_USER_INFO, FILL_USER_INFO, TOGGLE_IS_FETCHING } from '../types/user';

const initialState = {
  info: {},
  isAuthorized: false,
  isFetching: false,
};

const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: payload,
      };
    case FILL_USER_INFO:
      return {
        ...state,
        info: payload,
        isAuthorized: true,
      };
    case CLEAR_USER_INFO:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
