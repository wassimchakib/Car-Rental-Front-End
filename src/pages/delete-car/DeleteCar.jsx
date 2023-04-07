import React from 'react';
import CarCard, { car } from '../../components/delete-car/DeleteCarCard';

// StyleSheet
import './DeleteCar.css';
import '../my-reservation/MyReservations.css';

const DeleteCar = () => (
  <div className="delete-car-container">
    {car.map((carItem) => (
      <CarCard key={carItem.id} id={carItem.id} />
    ))}
  </div>
);

export default DeleteCar;
