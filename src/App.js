import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyReservations from './components/my-reservations/MyReservations';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/cars" element={<h1>Cars Page</h1>} />
            <Route exact path="/reserve" element={<h1>Reserve Page</h1>} />
            <Route exact path="/my-reservations" element={<MyReservations />} />
            <Route exact path="/add" element={<h1>Add Page</h1>} />
            <Route exact path="/delete" element={<h1>Delete Page</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
