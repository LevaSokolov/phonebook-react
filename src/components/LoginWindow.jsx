import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from './UI/Button';
import Input from './UI/Input';

const LoginWindow = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const navigate = useNavigate();
  const pressLoginButton = () => {
    fetch('http://127.0.0.1:5432/login', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
    }).then((response) => {
      response
        .json()
        .then((data) => {
          if (response.status === 401) {
            throw new Error(data.message);
          }
          localStorage.setItem('token', data.token);
          const token = localStorage.getItem('token');
          if (token) {
            navigate('/main');
          }
        })
        .catch((e) => {
          alert(e.message);
        });
    });
  };

  return (
    <div className="post">
      <strong className="login-title">LOGIN IN PHONEBOOK, BUDDY</strong>
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
      <input className="check" type="checkbox" />
      <div className="remember-me">Remember me</div>
      <Button className="forgotButton" onClick={() => alert('Well, congratulations')}>Forgot?</Button>
      <Button className="lowerButtons" onClick={pressLoginButton}>LOGIN</Button>
      <Link to="/register">
        <Button className="lowerButtons">REGISTER</Button>
      </Link>
    </div>
  );
};

export default LoginWindow;
