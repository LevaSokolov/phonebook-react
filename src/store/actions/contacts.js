/* eslint-disable no-alert */
import addContact from '../../API/addContact';
import contactDelete from '../../API/deleteContact';
import getContacts from '../../API/getContacts';
import { FILL_CONTACTS_LIST } from '../types/contacts';

export const fillContactsListAction = (payload) => ({
  type: FILL_CONTACTS_LIST,
  payload,
});

export const getContactsListAction = () => (dispatch) => getContacts().then(
  (posts) => dispatch(fillContactsListAction(posts)),
).catch((e) => {
  console.error(e.message);
});

export const deleteContactAction = (id) => (dispatch) => contactDelete(id).then(
  () => dispatch(getContactsListAction()),
).catch((e) => {
  console.error(e.message);
});

export const addContactAction = () => (dispatch) => addContact().then(
  () => dispatch(getContactsListAction()),
).catch((e) => {
  alert(e.message);
});
