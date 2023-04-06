import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import Input from '../Input/Input';
import { getToken } from '../../redux/authentication/authenticationSlice';
import FormErrors from '../ui/FormErrors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.authentication);
  const [username, setUsername] = useState({ target: { value: '' } });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getToken(username.target.value.toLowerCase()));
  };

  return (
    <section id="form">
      <div className="form__container">
        <FormErrors formErrors={{ error }} />
        <form onSubmit={handleSubmit}>
          <Input name="username" type="text" onInput={setUsername} />
          <input type="submit" value="login" />
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
