import addContact from '../../API/addContact';
import contactDelete from '../../API/deleteContact';
import PostServise from '../../API/PostServise';
import { FILL_CONTACTS_LIST } from '../types/contacts';

export const fillContactsListAction = (payload) => ({
  type: FILL_CONTACTS_LIST,
  payload,
});

export const getContactsListAction = () => (dispatch) => PostServise.getAll().then(
  (posts) => dispatch(fillContactsListAction(posts)),
);

export const deleteContactAction = (id) => (dispatch) => contactDelete(id).then(
  () => dispatch(getContactsListAction()),
);

export const addContactAction = () => (dispatch) => addContact().then(
  () => dispatch(getContactsListAction()),
);
