export const LIST_CARS = 'LIST_CARS';
export const ADD_CAR = 'ADD_CAR';
export const DELETE_CAR = 'DELETE_CAR';

export const listCars = cars => ({
  type: LIST_CARS,
  payload: cars,
});

export const addCar = car => ({
  type: ADD_CAR,
  payload: car,
});

export const deleteCar = id => ({
  type: DELETE_CAR,
  payload: { id },
});
