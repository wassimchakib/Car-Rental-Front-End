import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CarCard from '../../components/delete-car/DeleteCarCard';

describe('CarCard', () => {
  const currentCar = {
    id: 1,
    image:
      'https://hips.hearstapps.com/hmg-prod/images/c-005-1500x1000-1652713137.jpg?crop=0.919xw:0.775xh;0.0651xw,0.103xh&resize=2048:*',
    name: 'Toyota Camry',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 53,
    color: 'Dark blue',
  };

  it('should render the car details correctly', () => {
    render(<CarCard id={currentCar.id} />);
    expect(screen.getByText(currentCar.name)).toBeInTheDocument();
    expect(screen.getByText(currentCar.color)).toBeInTheDocument();
    expect(screen.getByText(currentCar.description)).toBeInTheDocument();
    expect(screen.getByText('53 per day')).toBeInTheDocument();
  });

  it('should open the confirmation modal when the delete button is clicked', () => {
    render(<CarCard id={currentCar.id} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.getByText('Are you sure to proceed?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });
});
