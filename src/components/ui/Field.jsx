import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../utils/classnames';

const Field = ({
  type,
  icon,
  placeholder,
  className,
  name,
  id,
  label,
  children,
  onChange,
  value,
  onClick,
  readOnly,
}) => (
  <div className={cn('p-4 flex flex-col gap-4 relative', className)}>
    {
      icon && (
        <div className="absolute bottom-7 left-6">
          {icon}
        </div>
      )
    }
    {
      label && (
        <label
          htmlFor={id}
          className="text-xl font-semibold text-gray-600"
        >
          {label}
        </label>
      )
    }
    <input
      readOnly={readOnly}
      onChange={onChange}
      onClick={onClick}
      value={value}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={`block w-full p-3 ${icon ? 'pl-9' : ''} text-gray-800 border border-gray-200 rounded-md text-sm font-semibold focus-within:outline-none focus:ring-green-500 focus:border-green-500`}
    />
    {
      children && (
        <div className="absolute bottom-[-340px] left-0">
          {children}
        </div>
      )
    }
  </div>
);

Field.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  readOnly: PropTypes.bool,
};

Field.defaultProps = {
  type: 'text',
  className: null,
  icon: null,
  placeholder: null,
  value: null,
  name: null,
  id: null,
  label: null,
  children: null,
  onChange: null,
  onClick: null,
  readOnly: false,
};

export default Field;
