import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = ({
  name, type, onInput, value,
}) => (
  <label htmlFor={name}>
    {name}
    :
    {
      type === 'textarea' ? (<textarea id={name} name={name} value={value} onChange={(e) => onInput(e)} />)
        : (<input type={type} onChange={(e) => onInput(e)} id={name} name={name} value={value} />)
    }
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
