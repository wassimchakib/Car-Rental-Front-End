// import { Provider } from 'react-redux';
// import { render, act, screen } from '@testing-library/react';
// import MyReservations from '../../components/my-reservations/MyReservations';
// import cars from '../data/cars';
// import { configureStore } from '@reduxjs/toolkit';
// import carsSlice from '../../redux/carsSlice';
// import { getCarsAsync } from '../../redux/cars/carsSlice';
// import store from '../../redux/store';

// const store = configureStore({
//   reducer: {
//     cars: carsSlice,
//   },
// });

describe('My reservations page', () => {
  beforeEach(() => {
    // getCarsAsync.mockResolvedValue(cars);
  });

  test('Reservations page should render a list of cars', async () => {
    // const { container } = await act(() =>
    //   render(<Provider store={store}><MyReservations /></Provider>
    // ));

    // const carsEl = await container.querySelectorAll('.reservation-card');
    // expect(carsEl.length).toBe(cars.length);
  });

  test('Car card component should have an image of car', async () => {
    // const { container } = await act(() =>
    //   render(<Provider store={store}><MyReservations /></Provider>
    // ));

    // const carEl = await container.querySelector('.reservation-card');
    // expect(carEl.querySelector('img')).not.toBe(null);
    // expect(carEl.querySelector('img').src).toBe(cars[0].image);
  });

  test('Car card component should have the name of car', async () => {
    // const { container } = await act(() =>
    //   render(<Provider store={store}><MyReservations /></Provider>
    // ));

    // const carName = await screen.findByText(cars[0].name);
    // expect(carName).not.toBe(null);
  });

  test('Car card component should have the description of car', async () => {
    // const { container } = await act(() =>
    //   render(<Provider store={store}><MyReservations /></Provider>
    // ));

    // const carDescription = await screen.findByText(cars[0].description.slice(0, 15));
    // expect(carDescription).not.toBe(null);
  });

  test('Car card component should have a pick up date', async () => {
    // const { container } = await act(() =>
    //   render(<Provider store={store}><MyReservations /></Provider>
    // ));

    // const carPickUpDate = await screen.findByText(cars[0].starting_date);
    // expect(carPickUpDate).not.toBe(null);
  });

  test('Car card component should have a return date', async () => {
    // const { container } = await act(() =>
    //   render(<Provider store={store}><MyReservations /></Provider>
    // ));

    // const carReturnDate = await screen.findByText(cars[0].ending_date);
    // expect(carReturnDate).not.toBe(null);
  });

  test('Car card component should have a price', async () => {
    // const { container } = await act(() =>
    //   render(<Provider store={store}><MyReservations /></Provider>
    // ));

    // const carPrice = await screen.findByText(`$${cars[0].price} per day);
    // expect(carPrice).not.toBe(null);
  });

  test('Car card component should have a cancel reservation button', async () => {
    // const { container } = await act(() =>
    //   render(<Provider store={store}><MyReservations /></Provider>
    // ));

    // const button = await screen.findByText('Cancel Reservation');
    // expect(button).not.toBe(null);
  });
});
