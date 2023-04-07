import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarCard from './CarCard';
import Spinner from '../Spinner/Spinner';
// StyleSheet
import './MyReservations.css';
import { getReservations } from '../../redux/reservation/reservationSlice';

const MyReservations = () => {
  const { list, isLoading } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  const showListOfReservations = () => (list.map(
    (carItem) => (<CarCard key={carItem.id} item={carItem} />),
  ));

  return (
    <div className="card-container">
      { isLoading && <Spinner />}
      { list.length > 0 ? showListOfReservations() : <h2>No Reservations Found</h2> }
    </div>
  );
};

export default MyReservations;
