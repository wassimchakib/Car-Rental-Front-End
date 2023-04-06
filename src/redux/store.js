import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import authenticationSlice from './authentication/authenticationSlice';
import registrationSlice from './registration/registrationSlice';

const store = configureStore({
  middleware: [logger, thunk],
  reducer: {
    authentication: authenticationSlice,
    registration: registrationSlice,
  },
});

export default store;
