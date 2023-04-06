import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useRef } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import myIcon from '../../images/icon.png';

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
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
          <li><NavLink to="cars" className={({ isActive }) => (isActive ? 'active' : '')}>Cars</NavLink></li>
          <li><NavLink to="reserve" className={({ isActive }) => (isActive ? 'active' : '')}>Booking</NavLink></li>
          <li><NavLink to="my-reservations" className={({ isActive }) => (isActive ? 'active' : '')}>Reservations</NavLink></li>
          <li><NavLink to="add" className={({ isActive }) => (isActive ? 'active' : '')}>Add A Car</NavLink></li>
          <li><NavLink to="delete" className={({ isActive }) => (isActive ? 'active' : '')}>Delete A Car</NavLink></li>
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
