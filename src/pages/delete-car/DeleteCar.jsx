import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PuffLoader } from 'react-spinners';
import CarCard from '../../components/delete-car/DeleteCarCard';

// StyleSheet
import './DeleteCar.css';
import '../my-reservation/MyReservations.css';
import { getCars } from '../../redux/car/carSlice';

const DeleteCar = () => {
  const { list, isLoading } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars(true));
  }, [dispatch]);

  const showListOfCars = () => (list.map(
    (carItem) => (<CarCard key={carItem.id} item={carItem} />),
  ));

  const showLoading = (isLoading) => {
    if (isLoading) {
      return (
        <div>
          <PuffLoader
            size={80}
            speedMultiplier={1}
          />
        </div>
      );
    }
    return (
      list.length > 0
        ? showListOfCars()
        : <p className="empty-msg">There are no cars on this page.</p>
    );
  };

  return (
    <div className={!isLoading ? 'delete-car-container' : 'absolute left-[50%] top-[40%] translate-x-[-50%] ss:mt-[5rem] xs:mt-[5rem] sm:mt-0 md:mt-0'}>
      {showLoading(isLoading)}
    </div>
  );
};

export default DeleteCar;
