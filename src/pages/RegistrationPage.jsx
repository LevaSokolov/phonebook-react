import '../styles/App.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { signUpUserAction } from '../store/actions/user';

const RegistrationWindow = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    if (login && password) {
      dispatch(signUpUserAction(login, password));
    } else {
      alert('Fill in all the fields');
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
      <Button className="lowerButtons" onClick={handleClick}>REGISTER</Button>
      <Link to="/login">
        <Button className="lowerButtons">GO BACK</Button>
      </Link>
    </div>
  );
};

export default RegistrationWindow;
