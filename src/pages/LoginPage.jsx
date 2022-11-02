/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Preloader from '../components/Preloader';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { getUserInfoAction } from '../store/actions/user';
import { authStatusSelector, selectIsFetchingUser } from '../store/selectors/user';

const LoginWindow = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthorized = useSelector(authStatusSelector);
  const isLoading = useSelector(selectIsFetchingUser);

  const handleClick = () => {
    if (login && password) {
      dispatch(getUserInfoAction(login, password));
    } else {
      alert('Fill in all the fields');
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      const token = localStorage.getItem('token');
      if (token) {
        navigate('/main');
      }
    }
  }, [isAuthorized]);

  return (
    <div className="post">
      {isLoading && <Preloader />}
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
      <Button className="forgotButton">Forgot?</Button>
      <Button className="lowerButtons" onClick={handleClick}>LOGIN</Button>
      <Link to="/register">
        <Button className="lowerButtons">REGISTER</Button>
      </Link>
    </div>
  );
};

export default LoginWindow;
