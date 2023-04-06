import { Outlet } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import Spinner from '../components/Spinner/Spinner';

const ProtectedRoute = () => {
  const { token, isLoading } = useSelector((state) => state.authentication);

  // Login Form
  const loginForm = () => (!isLoading ? <LoginForm /> : <Spinner />);

  return (
    !token || token.length <= 0 ? loginForm() : <Outlet />
  );
};

export default ProtectedRoute;
