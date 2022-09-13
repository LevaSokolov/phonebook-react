import React from "react";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import RegistrationWindow from "./RegistrationWindow";
import Input from "./UI/Input/Input";
import login from "./UI/Input/Input";


const LoginWindow = (props) => {
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
  const navigate = useNavigate();
  const pressLoginButton = () => {
    try {
      fetch("http://127.0.0.1:5432/login", {
        method: "POST",
        body: JSON.stringify({ login, password}),
      }).then((response) => {
        response
          .json()
          .then((data) => {
            if (response.status === 401) {
              throw new Error(data.message);
            }
            localStorage.setItem("token", data.token);
            navigate('/main');
          })
          .catch((e) => {
            alert(e.message)
          });
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  
  return (
    <div className="post">
      <strong className="title">LOGIN IN PHONEBOOK, BUDDY</strong>
        <Input value={login} onChange={setLogin}/>
          <input 
          className="passInput"
          placeholder="Password"
          type='password'
          onChange={event => setPassword(event.target.value)}
          />
          <input className="check" type='checkbox'></input>
          <div className="remember-me">Remember me</div>
          <button className="forgotButton" onClick={() => alert('Well, congratulations')}>Forgot?</button>
               <button className="lowerButtons" onClick={pressLoginButton}>LOGIN</button>
            <Link to='/register'>
                <button className="lowerButtons">REGISTER</button>
            </Link>
    </div>
  )
}
export default LoginWindow;