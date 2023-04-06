import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import Input from '../Input/Input';
import { getToken } from '../../redux/authentication/authenticationSlice';
import FormErrors from '../ui/FormErrors';
import { register, reset } from '../../redux/registration/registrationSlice';

const AuthenticationForm = ({ page }) => {
  const dispatch = useDispatch();
  const [pageName, setPageName] = useState(page);

  const { error: errorLogin } = useSelector((state) => state.authentication);
  const { error: errorRegister, success, message } = useSelector((state) => state.registration);
  const [username, setUsername] = useState({ target: { value: '' } });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = username.target.value.toLowerCase();
    if (pageName === 'Login') {
      dispatch(getToken(user));
    } else {
      dispatch(register(user));
    }
  };

  const handleClick = () => {
    if (pageName === 'Login') {
      setPageName('Register');
    } else {
      setPageName('Login');
      dispatch(reset());
    }
  };

  return (
    <>
      <FormErrors formErrors={pageName === 'Login' ? { Error: errorLogin } : { Error: errorRegister }} />
      { success && pageName !== 'Login' && (<p className="form__success">{message}</p>) }
      <form onSubmit={handleSubmit}>
        <Input name="username" type="text" onInput={setUsername} />
        <input type="submit" value={pageName === 'Login' ? 'login' : 'register'} />
      </form>
      <span className="form__action">
        {pageName === 'Login' ? 'Not registered?' : 'Already registered?'}
        {' '}
        <button type="button" className="register__btn" onClick={handleClick}>{pageName === 'Login' ? 'register' : 'login'}</button>
      </span>
    </>
  );
};

export default AuthenticationForm;
