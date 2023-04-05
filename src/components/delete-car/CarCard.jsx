import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const car = [
  {
    id: 1,
    image: 'https://hips.hearstapps.com/hmg-prod/images/c-005-1500x1000-1652713137.jpg?crop=0.919xw:0.775xh;0.0651xw,0.103xh&resize=2048:*',
    name: 'Toyota Camry',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 53,
    starting_date: 'Apr 05, 2023',
    ending_date: 'Apr 10, 2023',
  },
  {
    id: 2,
    image: 'https://www.topgear.com/sites/default/files/2022/03/1-Mercedes-S-Class-plug-in.jpg?w=892&h=502',
    name: 'Mercedes-Benz S-class',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 90,
    starting_date: 'Apr 20, 2023',
    ending_date: 'May 01, 2023',
  },
  {
    id: 3,
    image: 'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/6038cdb9-c3a7-42bd-9ec6-e874431a62fa/BMW%207%20Series%20%284%29.jpg?width=1200&fm=jpg&auto=format',
    name: 'BMW 7 Series',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 70,
    starting_date: 'Apr 08, 2023',
    ending_date: 'Apr 12, 2023',
  },
  {
    id: 4,
    image: 'https://hips.hearstapps.com/hmg-prod/images/2023-tesla-model-x-101-1671475309.jpeg?crop=0.402xw:0.362xh;0.381xw,0.295xh&resize=2048:*',
    name: 'Tesla Model X',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 105,
    starting_date: 'Apr 10, 2023',
    ending_date: 'Apr 25, 2023',
  },
  {
    id: 5,
    image: 'https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_1_815.jpg',
    name: 'Tesla Model Y',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 85,
    starting_date: 'Apr 20, 2023',
    ending_date: 'May 05, 2023',
  },
  {
    id: 6,
    image: 'https://media.ed.edmunds-media.com/kia/k5/2022/oem/2022_kia_k5_sedan_ex_fq_oem_1_815.jpg',
    name: 'Kia K5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 50,
    starting_date: 'Apr 05, 2023',
    ending_date: 'May 10, 2023',
  },
  {
    id: 7,
    image: 'https://media.ed.edmunds-media.com/hyundai/sonata-hybrid/2020/oem/2020_hyundai_sonata-hybrid_sedan_limited_fq_oem_1_815.jpg',
    name: 'Hyundai Sonata',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 45,
    starting_date: 'Apr 07, 2023',
    ending_date: 'Apr 10, 2023',
  },
  {
    id: 8,
    image: 'https://imgd-ct.aeplcdn.com/1056x660/cw/ec/36129/MercedesBenz-G63-AMG-New-Exterior-136618.jpg?wm=0&q=75',
    name: 'Mercedes-Benz G-Class',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 230,
    starting_date: 'Apr 05, 2023',
    ending_date: 'Apr 15, 2023',
  },
];

const CarCard = ({ id }) => {
  const currentCar = car.find((car) => car.id === id);
  const startDate = new Date(currentCar.starting_date);
  const endDate = new Date(currentCar.ending_date);
  const timeDiff = endDate.getTime() - startDate.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
  const totalPrice = daysDiff * currentCar.price;

  const truncatedText = currentCar.description.length > 60
    ? `${currentCar.description.slice(0, 65)}...`
    : currentCar.description;

  return (
    <div className="reservation-card">
      <div className="image-container">
        <img className="car_img" src={currentCar.image} alt="" />
        {/* <span className="label">Reserved</span> */}
      </div>
      <h1 className="car-name">{currentCar.name}</h1>
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
          {currentCar.price}
          {' '}
          per day
        </span>
      </p>
      <p className="dates">
        {currentCar.starting_date}
        {' '}
        -
        {' '}
        {currentCar.ending_date}
      </p>
      <button type="button">Delete</button>
    </div>
  );
};

CarCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CarCard;
