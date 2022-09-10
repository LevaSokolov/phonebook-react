import React, { useState } from "react";
import LoginWindow from "./components/LoginWindow";
import './styles/App.css'

function App() {
  // const [value, setValue] = useState('input text')

  return (
    <div className="App">
          <LoginWindow post={{id: 1, title: 'Javascript', body: 'Description'}} />
    </div>
    
  );
}

export default App;
