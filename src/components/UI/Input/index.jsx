import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ value = '', onChange, ...props }) => {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <input
      {...props}
      value={value}
      onChange={handleChange}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
