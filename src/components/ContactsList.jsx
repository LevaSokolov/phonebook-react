import '../styles/ContactsList.css';

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContactAction, getContactsListAction } from '../store/contacts/actions';

const ContactsList = ({ inputValue = '' }) => {
  // eslint-disable-next-line no-underscore-dangle
  const _contactsList = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const pressDeleteButton = (id) => {
    dispatch(deleteContactAction(id));
  };

  useEffect(() => {
    dispatch(getContactsListAction());
  }, []);

  const contactsList = _contactsList.filter(
    (contact) => contact.first_name
      .toLowerCase()
      .includes(inputValue.toLowerCase())
    || contact.last_name
      .toLowerCase()
      .includes(inputValue.toLowerCase())
    || contact.phone_number.toString().includes(inputValue),
  );

  return (
    <div className="contacts-grid">
      {contactsList.map((contact) => (
        <React.Fragment key={contact.id}>
          <div className="contactsUnderline ">{contact.first_name}</div>
          <div className="contactsUnderline ">{contact.last_name}</div>
          <div className="contactsUnderline ">{contact.phone_number}</div>
          <button
            type="button"
            className="deleteButton"
            onClick={() => { pressDeleteButton(contact.id); }}
          >
            Delete
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

ContactsList.propTypes = {
  inputValue: PropTypes.string.isRequired,
};

export default ContactsList;
