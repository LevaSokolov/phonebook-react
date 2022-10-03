import React, { useState } from 'react';

function Input(props) {
  return (
    <input
      value={props.value}
      className="usernameInput"
      placeholder="Username"
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
}

export default Input;
