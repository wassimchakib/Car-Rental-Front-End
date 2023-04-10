import React from 'react';
import PropTypes from 'prop-types';

const CarCard = ({ item }) => {
  const startDate = new Date(item.starting_date);
  const endDate = new Date(item.ending_date);
  const timeDiff = endDate.getTime() - startDate.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
  const totalPrice = daysDiff * item.car.price;

  const truncatedText = item.car.description.length > 60
    ? `${item.car.description.slice(0, 65)}...`
    : item.car.description;

  return (
    <div className="reservation-card">
      <div className="image-container">
        <img className="car_img" src={item.car.images[0].url} alt="" />
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
