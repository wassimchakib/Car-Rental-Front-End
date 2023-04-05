import PropTypes from 'prop-types';
import React from 'react';

const FormErrors = ({ formErrors }) => (
  <div>
    {
      Object.keys(formErrors).map((field) => (
        formErrors[field].length > 0 && (
        <p className="form__errors" key={`${field}`}>
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
};

export default FormErrors;
