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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<RegistrationWindow />} />
        <Route path="login" element={<LoginWindow />} />
        <Route path="main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
