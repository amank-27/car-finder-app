import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import CarDetailsPage from './pages/CarDetailsPage';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <Router> {/* Router should wrap the entire app */}
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const navigate = useNavigate();  

  const handleClick = () => {
    navigate('/');  // Navigate to the home page when the <h1> is clicked
  };

  return (
    <>
      <h1 
        className="font-extrabold text-4xl flex justify-center cursor-pointer"
        onClick={handleClick} 
      >
        Car Finder App
      </h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetailsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </>
  );
}

export default App;
