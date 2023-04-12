import React from 'react';
import { Provider } from 'react-redux';
import {
  render, waitFor, act, screen,
} from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import carSlice, { getCars } from '../../redux/car/carSlice';
import AddCar from '../../pages/AddCar/AddCar';
import cars from '../data/cars.json';

jest.mock('axios');

const store = configureStore({
  reducer: {
    car: carSlice,
  },
});

describe('AddCar page', () => {
  beforeEach(async () => {
    axios.get.mockResolvedValue({ data: cars });
    await act(() => store.dispatch(getCars()));
    await act(() => render(
      <Provider store={store}>
        <AddCar />
      </Provider>,
    ));
  });

  it('should have a submit button', async () => {
    await waitFor(() => {
      const button = screen.getByText('Submit');

      expect(button).toBeInTheDocument();
    });
  });

  it('should have a name input field', async () => {
    await waitFor(() => {
      const nameLabel = screen.getByLabelText('Name:');

      expect(nameLabel).toBeInTheDocument();
    });
  });

  it('should have a description input field', async () => {
    await waitFor(() => {
      const nameLabel = screen.getByLabelText('Description:');
      expect(nameLabel).toBeInTheDocument();
    });
  });

  it('should have a color input field', async () => {
    await waitFor(() => {
      const nameLabel = screen.getByLabelText('Color:');
      expect(nameLabel).toBeInTheDocument();
    });
  });

  it('should have a year input field', async () => {
    await waitFor(() => {
      const yearLabel = screen.getByLabelText('year:');
      expect(yearLabel).toBeInTheDocument();
    });
  });

  it('should have a price input field', async () => {
    await waitFor(() => {
      const nameLabel = screen.getByLabelText('Color:');
      expect(nameLabel).toBeInTheDocument();
    });
  });

  it('should have a type input field', async () => {
    await waitFor(() => {
      const nameLabel = screen.getByLabelText('type:');
      expect(nameLabel).toBeInTheDocument();
    });
  });

  it('should have a images input field', async () => {
    await waitFor(() => {
      const nameLabel = screen.getByText('Images:');
      expect(nameLabel).toBeInTheDocument();
    });
  });
});
