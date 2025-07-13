import React from 'react';
import BookCard from './BookCard';
import books from '../book';

const BookSection = () => {
  return (
    <section id="reviews" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Book Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookSection;
