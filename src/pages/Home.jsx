import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CarList from '../components/CarList';
import SearchFilters from '../components/SearchFilters';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('https://carapi-dlav.onrender.com/cars');
        setCars(response.data);
        setFilteredCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  const filterCars = (filters) => {
    let updatedCars = [...cars];
    if (filters.brand) updatedCars = updatedCars.filter(car => car.brand === filters.brand);
    if (filters.priceRange) updatedCars = updatedCars.filter(car => car.price >= filters.priceRange.min && car.price <= filters.priceRange.max);
    if (filters.fuelType) updatedCars = updatedCars.filter(car => car.fuelType === filters.fuelType);
    if (filters.seatingCapacity) updatedCars = updatedCars.filter(car => car.seatingCapacity === filters.seatingCapacity);
    setFilteredCars(updatedCars);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <SearchFilters filterCars={filterCars} />
        <Link to="/wishlist" className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">
          View Wishlist
        </Link>
      </div>
      <CarList cars={filteredCars} />
    </div>
  );
};

export default Home;
