import '../styles/MainPage.css';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Link, useNavigate,
} from 'react-router-dom';

import ContactsList from '../components/ContactsList';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { addContactAction } from '../store/actions/contacts';

const MainPage = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const onAddClick = () => {
    dispatch(addContactAction());
  };

  const signOut = () => {
    localStorage.removeItem('token');
  };

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
            <Button
            className="log-out-button"
            id="log-out-button"
            onClick={signOut}
            >
              Log Out
              </Button>
          </Link>
        </div>
        <div className="search-block">
          <Input
            className="search-input"
            id="search-input"
            placeholder="Search contact"
            value={inputValue}
            onChange={setInputValue}
          />
          <Button className="header-button" id="clear-button" onClick={() => { setInputValue(''); }}>Clear</Button>
          <Button className="header-button" id="add-contact" onClick={onAddClick}>Add contact</Button>
        </div>
        <ContactsList inputValue={inputValue} />
      </div>
    </>
  );
};

export default MainPage;
