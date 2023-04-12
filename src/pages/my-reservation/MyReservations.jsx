import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// StyleSheet
import './MyReservations.css';
import { PuffLoader } from 'react-spinners';
import { getReservations } from '../../redux/reservation/reservationSlice';
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

  const showLoading = (isLoading) => {
    if (isLoading) {
      return (
        <div className="w-[100%] flex justify-center items-center mt-6">
          <PuffLoader
            color="#98BF11"
            size={60}
            speedMultiplier={1}
          />
        </div>
      );
    }
    return (
      list.length > 0
        ? showListOfReservations()
        : <p className="empty-msg">No reservations found.</p>
    );
  };

  return (
    <div className={!isLoading ? 'card-container' : ''}>
      {showLoading(isLoading)}
    </div>
  );
};

export default MyReservations;
