import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import './App.css';
import MyReservations from './pages/my-reservation/MyReservations';
import DeleteCar from './pages/delete-car/DeleteCar';
import Navbar from './components/Navbar/Navbar';
import Reserve from './pages/Reserve/Reserve';
import AddCar from './pages/AddCar/AddCar';
import CarList from './components/cars-components/CarList';
import CarDetails from './components/cars-components/CarDetails';
import store from './redux/store';
import ProtectedRoute from './routing/ProtectedRoute';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route exact path="/" element={<Navigate to="/cars" />} />
              <Route exact path="/cars/:id" element={<CarDetails />} />
              <Route
                exact
                path="/cars"
                element={<CarList itemsPerPage={3} />}
              />
              <Route exact path="/reserve" element={<Reserve />} />
              <Route exact path="/reserve/:id" element={<Reserve />} />
              <Route
                exact
                path="/my-reservations"
                element={<MyReservations />}
              />
              <Route exact path="/add" element={<AddCar />} />
              <Route exact path="/delete" element={<DeleteCar />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
