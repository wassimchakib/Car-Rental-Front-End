import { Provider } from 'react-redux';
import { render, act, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import reservations from '../data/reservations.json';
import MyReservations from '../../pages/my-reservation/MyReservations';
import reservationSlice, { getReservations } from '../../redux/reservation/reservationSlice';

jest.mock('axios');

const store = configureStore({
  reducer: {
    reservation: reservationSlice,
  },
});

describe('My reservations page', () => {
  beforeEach(async () => {
    axios.get.mockResolvedValue({ data: reservations });
    await act(() => store.dispatch(getReservations()));
  });

  test('Reservations page should render a list of cars', async () => {
    const { container } = await act(() => render(
      <Provider store={store}>
        <MyReservations />
      </Provider>,
    ));

    const carsEl = container.querySelectorAll('.reservation-card');
    expect(carsEl.length).toBe(reservations.data.reservations.length);
  });

  test('Car card component should have an image of car', async () => {
    const { container } = await act(() => render(
      <Provider store={store}>
        <MyReservations />
      </Provider>,
    ));

    const carEl = container.querySelector('.reservation-card');
    expect(carEl.querySelector('img')).toBeInTheDocument();
    expect(carEl.querySelector('img').src)
      .toBe(reservations
        .data
        .reservations[0]
        .car
        .images[0]
        .url);
  });

  test('Car card component should have the name of car', async () => {
    await act(() => render(
      <Provider store={store}>
        <MyReservations />
      </Provider>,
    ));

    const carName = await screen.findByText(reservations
      .data
      .reservations[0]
      .car
      .name);

    expect(carName).toBeInTheDocument();
  });

  test('Car card component should have the description of car', async () => {
    await act(() => render(
      <Provider store={store}>
        <MyReservations />
      </Provider>,
    ));

    const carDescription = await screen.findByText(reservations
      .data
      .reservations[0]
      .car
      .description
      .slice(0, 15));

    expect(carDescription).toBeInTheDocument();
  });

  test('Car card component should have a price', async () => {
    await act(() => render(
      <Provider store={store}>
        <MyReservations />
      </Provider>,
    ));

    const carPrice = await screen.findByText(`$${reservations
      .data
      .reservations[0]
      .car
      .price} per day`);

    expect(carPrice).toBeInTheDocument();
  });

  test('Car card component should have a cancel reservation button', async () => {
    await act(() => render(
      <Provider store={store}>
        <MyReservations />
      </Provider>,
    ));

    const button = await screen.findByText('Cancel reservation');
    expect(button).toBeInTheDocument();
  });
});
