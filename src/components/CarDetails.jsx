import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`https://carapi-dlav.onrender.com/cars/${id}`);
        setCar(response.data);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <img src={car.image} alt={car.model} className="w-full h-96 object-cover rounded-md mb-4" />
      <h2 className="text-3xl font-bold">{car.brand} {car.model}</h2>
      <p className="mt-2">Price: ${car.price}</p>
      <p>Fuel Type: {car.fuelType}</p>
      <p>Seating Capacity: {car.seatingCapacity}</p>
      <p>Description: {car.description}</p>
    </div>
  );
};

export default CarDetails;
