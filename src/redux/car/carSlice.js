<<<<<<< HEAD
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await axios.get('http:localhost:3000/api/v1/cars');
  return response.data;
});

export const addCar = createAsyncThunk('cars/addCar', async (car) => {
  const response = await axios.post('http:localhost:3000/api/v1/cars', car);
  return response.data;
});

export const deleteCar = createAsyncThunk('cars/deleteCar', async (carId) => {
  await axios.delete(`http:localhost:3000/api/v1/cars/${carId}`);
  return carId;
});

export const carsSlice = createSlice({
  name: 'cars',
  initialState: { cars: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => (
        {
          ...state,
          status: 'loading',
        }
      ))
      .addCase(fetchCars.fulfilled, (state, action) => (
        {
          ...state,
          status: 'succeeded',
          cars: action.payload,
        }
      ))
      .addCase(fetchCars.rejected, (state, action) => (
        {
          ...state,
          status: 'failed',
          error: action.error.message,
        }
      ))
      .addCase(addCar.pending, (state) => (
        {
          ...state,
          status: 'loading',
        }
      ))
      .addCase(addCar.rejected, (state, action) => (
        {
          ...state,
          status: 'failed',
          error: action.error.message,
        }
      ))
      .addCase(addCar.fulfilled, (state, action) => (
        {
          ...state,
          cars: [...state.cars, action.payload],
        }
      ))
      .addCase(deleteCar.pending, (state) => (
        {
          ...state,
          status: 'loading',
        }
      ))
      .addCase(deleteCar.rejected, (state, action) => (
        {
          ...state,
          status: 'failed',
          error: action.error.message,
        }
      ))
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.cars = state.cars.filter((car) => car.id !== action.payload);
      });
  },
});

export default carsSlice.reducer;
=======
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const SHOW_CARS = 'car-rental/car/SHOW';
const ADD_CAR = 'car-rental/car/ADD';
const DELETE_CAR = 'car-rental/car/DELETE';

// Method getCars
export const getCars = createAsyncThunk(SHOW_CARS, async (thunkAPI) => {
  const API_URL = 'http://localhost:1800/api/v1/cars';
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

// Method AddCar
export const addCar = createAsyncThunk(ADD_CAR, async (car, thunkAPI) => {
  const API_URL = 'http://localhost:1800/api/v1/cars';
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.post(API_URL, car, requestOptions);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

// Method Delete Car
export const deleteCar = createAsyncThunk(DELETE_CAR, async (id, thunkAPI) => {
  const API_URL = `http://localhost:1800/api/v1/cars/${id}`;
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.delete(API_URL, requestOptions);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});

// Car Slice
const carSlice = createSlice({
  name: 'car',
  initialState: {
    isLoading: false,
    success: false,
    error: '',
    list: '',
  },
  extraReducers: (builder) => {
    // Get Cars
    builder.addCase(getCars.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(getCars.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      list: action.payload.data.data.cars,
    }));

    builder.addCase(getCars.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));

    // Add Car

    builder.addCase(addCar.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(addCar.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      response: action.payload.data.data,
    }));

    builder.addCase(addCar.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      errors: action.payload.data.errors,
    }));

    // Delete Car

    builder.addCase(deleteCar.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(deleteCar.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      success: true,
      id: action.payload.data.data,
    }));

    builder.addCase(deleteCar.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload.data.error,
    }));
  },
});

export default carSlice.reducer;
>>>>>>> dev
