import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// StyleSheet
import './MyReservations.css';
import { getReservations } from '../../redux/reservation/reservationSlice';

import Spinner from '../../components/Spinner/Spinner';
import CarCard from '../../components/my-reservations/CarCard';

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
      { list.length <= 0 && <h2>No Reservations Found</h2> }
      {
        isLoading
          ? <Spinner />
          : showListOfReservations()
      }
    </div>
  );
};

export default MyReservations;
