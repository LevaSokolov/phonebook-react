/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Routes, Route, Link, BrowserRouter,
} from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginWindow from './components/LoginWindow';
import RegistrationWindow from './components/RegistrationWindow';
import './styles/App.css';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWindow />} />
        <Route path="login" element={<LoginWindow />} />
        <Route path="register" element={<RegistrationWindow />} />
        <Route path="main" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
