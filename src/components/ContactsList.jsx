/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PostServise from '../API/PostServise';
import '../styles/ContactsList.css';
import contactDelete from '../API/deleteContact';

function ContactsList({ contactsList, setContactsList }) {
  async function fetchPosts() {
    const posts = await PostServise.getAll();
    setContactsList(posts);
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  async function pressDeleteButton(id) {
    await contactDelete(id);
    fetchPosts();
  }
  const elements = contactsList.map((contact) => (
    <React.Fragment key={contact.id}>
      <div className="contactsUnderline ">{contact.first_name}</div>
      <div className="contactsUnderline ">{contact.last_name}</div>
      <div className="contactsUnderline ">{contact.phone_number}</div>
      <button type="button" className="deleteButton" onClick={() => { pressDeleteButton(contact.id); }}>Delete</button>
    </React.Fragment>
  ));

  return (
    <div className="contacts-grid">
      {elements}
    </div>
  );
}

// cock

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    phone_number: PropTypes.string,
  })).isRequired,
  setContactsList: PropTypes.func.isRequired,
};

export default ContactsList;
