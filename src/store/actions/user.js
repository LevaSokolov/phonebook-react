import signIn from '../../API/login';
import signUp from '../../API/registration';
import { FILL_USER_INFO } from '../types/user';

export const fillUserInfoAction = (payload) => ({
  type: FILL_USER_INFO,
  payload,
});

export const getUserInfoAction = (login, password) => (dispatch) => signIn(login, password).then(
  (info) => dispatch(fillUserInfoAction(info)),
);

export const signUpUserAction = (login, password) => (dispatch) => signUp(login, password).then(
  () => dispatch(getUserInfoAction(login, password)),
);
