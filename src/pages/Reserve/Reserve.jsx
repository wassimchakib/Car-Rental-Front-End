import { useParams } from 'react-router-dom';
import React from 'react';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import './reserve.css';

const Reserve = () => {
  const { id } = useParams();

  return (
    <div className="reservation background flex justify-center py-[4rem] md:pt-[8rem] h-full">
      <ReservationForm carId={id} />
    </div>
  );
};

export default Reserve;
