import signIn from '../../API/login';
import signUp from '../../API/registration';
import { CLEAR_USER_INFO, FILL_USER_INFO } from '../types/user';

export const fillUserInfoAction = (payload) => ({
  type: FILL_USER_INFO,
  payload,
});

export const clearUserInfoAction = () => ({
  type: CLEAR_USER_INFO,
});

export const getUserInfoAction = (login, password) => (dispatch) => signIn(login, password).then(
  (info) => dispatch(fillUserInfoAction(info)),
).catch((e) => {
  console.error(e.message);
});

export const signUpUserAction = (login, password) => (dispatch) => signUp(login, password).then(
  () => dispatch(getUserInfoAction(login, password)),
).catch((e) => {
  console.error(e.message);
});
