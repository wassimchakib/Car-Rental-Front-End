import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  name, options, onDrop, value,
}) => (
  <label htmlFor={name}>
    {name}
    <select id={name} name={name} onChange={(e) => onDrop(e)} value={value}>
      {options.map((item) => (<option key={item} value={item}>{item}</option>))}
    </select>
  </label>
);

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDrop: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Dropdown;
