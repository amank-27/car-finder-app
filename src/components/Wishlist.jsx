import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((car) => car.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No cars in your wishlist.</p>
      ) : (
        wishlist.map((car) => (
          <div key={car.id} className="border p-4 mb-4 flex items-center gap-4">
            <img src={car.image} alt={car.model} className="w-24 h-24 object-cover rounded-md" />
            <div>
              <h3 className="font-bold">{car.brand} {car.model}</h3>
              <p>Price: ${car.price}</p>
            </div>
            <button
              onClick={() => removeFromWishlist(car.id)}
              className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
     
    </div>
  );
};

export default Wishlist;
