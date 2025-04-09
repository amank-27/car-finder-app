import React from 'react';
import { Link } from 'react-router-dom';
import CarDetails from '../components/CarDetails';

const CarDetailsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <CarDetails />
      <Link to="/" className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded mt-4 inline-block">
        Back to Home
      </Link>
    </div>
  );
};

export default CarDetailsPage;
