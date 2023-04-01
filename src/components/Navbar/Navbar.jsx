import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h2 className="navbar__title">RentIt</h2>
    <ul>
      <li><Link to="cars">Cars</Link></li>
      <li><Link to="reserve">Reserve</Link></li>
      <li><Link to="my-reservations">My Reservations</Link></li>
      <li><Link to="add">Add A Car</Link></li>
      <li><Link to="delete">Delete A Car</Link></li>
    </ul>
  </nav>
);

export default Navbar;
