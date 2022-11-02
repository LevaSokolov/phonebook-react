import signIn from '../../API/login';
import signUp from '../../API/registration';
import { CLEAR_USER_INFO, FILL_USER_INFO, TOGGLE_IS_FETCHING } from '../types/user';

export const fillUserInfoAction = (payload) => ({
  type: FILL_USER_INFO,
  payload,
});

export const clearUserInfoAction = () => ({
  type: CLEAR_USER_INFO,

});

export const toggleIsFetching = (payload) => ({
  type: TOGGLE_IS_FETCHING,
  payload,
});

export const getUserInfoAction = (login, password) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  signIn(login, password)
    .then((info) => dispatch(fillUserInfoAction(info)))
    .then(() => dispatch(toggleIsFetching(false)))
    .catch((e) => { console.error(e.message); });
};

export const signUpUserAction = (login, password) => (dispatch) => signUp(login, password).then(
  () => dispatch(getUserInfoAction(login, password)),
).catch((e) => {
  console.error(e.message);
});
