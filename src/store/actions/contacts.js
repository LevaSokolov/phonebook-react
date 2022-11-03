/* eslint-disable no-alert */
import addContact from '../../API/addContact';
import contactDelete from '../../API/deleteContact';
import getContacts from '../../API/getContacts';
import { FILL_CONTACTS_LIST } from '../types/contacts';
import { TOGGLE_IS_FETCHING } from '../types/user';

export const fillContactsListAction = (payload) => ({
  type: FILL_CONTACTS_LIST,
  payload,
});

export const toggleIsFetching = (payload) => ({
  type: TOGGLE_IS_FETCHING,
  payload,
});

const switchIsFetching = (dispatch, state) => {
  dispatch(toggleIsFetching(state));
};

export const getContactsListAction = () => (dispatch) => {
  switchIsFetching(dispatch, true);
  getContacts()
    .then(
      (posts) => {
        dispatch(toggleIsFetching(false));
        dispatch(fillContactsListAction(posts));
      },
    ).catch((e) => {
      console.error(e.message);
    });
};

export const deleteContactAction = (id) => (dispatch) => {
  switchIsFetching(dispatch, true);
  contactDelete(id)
    .then(
      () => {
        switchIsFetching(dispatch, false);
        dispatch(getContactsListAction());
      },
    ).catch((e) => {
      switchIsFetching(dispatch, false);
      console.error(e.message);
    });
};

export const addContactAction = () => (dispatch) => {
  switchIsFetching(dispatch, true);
  addContact()
    .then(
      () => {
        switchIsFetching(dispatch, false);
        dispatch(getContactsListAction());
      },
    ).catch((e) => {
      switchIsFetching(dispatch, false);
      alert(e.message);
    });
};
