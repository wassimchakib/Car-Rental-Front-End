import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const CarCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncatedText = item.description.length > 60
    ? `${item.description.slice(0, 65)}...`
    : item.description;

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
        <img className="car_img" src={item.images[0].url} alt="" />
      </div>
      <h1 className="car-name">{item.name}</h1>
      <p className="car-color">{item.color}</p>
      <p className="description">{truncatedText}</p>
      <p className="price">
        {item.price}
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
    price: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default CarCard;
