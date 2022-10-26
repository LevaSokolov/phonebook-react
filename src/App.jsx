import './styles/App.css';

import React from 'react';
import {
  BrowserRouter,
  Route, Routes,
} from 'react-router-dom';

import LoginWindow from './components/LoginWindow';
import MainPage from './components/MainPage';
import NotFoundPage from './components/NotFoundPage';
import RegistrationWindow from './components/RegistrationWindow';

const App = () => (
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

export default App;
