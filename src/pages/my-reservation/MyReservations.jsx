import React from 'react';
import CarCard, { car } from '../../components/my-reservations/CarCard';

// StyleSheet
import './MyReservations.css';

const MyReservations = () => (
  <div className="card-container">
    {car.map((carItem) => (
      <CarCard key={carItem.id} id={carItem.id} />
    ))}
  </div>
);

export default MyReservations;
