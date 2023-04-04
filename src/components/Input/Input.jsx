import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Input = ({
  name, type, onInput, value, isValid,
}) => (
  <label htmlFor={name}>
    {name}
    :
    {
      type === 'textarea' ? (<textarea id={name} name={name} value={value} onChange={(e) => onInput(e)} className={!isValid && isValid != null ? 'error' : ''} />)
        : (<input type={type} onChange={(e) => onInput(e)} id={name} name={name} value={value} className={!isValid && isValid != null ? 'error' : ''} />)
    }
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
};

Input.defaultProps = {
  isValid: true,
};

export default Input;
