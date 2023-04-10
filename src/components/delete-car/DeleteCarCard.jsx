import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const CarCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncatedText = item.car.description.length > 60
    ? `${item.car.description.slice(0, 65)}...`
    : item.car.description;

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  const handleConfirmClick = () => {
    // Delete the car
  };

  return (
    <div className="delete-car-card">
      <div className="image-container">
        <img className="car_img" src={item.car.images[0]} alt="" />
      </div>
      <h1 className="car-name">{item.car.name}</h1>
      <p className="car-color">{item.car.color}</p>
      <p className="description">{truncatedText}</p>
      <p className="price">
        {item.car.price}
        {' '}
        per day
      </p>
      <button className="btn-delete" type="button" onClick={handleDeleteClick}>
        Delete
      </button>
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
      color: PropTypes.string,
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
