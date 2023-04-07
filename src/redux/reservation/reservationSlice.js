import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const SHOW_RESERVATIONS = 'car-rental/reservation/SHOW';

// Method getReservations
export const getReservations = createAsyncThunk(SHOW_RESERVATIONS, async (thunkAPI) => {
  const API_URL = 'http://localhost:1800/api/v1/reservations';
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.get(API_URL, requestOptions);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

// Method AddReservation
export const addReservation = createAsyncThunk(SHOW_RESERVATIONS, async (reservation, thunkAPI) => {
  const API_URL = 'http://localhost:1800/api/v1/reservations';
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.get(API_URL, { reservation }, requestOptions);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

// Registration Slice
const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    isLoading: false,
    success: false,
    error: '',
    list: '',
  },
  extraReducers: (builder) => {
    builder.addCase(getReservations.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(getReservations.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      list: action.payload.data.data.reservations,
    }));

    builder.addCase(getReservations.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));

    builder.addCase(addReservation.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(addReservation.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      response: action.payload.data.data,
    }));

    builder.addCase(addReservation.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      errors: action.payload.data.errors,
    }));
  },
});

export default reservationSlice.reducer;
