import { FILL_USER_INFO, GET_USER_INFO } from './types';

export const fillUserInfoAction = (payload) => ({
  type: FILL_USER_INFO,
  payload,
});

export const getUserInfoAction = () => ({
  type: GET_USER_INFO,
});
