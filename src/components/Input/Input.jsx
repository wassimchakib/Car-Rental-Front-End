import React from 'react';
import PropTypes from 'prop-types';
import 'index.css';

const Input = ({
  name, type, handleInput, value,
}) => (
  <label htmlFor={name}>
    {name}
    :
    <input type={type} onChange={(e) => handleInput(e)} id={name} name={name} value={value} />
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleInput: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
