import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// useNavigate
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import { getUserInfoAction } from '../store/actions/user';

const LoginWindow = () => {
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (login && password) {
      dispatch(getUserInfoAction());
    } else {
      alert('Fill in all the fields');
    }
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
      <Button className="forgotButton">Forgot?</Button>
      <Button className="lowerButtons" onClick={handleClick}>LOGIN</Button>
      <Link to="/register">
        <Button className="lowerButtons">REGISTER</Button>
      </Link>
    </div>
  );
};

export default LoginWindow;
