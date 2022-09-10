import React from "react";

const LoginWindow = (props) => {

  return (
    <div className="App">
      <div className="post">
          <strong>LOGIN IN PHONEBOOK, BUDDY</strong>
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <input type='checkbox'></input>
          <div>Remember me</div>
        <button className="lowerButtons">LOGIN</button>
        <button className="lowerButtons">REGISTER</button>
      </div>
    </div>
  )
}

export default LoginWindow;