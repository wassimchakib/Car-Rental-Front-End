import React from 'react';
// import { car } from '../my-reservations/CarCard';
import './CarsList.css';

const CarList = () => {
  return (
    <div className="car-container">
      <div className="left">
        <button> Prev </button>
      </div>

      <div className="list-container">
        <h1>lates luxury car</h1>
        <p>Please select a car to view details</p>

        <div className="card-list">
          <div className="card">
            car1
          </div>
          <div className="card">
            car1
          </div>
          <div className="card">
            car1
          </div>
        </div>
      </div>
      
      <div className="right">
        <button> Next </button>
      </div>

    </div>
  )
}

export default CarList
