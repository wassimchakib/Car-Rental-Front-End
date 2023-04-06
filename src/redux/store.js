import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import authenticationSlice from './authentication/authenticationSlice';

const store = configureStore({
  middleware: [logger, thunk],
  reducer: {
    authentication: authenticationSlice,
  },
});

export default store;
