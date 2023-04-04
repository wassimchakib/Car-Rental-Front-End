import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import carReducer from "./carsReducer";

const store = configureStore({
  reducer: carReducer,
  middleware: [thunk]
});

export default store;
