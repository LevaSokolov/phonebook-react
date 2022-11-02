import '../styles/MainPage.css';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link, useNavigate,
} from 'react-router-dom';

import ContactsList from '../components/ContactsList';
import Preloader from '../components/Preloader';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { addContactAction } from '../store/actions/contacts';
import { clearUserInfoAction } from '../store/actions/user';
import { isFetchingSelector } from '../store/selectors/contacts';
import { authStatusSelector, selectIsFetchingUser } from '../store/selectors/user';

const MainPage = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const isAuthorized = useSelector(authStatusSelector);
  const isLoading = useSelector(selectIsFetchingUser);
  const isContactsLoading = useSelector(isFetchingSelector);

  const onAddClick = () => {
    dispatch(addContactAction());
  };

  const onInputClear = () => {
    setInputValue('');
  };

  const signOut = () => {
    localStorage.removeItem('token');
    dispatch(clearUserInfoAction());
  };

  useEffect(() => {
    if (!isAuthorized) {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login', { replace: true });
      }
    }
  }, [isAuthorized]);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Courgette&display=swap"
        rel="stylesheet"
      />
      {(isLoading || isContactsLoading) && <Preloader />}
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
          <Button className="header-button" id="clear-button" onClick={onInputClear}>Clear</Button>
          <Button className="header-button" id="add-contact" onClick={onAddClick}>Add contact</Button>
        </div>
        <ContactsList inputValue={inputValue} />
      </div>
    </>
  );
};

export default MainPage;
