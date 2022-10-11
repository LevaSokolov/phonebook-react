/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import {
  Routes, Route, Link, useNavigate, Navigate,
} from 'react-router-dom';
import '../styles/MainPage.css';
import ContactsList from './ContactsList';
import Input from './UI/Input/Input';
import addContact from '../API/addContact';
import PostServise from '../API/PostServise';

function MainPage(props) {
  const [inputValue, setInputValue] = useState('');
  const [_contactsList, setContactsList] = useState([]);
  const navigate = useNavigate();

  const contactsList = _contactsList.filter(
    (contact) => contact.first_name
      .toLowerCase()
      .includes(inputValue.toLowerCase())
    || contact.last_name
      .toLowerCase()
      .includes(inputValue.toLowerCase())
    || contact.phone_number.toString().includes(inputValue),
  );

  function onChange(event) {
    setInputValue(event.target.value);
  }

  async function onAddClick() {
    await addContact();
    const posts = await PostServise.getAll();
    setContactsList(posts);
  }

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [token]);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Courgette&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        <div className="header">
          <h1 className="main-title">Phone book</h1>
          <Link to="/login">
            <button className="log-out-button" id="log-out-button" onClick={() => { localStorage.removeItem('token'); }}>Log Out</button>
          </Link>
        </div>
        <div className="search-block">
          <input
            className="search-input"
            id="search-input"
            placeholder="Search contact"
            value={inputValue}
            onChange={onChange}
          />
          <button className="header-button" id="clear-button" onClick={() => { setInputValue(''); }}>Clear</button>
          <button className="header-button" id="add-contact" onClick={onAddClick}>Add contact</button>
        </div>
        <ContactsList contactsList={contactsList} setContactsList={setContactsList} />
      </div>
    </>
  );
}

export default MainPage;
