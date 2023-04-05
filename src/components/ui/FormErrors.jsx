import PropTypes from 'prop-types';
import React from 'react';

const FormErrors = ({ formErrors, isValid }) => (
  <div className={isValid || isValid == null ? '' : 'form__errors'}>
    {
      Object.keys(formErrors).map((field) => (
        formErrors[field].length > 0 && (
        <p key={`${field}`}>
          {field}
          :
          {' '}
          {formErrors[field]}
        </p>
        )
      ))
    }
  </div>
);

FormErrors.propTypes = {
  formErrors: PropTypes.objectOf(PropTypes.string).isRequired,
  isValid: PropTypes.bool,
};

FormErrors.defaultProps = {
  isValid: null,
};

export default FormErrors;
