import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginWindow from "./components/LoginWindow";
import './styles/App.css'

function App() {
  // const [value, setValue] = useState('input text')

  return (
    <div className="App">
          <LoginWindow />
    </div>
  );
}

export default App;
