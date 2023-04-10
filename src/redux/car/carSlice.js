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
