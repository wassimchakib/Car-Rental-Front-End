import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import './reserve.css';

const Reserve = () => (
  <div className="reservation background flex justify-center pt-[4rem] md:pt-[8rem] h-full">
    <SnackbarProvider autoHideDuration={2500}>
      <ReservationForm />
    </SnackbarProvider>
  </div>
);

export default Reserve;
