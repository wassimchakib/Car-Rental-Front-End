import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// StyleSheet
import './MyReservations.css';
import { getReservations } from '../../redux/reservation/reservationSlice';
import CarCard from '../../components/delete-car/DeleteCarCard';
import Spinner from '../../components/Spinner/Spinner';

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
      { list && list.length > 0 ? showListOfReservations() : <h2>No Reservations Found</h2> }
    </div>
  );
};

export default MyReservations;
