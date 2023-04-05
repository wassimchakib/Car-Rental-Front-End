import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carsReducer";

export const store = configureStore({
  reducer: carReducer,
});

