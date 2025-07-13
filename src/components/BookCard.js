import React from 'react';

const BookCard = ({ title, author, image }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">{author}</p>
    </div>
  );
};

export default BookCard;
