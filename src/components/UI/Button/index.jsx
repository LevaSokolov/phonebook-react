import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ type = 'button', ...props }) => (
    <button
      {...props}
      type={type}
    />
);

Button.propTypes = {
  type: PropTypes.string,
};

export default Button;
