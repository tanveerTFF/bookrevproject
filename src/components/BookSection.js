import React from 'react';
import BookCard from './BookCard';
import books from '../book';

const BookSection = () => {
  return (
    <section id="reviews" className="py-16 bg-coral">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-cinzel text-center text-white mb-10">Book Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookSection;
