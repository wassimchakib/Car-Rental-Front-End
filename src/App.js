import { useSelector } from 'react-redux';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { enqueueSnackbar, SnackbarProvider } from 'notistack';
import MyReservations from './pages/my-reservation/MyReservations';
import DeleteCar from './pages/delete-car/DeleteCar';
import Navbar from './components/Navbar/Navbar';
import Reserve from './pages/Reserve/Reserve';
import AddCar from './pages/AddCar/AddCar';
import CarList from './components/cars-components/CarList';
import CarDetails from './components/cars-components/CarDetails';
import ProtectedRoute from './routing/ProtectedRoute';
import Snackbar from './components/ui/Snackbar';

const App = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const { username } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (username) {
      const capitalName = username.charAt(0).toUpperCase() + username.slice(1);
      enqueueSnackbar(`Welcome ${capitalName}`, {
        variant: 'success',
        TransitionProps: { direction: 'down' },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const cardNum = (windowSize) => {
    switch (true) {
      case windowSize > 1500:
        return 8;
      case windowSize > 1280:
        return 6;
      case windowSize > 980:
        return 4;
      default:
        return 2;
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <SnackbarProvider Components={{ errorMessage: Snackbar }} autoHideDuration={2500}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route exact path="/" element={<Navigate to="/cars" />} />
              <Route exact path="/cars/:id" element={<CarDetails />} />
              <Route
                exact
                path="/cars"
                element={<CarList itemsPerPage={cardNum(windowSize[0])} />}
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
        </SnackbarProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
