import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookSection from './components/BookSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <BookSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
