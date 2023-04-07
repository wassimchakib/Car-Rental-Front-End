import { render, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Reserve from '../../pages/Reserve/Reserve';

describe('Reserve page', () => {
  it('should match the snapshot', () => {
    const reservePage = render(<Reserve />);
    expect(reservePage).toMatchSnapshot();
  });

  it('should have a cars dropdown', () => {
    const reservePage = render(<Reserve />);

    const carFieldLabel = reservePage.getByLabelText('Select a car');
    const carDropdown = reservePage.container.querySelector('select');

    expect(carFieldLabel).toBeInTheDocument();
    expect(carDropdown).toBeInTheDocument();
  });

  it('should have a city input field', () => {
    const reservePage = render(<Reserve />);

    const cityFieldLabel = reservePage.getByLabelText('City');
    const cityInputField = reservePage.getByPlaceholderText('Enter your city');

    expect(cityFieldLabel).toBeInTheDocument();
    expect(cityInputField).toBeInTheDocument();
  });

  it('should have a pick up date input field and a calendar dropdown', async () => {
    const reservePage = render(<Reserve />);

    const pickUpDateFieldLabel = reservePage.getByLabelText('Pick up date');
    const pickUpDateInputField = reservePage.getByPlaceholderText('11/12/2021');

    // Open pick up date calendar
    act(() => userEvent.click(pickUpDateInputField));

    const calendars = reservePage.container.querySelectorAll('.rdp');

    expect(pickUpDateFieldLabel).toBeInTheDocument();
    expect(pickUpDateInputField).toBeInTheDocument();
    await waitFor(() => { expect(calendars[0]).toBeInTheDocument(); });
    await waitFor(() => { expect(calendars[0].parentElement.classList.contains('hidden')).toBeFalsy(); });
  });

  it('should have a return date input field and a calendar dropdown', async () => {
    const reservePage = render(<Reserve />);

    const returnDateFieldLabel = reservePage.getByLabelText('Return date');
    const returnDateInputField = reservePage.getByPlaceholderText('01/06/2022');

    // Open pick up date calendar
    act(() => userEvent.click(returnDateInputField));

    const calendars = reservePage.container.querySelectorAll('.rdp');

    expect(returnDateFieldLabel).toBeInTheDocument();
    expect(returnDateInputField).toBeInTheDocument();
    await waitFor(() => { expect(calendars[1]).toBeInTheDocument(); });
    await waitFor(() => { expect(calendars[1].parentElement.classList.contains('hidden')).toBeFalsy(); });
  });

  it('should have a submit button', () => {
    const reservePage = render(<Reserve />);

    const button = reservePage.getByText('SUBMIT');

    expect(button).toBeInTheDocument();
  });
});
