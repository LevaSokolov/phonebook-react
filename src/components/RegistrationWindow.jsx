/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import Input from './UI/Input/Input';

function RegistrationWindow() {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const pressRegButton = () => {
    if (login && password !== '') {
      try {
        fetch('http://127.0.0.1:5432/add-user', {
          method: 'POST',
          body: JSON.stringify({
            login,
            password,
          }),
        }).then((response) => {
          response.json().then((data) => {
            if (data.message) {
              alert('This username is already taken');
              return;
            }
            alert('You have been registered successfuly');
            // setTimeout(() => (window.location.href = ""), 4000);
          });
        });
      } catch (error) {
        console.error(error.message);
      }
    } else {
      alert('Fill in all the fields, fool');
    }
  };
  return (
    <div className="post">
      <strong className="title">REGISTER IN PHONEBOOK, BUDDY</strong>
      <Input value={login} onChange={setLogin} />
      <input
        className="passInput"
        placeholder="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="lowerButtons" onClick={pressRegButton}>REGISTER</button>
      <Link to="/login">
        <button className="lowerButtons">GO BACK</button>
      </Link>
    </div>
  );
}

export default RegistrationWindow;
