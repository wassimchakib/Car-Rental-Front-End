import React from "react";
import { Provider } from "react-redux";
import { render, act, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import carSlice, { getCars } from "../../redux/car/carSlice";
import CarList from "../../components/cars-components/CarList";
import cars from "../data/allCars.json";

jest.mock("axios");

const store = configureStore({
  reducer: {
    car: carSlice,
  },
});

describe("Cars page", () => {
  beforeEach(async () => {
    axios.get.mockResolvedValue({ data: cars });
    await act(() => store.dispatch(getCars()));
  });

  it("should have an image of the car", async () => {
    const { container } = await act(() =>
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CarList />
          </BrowserRouter>
        </Provider>
      )
    );

    const carEl = container.querySelector(".cardCol");
    expect(carEl.querySelector("img")).toBeInTheDocument();
    expect(carEl.querySelector("img").src).toBe(
      cars.data.cars[0].images[0].url
    );

    const carName = await screen.findByText(cars.data.cars[0].name);

    expect(carName).toBeInTheDocument();
  });

  it("should have a name", async () => {
    await act(() =>
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CarList />
          </BrowserRouter>
        </Provider>
      )
    );

    const carName = await screen.findByText(cars.data.cars[0].name);

    expect(carName).toBeInTheDocument();
  });

  it("should have a description", async () => {
    await act(() =>
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CarList />
          </BrowserRouter>
        </Provider>
      )
    );

    const carDescription = await screen.findByText(
      cars.data.cars[0].description
    );

    expect(carDescription).toBeInTheDocument();
  });

  it("should have a page title", async () => {
    await act(() =>
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CarList />
          </BrowserRouter>
        </Provider>
      )
    );

    const title = await screen.findByText("Your Luxury Car for your Comfort");

    expect(title).toBeInTheDocument();
  });
});
