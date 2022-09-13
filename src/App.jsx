import React, { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import LoginWindow from "./components/LoginWindow";
import RegistrationWindow from "./components/RegistrationWindow";
import './styles/App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<RegistrationWindow/>}/>
        <Route path="login" element={<LoginWindow/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
