// src/App.jsx
import React from 'react';
import { useTheme } from './context/ThemeContext'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CarDetailsPage from './pages/CarDetailsPage';
import WishlistPage from './pages/WishlistPage';

function App() {
  const { theme, toggleTheme } = useTheme();  // Access theme and toggleTheme from context

  return (
    <>
      <h1
        className="font-extrabold text-4xl flex justify-center cursor-pointer"
        onClick={() => window.location.href = '/'} // Navigate to home when clicked
      >
        Car Finder App
      </h1>
      
      <div className="flex justify-center mt-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetailsPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
