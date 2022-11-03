import '../styles/ContactsList.scss';

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContactAction, getContactsListAction } from '../store/actions/contacts';
import { contactsSelector } from '../store/selectors/contacts';
import Button from './UI/Button';

const ContactsList = ({ inputValue = '' }) => {
  const contactsList = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const pressDeleteButton = (id) => {
    dispatch(deleteContactAction(id));
  };

  useEffect(() => {
    dispatch(getContactsListAction());
  }, []);

  const contacts = contactsList.filter(
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
      {contacts.map((contact) => (
        <React.Fragment key={contact.id}>
          <div className="contactsUnderline">{contact.first_name}</div>
          <div className="contactsUnderline">{contact.last_name}</div>
          <div className="contactsUnderline">{contact.phone_number}</div>
          <Button
            type="button"
            className="deleteButton"
            onClick={() => { pressDeleteButton(contact.id); }}
          >
            Delete
          </Button>
        </React.Fragment>
      ))}
    </div>
  );
};

ContactsList.propTypes = {
  inputValue: PropTypes.string.isRequired,
};

export default ContactsList;
