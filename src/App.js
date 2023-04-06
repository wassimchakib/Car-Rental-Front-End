import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import './App.css';
import MyReservations from './components/my-reservations/MyReservations';
import Navbar from './components/Navbar/Navbar';
import Reserve from './pages/Reserve/Reserve';
import AddCar from './pages/AddCar/AddCar';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Navigate to="/cars" />} />
            <Route exact path="/cars" element={<h1>Cars Page</h1>} />
            <Route exact path="/reserve" element={<Reserve />} />
            <Route exact path="/my-reservations" element={<MyReservations />} />
            <Route exact path="/add" Component={AddCar} />
            <Route exact path="/delete" element={<h1>Delete Page</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
