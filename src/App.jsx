/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Routes, Route, Link, BrowserRouter,
} from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginWindow from './components/LoginWindow';
import RegistrationWindow from './components/RegistrationWindow';
import './styles/App.css';

function App() {
  const [token, setToken] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWindow setToken={setToken} />} />
        <Route path="login" element={<LoginWindow setToken={setToken} />} />
        <Route path="register" element={<RegistrationWindow />} />
        <Route path="main" element={<MainPage token={token} />} />
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
