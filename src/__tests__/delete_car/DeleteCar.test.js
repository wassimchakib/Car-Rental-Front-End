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
    axios.get.mockResolvedValue({ data: cars });
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

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import CarCard from '../../components/delete-car/DeleteCarCard';

// describe('CarCard', () => {
//   const currentCar = {
//     id: 1,
//     image:
//       'https://hips.hearstapps.com/hmg-prod/images/c-005-1500x1000-1652713137.jpg?crop=0.919xw:0.775xh;0.0651xw,0.103xh&resize=2048:*',
//     name: 'Toyota Camry',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//     price: 53,
//     color: 'Dark blue',
//   };

//   it('should render the car details correctly', () => {
//     render(<CarCard id={currentCar.id} />);
//     expect(screen.getByText(currentCar.name)).toBeInTheDocument();
//     expect(screen.getByText(currentCar.color)).toBeInTheDocument();
//     expect(screen.getByText(currentCar.description)).toBeInTheDocument();
//     expect(screen.getByText('53 per day')).toBeInTheDocument();
//   });

//   it('should open the confirmation modal when the delete button is clicked', () => {
//     render(<CarCard id={currentCar.id} />);
//     fireEvent.click(screen.getByText('Delete'));
//     expect(screen.getByText('Are you sure to proceed?')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
//   });
// });
