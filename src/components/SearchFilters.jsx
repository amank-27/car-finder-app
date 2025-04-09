import React, { useState } from 'react';

const SearchFilters = ({ filterCars }) => {
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: { min: 0, max: 100000 },
    fuelType: '',
    seatingCapacity: 4
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: name === 'priceRange' ? JSON.parse(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterCars(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-4">
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        className="input"
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="priceRange"
        placeholder="Max Price"
        className="input"
        onChange={handleFilterChange}
      />
      <select name="fuelType" className="input" onChange={handleFilterChange}>
        <option value="">Select Fuel Type</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>
      <select name="seatingCapacity" className="input" onChange={handleFilterChange}>
        <option value={4}>4 Seats</option>
        <option value={5}>5 Seats</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-2">
        Apply Filters
      </button>
    </form>
  );
};

export default SearchFilters;
