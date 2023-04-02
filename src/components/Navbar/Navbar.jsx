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
          <li><NavLink to="cars" activeClassName="active">Cars</NavLink></li>
          <li><NavLink to="reserve" activeClassName="active">Reserve</NavLink></li>
          <li><NavLink to="my-reservations" activeClassName="active">My Reservations</NavLink></li>
          <li><NavLink to="add" activeClassName="active">Add A Car</NavLink></li>
          <li><NavLink to="delete" activeClassName="active">Delete A Car</NavLink></li>
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
