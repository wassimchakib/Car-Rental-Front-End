import React from 'react';
import CarCard, { car } from '../../components/my-reservations/CarCard';

// StyleSheet
import './MyReservations.css';

const MyReservations = () => (
  <div className="card-container">
    {car.length > 0 ? (
      car.map((carItem) => <CarCard key={carItem.id} id={carItem.id} />)
    ) : (
      <p className="empty-msg">There are no cars on this page.</p>
    )}
  </div>
);

export default MyReservations;
