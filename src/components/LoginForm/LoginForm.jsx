import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Input from '../Input/Input';
import { getToken } from '../../redux/authentication/authenticationSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState({ target: { value: '' } });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getToken(username.target.value.toLowerCase()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="username" type="text" onInput={setUsername} />
      <input type="submit" value="login" />
    </form>
  );
};

export default LoginForm;
