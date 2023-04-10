import React from 'react';
import { render } from '@testing-library/react';
import AddCar from '../../pages/AddCar/AddCar';

describe('AddCar', () => {
  it('should have a submit button', () => {
    const formPage = render(<AddCar />);

    const button = formPage.getByText('Submit');

    expect(button).toBeInTheDocument();
  });

  it('renders all input fields', () => {
    const screen = render(<AddCar />);

    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Description:')).toBeInTheDocument();
    expect(screen.getByText('Color:')).toBeInTheDocument();
    expect(screen.getByText('year:')).toBeInTheDocument();
    expect(screen.getByText('Price:')).toBeInTheDocument();
    expect(screen.getByText('type:')).toBeInTheDocument();
    expect(screen.getByText('Images:')).toBeInTheDocument();
  });
});
