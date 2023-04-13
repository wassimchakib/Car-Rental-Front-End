import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const SHOW_RESERVATIONS = 'car-rental/reservation/SHOW';
const ADD_RESERVATION = 'car-rental/reservation/ADD';
const DELETE_RESERVATION = 'car-rental/reservation/DELETE';

// Base URL
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Method getReservations
export const getReservations = createAsyncThunk(SHOW_RESERVATIONS, async (thunkAPI) => {
  const API_URL = `${BASE_URL}/api/v1/reservations`;
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
export const addReservation = createAsyncThunk(ADD_RESERVATION, async (reservation, thunkAPI) => {
  const API_URL = `${BASE_URL}/api/v1/reservations`;
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.post(API_URL, reservation, requestOptions);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

// Method DeleteReservation
export const deleteReservation = createAsyncThunk(DELETE_RESERVATION, async (id, thunkAPI) => {
  const API_URL = `${BASE_URL}/api/v1/reservations/${id}`;
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await axios.delete(API_URL, requestOptions);
    return id;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

// Reservation Slice
const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    isLoading: false,
    success: false,
    error: '',
    list: [],
    response: null,
  },
  reducers: {
    resetErrors: (state) => ({
      ...state,
      error: '',
      isLoading: false,
      success: false,
      response: null,
    }),
  },
  extraReducers: (builder) => {
    // Get Reservations
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

    // Add Reservation

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

    // Delete Reservation

    builder.addCase(deleteReservation.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      const id = action.payload;

      return {
        ...state,
        isLoading: false,
        success: true,
        id,
        list: state.list.filter((reservation) => reservation.id !== id),
      };
    });

    builder.addCase(deleteReservation.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.data.error,
    }));
  },
});

export const { resetErrors } = reservationSlice.actions;
export default reservationSlice.reducer;
