import '../styles/App.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from './UI/Button';
import Input from './UI/Input';

const RegistrationWindow = () => {
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
      <Input
        value={login}
        onChange={setLogin}
        className="usernameInput"
        placeholder="Username"
      />
      <Input
        value={password}
        className="passInput"
        placeholder="Password"
        type="password"
        onChange={setPassword}
      />
      <Button className="lowerButtons" onClick={pressRegButton}>REGISTER</Button>
      <Link to="/login">
        <Button className="lowerButtons">GO BACK</Button>
      </Link>
    </div>
  );
};

export default RegistrationWindow;
