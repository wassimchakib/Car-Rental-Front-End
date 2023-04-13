import React from 'react';
import { Provider } from 'react-redux';
import { render, act, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import carSlice, { getCars } from '../../redux/car/carSlice';
import DeleteCar from '../../pages/delete-car/DeleteCar';
import cars from '../data/allCars.json';

jest.mock('axios');

const store = configureStore({
  reducer: {
    car: carSlice,
  },
});

describe('DeleteCar page', () => {
  beforeEach(async () => {
    axios.get.mockResolvedValue({
      data: {
        data: {
          cars: [cars.data.cars[0]],
        },
      },
    });
    await act(() => store.dispatch(getCars()));
  });

  it('should have an image of the car', async () => {
    const { container } = await act(() => render(
      <Provider store={store}>
        <DeleteCar />
      </Provider>,
    ));

    const carEl = container.querySelector('.delete-car-card');
    expect(carEl.querySelector('img')).toBeInTheDocument();
    expect(carEl.querySelector('img').src).toBe(
      cars.data.cars[0].images[0].url,
    );

    const carName = await screen.findByText(cars.data.cars[0].name);

    expect(carName).toBeInTheDocument();
  });

  it('should have a name', async () => {
    await act(() => render(
      <Provider store={store}>
        <DeleteCar />
      </Provider>,
    ));

    const carName = await screen.findByText(cars.data.cars[0].name);

    expect(carName).toBeInTheDocument();
  });

  it('should have a color', async () => {
    await act(() => render(
      <Provider store={store}>
        <DeleteCar />
      </Provider>,
    ));

    const carColor = await screen.findByText(cars.data.cars[0].color);

    expect(carColor).toBeInTheDocument();
  });

  it('should have a description', async () => {
    await act(() => render(
      <Provider store={store}>
        <DeleteCar />
      </Provider>,
    ));

    const carDescription = await screen.findByText(
      cars.data.cars[0].description,
    );

    expect(carDescription).toBeInTheDocument();
  });

  it('should have a price', async () => {
    await act(() => render(
      <Provider store={store}>
        <DeleteCar />
      </Provider>,
    ));

    const carPrice = await screen.findByText(cars.data.cars[0].price);

    expect(carPrice).toBeInTheDocument();
  });

  it('should have a delete button', async () => {
    await act(() => render(
      <Provider store={store}>
        <DeleteCar />
      </Provider>,
    ));

    const button = await screen.findByText('Delete');

    expect(button).toBeInTheDocument();
  });
});
