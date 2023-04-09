import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

export const car = [
  {
    id: 1,
    image: 'https://hips.hearstapps.com/hmg-prod/images/c-005-1500x1000-1652713137.jpg?crop=0.919xw:0.775xh;0.0651xw,0.103xh&resize=2048:*',
    name: 'Toyota Camry',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 53,
    color: 'Dark blue',
  },
  {
    id: 2,
    image: 'https://www.topgear.com/sites/default/files/2022/03/1-Mercedes-S-Class-plug-in.jpg?w=892&h=502',
    name: 'Mercedes-Benz S-class',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 90,
    color: 'Black',
  },
  {
    id: 3,
    image: 'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/6038cdb9-c3a7-42bd-9ec6-e874431a62fa/BMW%207%20Series%20%284%29.jpg?width=1200&fm=jpg&auto=format',
    name: 'BMW 7 Series',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 70,
    color: 'Blue',
  },
  {
    id: 4,
    image: 'https://hips.hearstapps.com/hmg-prod/images/2023-tesla-model-x-101-1671475309.jpeg?crop=0.402xw:0.362xh;0.381xw,0.295xh&resize=2048:*',
    name: 'Tesla Model X',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 105,
    color: 'Grey',
  },
  {
    id: 5,
    image: 'https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_1_815.jpg',
    name: 'Tesla Model Y',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 85,
    color: 'White',
  },
  {
    id: 6,
    image: 'https://media.ed.edmunds-media.com/kia/k5/2022/oem/2022_kia_k5_sedan_ex_fq_oem_1_815.jpg',
    name: 'Kia K5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 50,
    color: 'Space grey',
  },
  {
    id: 7,
    image: 'https://media.ed.edmunds-media.com/hyundai/sonata-hybrid/2020/oem/2020_hyundai_sonata-hybrid_sedan_limited_fq_oem_1_815.jpg',
    name: 'Hyundai Sonata',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 45,
    color: 'Red',
  },
  {
    id: 8,
    image: 'https://imgd-ct.aeplcdn.com/1056x660/cw/ec/36129/MercedesBenz-G63-AMG-New-Exterior-136618.jpg?wm=0&q=75',
    name: 'Mercedes-Benz G-Class',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 230,
    color: 'White',
  },
];

const CarCard = ({ id }) => {
  const currentCar = car.find((car) => car.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncatedText = currentCar.description.length > 60
    ? `${currentCar.description.slice(0, 65)}...`
    : currentCar.description;

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
        <img className="car_img" src={currentCar.image} alt="" />
      </div>
      <h1 className="car-name">{currentCar.name}</h1>
      <p className="car-color">{currentCar.color}</p>
      <p className="description">{truncatedText}</p>
      <p className="price">
        {currentCar.price}
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
  id: PropTypes.number.isRequired,
};

export default CarCard;