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

const switchIsFetching = (dispatch, state) => {
  dispatch(toggleIsFetching(state));
};

export const getUserInfoAction = (login, password) => (dispatch) => {
  switchIsFetching(dispatch, true);
  signIn(login, password)
    .then((info) => {
      dispatch(fillUserInfoAction(info));
      switchIsFetching(dispatch, false);
    })
    .catch((e) => {
      switchIsFetching(dispatch, false);
      alert(e.message);
    });
};

export const signUpUserAction = (login, password) => (dispatch) => {
  dispatch(toggleIsFetching(dispatch, true));
  signUp(login, password)
    .then(
      () => {
        switchIsFetching(dispatch, true);
        dispatch(getUserInfoAction(login, password));
      },
    ).catch((e) => {
      switchIsFetching(dispatch, false);
      console.error(e.message);
    });
};
