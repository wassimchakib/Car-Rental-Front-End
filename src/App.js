import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Reserve from './pages/Reserve/Reserve';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="app_container">
          <Routes>
            <Route exact path="/cars" element={<h1>Cars Page</h1>} />
            <Route exact path="/reserve" element={<Reserve />} />
            <Route exact path="/my-reservations" element={<h1>My Reservations Page</h1>} />
            <Route exact path="/add" element={<h1>Add Page</h1>} />
            <Route exact path="/delete" element={<h1>Delete Page</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
