import React from 'react';
import CarCard, { car } from '../../components/delete-car/DeleteCarCard';

// StyleSheet
import './DeleteCar.css';
import '../my-reservation/MyReservations.css';

const DeleteCar = () => (
  <div className="delete-car-container">
    {car.length > 0 ? (
      car.map((carItem) => <CarCard key={carItem.id} id={carItem.id} />)
    ) : (
      <p className="empty-msg">There are no cars on this page.</p>
    )}
  </div>
);

export default DeleteCar;
