import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarList from '../components/CarList';
import { Link } from 'react-router-dom';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [brand, setBrand] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [seatingCapacity, setSeatingCapacity] = useState(0);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch car data
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('https://carapi-dlav.onrender.com/cars');
        setCars(response.data);
        setFilteredCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // ✅ Filter handlers
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleFuelTypeChange = (e) => {
    setFuelType(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleSeatingCapacityChange = (e) => {
    setSeatingCapacity(Number(e.target.value));
  };

  // ✅ Apply filters when any input changes
  useEffect(() => {
    const filtered = cars.filter((car) => {
      const matchesBrand = car.brand.toLowerCase().includes(brand.toLowerCase());
      const matchesFuelType = fuelType ? car.fuelType === fuelType : true;
      const matchesPrice = car.price >= priceRange.min && car.price <= priceRange.max;
      const matchesSeating = seatingCapacity ? car.seatingCapacity === seatingCapacity : true;

      return matchesBrand && matchesFuelType && matchesPrice && matchesSeating;
    });

    setFilteredCars(filtered);
  }, [brand, fuelType, priceRange, seatingCapacity, cars]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* 🔍 Filter Section */}
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <div className="w-full max-w-sm">
              <input
                type="text"
                placeholder="Search by brand..."
                value={brand}
                onChange={handleBrandChange}
                className="border px-4 py-2 rounded w-full"
              />
            </div>

            <select
              value={fuelType}
              onChange={handleFuelTypeChange}
              className="border px-4 py-2 rounded"
            >
              <option value="">Select Fuel Type</option>
              <option value="Electric">Electric</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <div className="flex gap-2">
              <input
                type="number"
                name="min"
                value={priceRange.min}
                onChange={handlePriceRangeChange}
                className="border px-4 py-2 rounded"
                placeholder="Min Price"
              />
              <input
                type="number"
                name="max"
                value={priceRange.max}
                onChange={handlePriceRangeChange}
                className="border px-4 py-2 rounded"
                placeholder="Max Price"
              />
            </div>

            <select
              value={seatingCapacity}
              onChange={handleSeatingCapacityChange}
              className="border px-4 py-2 rounded"
            >
              <option value={0}>Seating Capacity</option>
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={7}>7</option>
            </select>

            <Link
              to="/wishlist"
              className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
            >
              View Wishlist
            </Link>
          </div>

          {/* 🚗 Car List Section */}
          <CarList cars={filteredCars} />
        </>
      )}
    </div>
  );
};

export default Home;
