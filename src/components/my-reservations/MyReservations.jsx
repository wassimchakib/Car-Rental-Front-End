import React from 'react';
import CarImage from '../../assets/images/Corolla.jpeg';
import Camry from '../../assets/images/Camry.jpeg';

// StyleSheet
import './MyReservations.css';

const MyReservations = () => (
  <div className="card-container">
    <div className="reservation-card">
      <img className="car_img" src={CarImage} alt="" />
      <h1 className="car-name">Toyota Corolla</h1>
      <span className="label">Reserved</span>
    </div>
    <div className="reservation-card">
      <img className="car_img" src={Camry} alt="" />
      <h1 className="car-name">Toyota Camry</h1>
      <span className="label">Reserved</span>
    </div>
    <div className="reservation-card">
      <img className="car_img" src={Camry} alt="" />
      <h1 className="car-name">Toyota Corolla</h1>
      <span className="label">Reserved</span>
    </div>
    <div className="reservation-card">
      <img className="car_img" src={Camry} alt="" />
      <h1 className="car-name">Toyota Corolla</h1>
      <span className="label">Reserved</span>
    </div>
    <div className="reservation-card">
      <img className="car_img" src={Camry} alt="" />
      <h1 className="car-name">Toyota Corolla</h1>
      <span className="label">Reserved</span>
    </div>
    <div className="reservation-card">
      <img className="car_img" src={Camry} alt="" />
      <h1 className="car-name">Toyota Corolla</h1>
      <span className="label">Reserved</span>
    </div>
    <div className="reservation-card">
      <img className="car_img" src={Camry} alt="" />
      <h1 className="car-name">Toyota Corolla</h1>
      <span className="label">Reserved</span>
    </div>

  </div>
);

export default MyReservations;
