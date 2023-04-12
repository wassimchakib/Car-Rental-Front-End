import { useDispatch, useSelector } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useRef } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/authentication/authenticationSlice';
import myIcon from '../../images/icon.png';

const Navbar = () => {
  const navRef = useRef();
  const { token, isLoading } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const hideNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const handleClick = () => {
    dispatch(logout());
    if (navRef.current.classList.contains('responsive_nav')) {
      hideNavBar();
    }
  };

  return (
    <div className="header__navbar" ref={navRef}>
      <button type="button" className="nav-btn nav-open-btn" onClick={showNavBar}>
        <FaBars />
      </button>
      <nav className="navbar">
        <button type="button" className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
        <img className="navbar__title" src={myIcon} alt="Rent It icon" />
        <ul className="navbar__links">
          <li><NavLink onClick={hideNavBar} to="cars" className={({ isActive }) => (isActive ? 'active' : '')}>Cars</NavLink></li>
          <li><NavLink onClick={hideNavBar} to="reserve" className={({ isActive }) => (isActive ? 'active' : '')}>Booking</NavLink></li>
          <li><NavLink onClick={hideNavBar} to="my-reservations" className={({ isActive }) => (isActive ? 'active' : '')}>Reservations</NavLink></li>
          <li><NavLink onClick={hideNavBar} to="add" className={({ isActive }) => (isActive ? 'active' : '')}>Add A Car</NavLink></li>
          <li><NavLink onClick={hideNavBar} to="delete" className={({ isActive }) => (isActive ? 'active' : '')}>Delete A Car</NavLink></li>
          {(!token || token.length <= 0 || isLoading) || (<li><button className="nav__logout" type="button" onClick={handleClick}>Logout</button></li>)}
        </ul>
        <h3 className="navbar__footer">
          Copyright ©
          {new Date().getFullYear()}
        </h3>
      </nav>
    </div>
  );
};

export default Navbar;
