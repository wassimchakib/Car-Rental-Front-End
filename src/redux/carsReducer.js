import {
  LIST_CARS,
  ADD_CAR,
  DELETE_CAR
} from "./carsAction";

const initialState = {
  cars: [],
};

function carReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_CARS:
      return { ...state, cars: action.payload };
    case ADD_CAR:
      return { ...state, cars: [...state.cars, action.payload] };
    case DELETE_CAR:
      return { ...state, cars: state.cars.filter(car => car.id !== action.payload.id) };
    default:
      return state;
  }
}

export default carReducer;
