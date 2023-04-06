import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = configureStore({
  middleware: [logger, thunk],
  reducer: {
    authentication: authenticationReducer,
  },
});

export default store;
