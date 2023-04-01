import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2 className="navbar__title">RentIt</h2>
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
);

export default Navbar;
