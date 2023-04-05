import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await axios.get('/api/cars');
  return response.data;
});

export const addCar = createAsyncThunk('cars/addCar', async (car) => {
  const response = await axios.post('/api/cars', car);
  return response.data;
});

export const deleteCar = createAsyncThunk('cars/deleteCar', async (carId) => {
  await axios.delete(`/api/cars/${carId}`);
  return carId;
});

export const carsSlice = createSlice({
  name: 'cars',
  initialState: { cars: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.cars.push(action.payload);
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.cars = state.cars.filter((car) => car.id !== action.payload);
      });
  },
});

export const selectAllCars = (state) => state.cars.cars;
export const selectCarStatus = (state) => state.cars.status;
export const selectCarError = (state) => state.cars.error;

export default carsSlice.reducer;
