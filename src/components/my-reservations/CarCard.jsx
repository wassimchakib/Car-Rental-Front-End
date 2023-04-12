import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../delete-car/Modal';
import { deleteReservation } from '../../redux/reservation/reservationSlice';

const CarCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startDate = new Date(item.starting_date);
  const endDate = new Date(item.ending_date);

  const timeDiff = endDate.getTime() - startDate.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
  const totalPrice = daysDiff * item.car.price;

  const truncatedText = item.car.description.length > 60
    ? `${item.car.description.slice(0, 65)}...`
    : item.car.description;

  const dispatch = useDispatch();

  const handleCancelReservationClick = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  const handleConfirmClick = () => {
    setIsModalOpen(false);
    dispatch(deleteReservation(item.id));
  };

  return (
    <div className="reservation-card">
      <div className="image-container">
        <img className="car_img" src={item.car.images.length > 0 && item.car.images[0].url} alt={item.car.name} />
        <span className="label">Reserved</span>
      </div>
      <h1 className="car-name">{item.car.name}</h1>
      <p className="description">{truncatedText}</p>
      <p className="price">

        <span className="total_price">
          $
          {totalPrice}
        </span>
        {' '}
        |
        {' '}
        <span className="daily_price">
          $
          {item.car.price}
          {' '}
          per day
        </span>
      </p>
      <p className="dates">
        {item.starting_date}
        {' '}
        -
        {' '}
        {item.ending_date}
      </p>
      <button className="btn-cancel" type="button" onClick={handleCancelReservationClick}>Cancel reservation</button>
      <Modal isOpen={isModalOpen} onCancel={handleCancelClick} onConfirm={handleConfirmClick} />
    </div>
  );
};

CarCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    ending_date: PropTypes.string,
    starting_date: PropTypes.string,
    car: PropTypes.shape({
      price: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
};

export default CarCard;
