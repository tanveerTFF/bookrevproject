import React from 'react';
//import image
const DogImg = "https://via.placeholder.com/400x300?text=Contact+Image";





const Contact = () => {
  return (
  <section id='contact' className='bg-yellow-secondary pt-6'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-around'>

        {/* image */}
      <div className='order-1 lg:-order-1 lg:mt-16'>
          <img className='-mb-[12px]' src={DogImg} alt='' />
      </div>
        {/* text */}
      <div className='flex flex-col items-center justify-center'>
        <div className='text-orange font-semibold mb-3'>Contact Us</div>
        <div className='text-4xl text-blue font-extrabold'>bookblog@example.com</div>
        <div className='mb-7 text-blue'>Open Daily: 9am – 9pm</div>
        <a href="#appointment" className='btn inline-flex items-center justify-center'>Get an appointment</a>
        </div>
      </div>
    </div>
  </section> 
  );
};

export default Contact;
