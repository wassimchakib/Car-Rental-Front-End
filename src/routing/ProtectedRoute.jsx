import { Outlet } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthenticationForm from '../components/AuthenticationForm/AuthenticationForm';
import Spinner from '../components/Spinner/Spinner';

const ProtectedRoute = () => {
  const { token, isLoading: isLoadingLogin } = useSelector((state) => state.authentication);
  const { isLoading: isLoadingRegister } = useSelector((state) => state.registration);
  console.log(!isLoadingLogin || !isLoadingRegister);

  // Login Form
  const authenticationForm = () => ((!isLoadingLogin && !isLoadingRegister)
    ? <AuthenticationForm /> : <Spinner />);

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
