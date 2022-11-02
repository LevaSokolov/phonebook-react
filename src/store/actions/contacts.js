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

export const getContactsListAction = () => (dispatch) => {
  dispatch(toggleIsFetching(true));
  getContacts()
    .then(
      (posts) => dispatch(fillContactsListAction(posts)),
      dispatch(toggleIsFetching(false)),
    ).catch((e) => {
      console.error(e.message);
    });
};

export const deleteContactAction = (id) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  contactDelete(id)
    .then(
      () => dispatch(getContactsListAction()),
      // dispatch(toggleIsFetching(false)),
    ).catch((e) => {
      console.error(e.message);
    });
};

export const addContactAction = () => (dispatch) => {
  dispatch(toggleIsFetching(true));
  addContact().then(
    () => dispatch(getContactsListAction()),
    dispatch(toggleIsFetching(false)),
  ).catch((e) => {
    alert(e.message);
  });
};
