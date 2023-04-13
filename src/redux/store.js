import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import authenticationSlice from './authentication/authenticationSlice';
import registrationSlice from './registration/registrationSlice';
import reservationSlice from './reservation/reservationSlice';
import carSlice from './car/carSlice';

const store = configureStore({
  middleware: [logger, thunk],
  reducer: {
    authentication: authenticationSlice,
    registration: registrationSlice,
    reservation: reservationSlice,
    car: carSlice,
  },
});

export default store;
