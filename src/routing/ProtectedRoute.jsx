import { Outlet } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthenticationForm from '../components/AuthenticationForm/AuthenticationForm';
import Spinner from '../components/Spinner/Spinner';

const ProtectedRoute = () => {
  const { token, isLoading: isLoadingLogin } = useSelector((state) => state.authentication);
  const {
    isLoading: isLoadingRegister,
    success: registrationSuccess,
    error: registrationError,
  } = useSelector((state) => state.registration);

  const showLogin = () => (
    !isLoadingLogin ? <AuthenticationForm page="Login" /> : <Spinner />
  );

  const showRegister = () => (
    !isLoadingRegister ? <AuthenticationForm page="Register" /> : <Spinner />
  );

  // Login Form
  const authenticationForm = () => (
    registrationSuccess && registrationError.length === 0 ? showLogin() : showRegister());

  return (
    !token || token.length <= 0 ? (
      <section id="form">
        <div className="form__container">
          {authenticationForm()}
        </div>
      </section>
    ) : <Outlet />
  );
};

export default ProtectedRoute;
