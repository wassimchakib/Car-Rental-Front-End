import {
  render,
  waitFor,
  act,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import Reserve from '../../pages/Reserve/Reserve';
import carSlice, { getCars } from '../../redux/car/carSlice';
import cars from '../data/allCars.json';
import reservationSlice from '../../redux/reservation/reservationSlice';

jest.mock('axios');

const store = configureStore({
  reducer: {
    car: carSlice,
    reservation: reservationSlice,
  },
});

describe('Reserve page', () => {
  beforeEach(async () => {
    axios.get.mockResolvedValue({ data: cars });
    await act(() => store.dispatch(getCars()));
    await act(() => render(<Provider store={store}><Reserve /></Provider>));
  });

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  it('should have a cars dropdown', async () => {
    await waitFor(() => {
      const cityFieldLabel = screen.getByLabelText(/Select a car/i);
      expect(cityFieldLabel).toBeInTheDocument();

      const carDropdown = screen.queryByRole('combobox', { name: 'Select a car' });
      expect(carDropdown).toBeInTheDocument();
    });
  });

  it('should have a city input field', async () => {
    await waitFor(() => {
      const cityFieldLabel = screen.getByLabelText('City');
      const cityInputField = screen.getByRole('textbox', { name: 'City' });

      expect(cityFieldLabel).toBeInTheDocument();
      expect(cityInputField).toBeInTheDocument();
    });
  });

  it('should have a pick up date input field and a calendar dropdown', async () => {
    await waitFor(() => {
      const pickUpDateFieldLabel = screen.getByLabelText('Pick up date');
      const pickUpDateInputField = screen.getByRole('textbox', { name: 'Pick up date' });

      // Open pick up date calendar
      act(() => userEvent.click(pickUpDateInputField));

      const today = new Date();

      const calendar = screen.getAllByText(`${months[today.getMonth()]} ${today.getFullYear()}`);

      expect(pickUpDateFieldLabel).toBeInTheDocument();
      expect(pickUpDateInputField).toBeInTheDocument();
      expect(calendar[0]).toBeInTheDocument();
    });
  });

  it('should have a return date input field and a calendar dropdown', async () => {
    await waitFor(() => {
      const returnDateFieldLabel = screen.getByLabelText('Return date');
      const returnDateInputField = screen.getByRole('textbox', { name: 'Return date' });

      // Open return date calendar
      act(() => userEvent.click(returnDateInputField));

      const today = new Date();

      const calendar = screen.getAllByText(`${months[today.getMonth()]} ${today.getFullYear()}`);

      expect(returnDateFieldLabel).toBeInTheDocument();
      expect(returnDateInputField).toBeInTheDocument();
      expect(calendar[1]).toBeInTheDocument();
    });
  });

  it('should have a submit button', async () => {
    await waitFor(() => {
      const button = screen.getByText('SUBMIT');

      expect(button).toBeInTheDocument();
    });
  });
});
