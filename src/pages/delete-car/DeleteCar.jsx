import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../../components/delete-car/DeleteCarCard';

// StyleSheet
import './DeleteCar.css';
import '../my-reservation/MyReservations.css';
import Spinner from '../../components/Spinner/Spinner';

const DeleteCar = () => {
  const { list, isLoading } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOfCars());
  }, [dispatch]);

  const showListOfCars = () => (list.map(
    (carItem) => (<CarCard key={carItem.id} item={carItem} />),
  ));
  return (
    <div className="delete-car-container">
      { isLoading && <Spinner />}
      {list.length > 0 ? (
        showListOfCars()
      ) : (
        <p className="empty-msg">There are no cars on this page.</p>
      )}
    </div>
  );
};

export default DeleteCar;
