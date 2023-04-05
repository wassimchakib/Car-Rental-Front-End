import React from 'react';
import CarCard, { car } from './CarCard';

// StyleSheet
import './DeleteCar.css';

const DeleteCar = () => (
  <div className="card-container">
    {car.map((carItem) => (
      <CarCard key={carItem.id} id={carItem.id} />
    ))}
  </div>
);

export default DeleteCar;
