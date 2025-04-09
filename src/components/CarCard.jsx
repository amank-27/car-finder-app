import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  const [isAdded, setIsAdded] = useState(false);

  const addToWishlist = () => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!savedWishlist.some((item) => item.id === car.id)) {
      savedWishlist.push(car);
      localStorage.setItem('wishlist', JSON.stringify(savedWishlist));
      setIsAdded(true);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={car.image} alt={car.model} className="w-full h-48 object-cover rounded-md" />
      <h3 className="font-semibold text-xl mt-2">{car.brand} {car.model}</h3>
      <p>Price: ${car.price}</p>
      <div className="mt-2 flex gap-2">
        <Link to={`/car/${car.id}`} className="text-blue-500 hover:underline">View Details</Link>
        <button
          onClick={addToWishlist}
          className={`py-2 px-4 rounded ${isAdded ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
        >
          {isAdded ? 'Added to Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
