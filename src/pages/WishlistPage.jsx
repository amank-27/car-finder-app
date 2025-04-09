import React from 'react';
import { Link } from 'react-router-dom';  // <-- Import Link from react-router-dom
import Wishlist from '../components/Wishlist';

const WishlistPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Wishlist />
      <Link to="/" className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded mt-4 inline-block">
        Back to Home
      </Link>
    </div>
  );
};

export default WishlistPage;
