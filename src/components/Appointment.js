import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com'
import bgImage from '../assets/bookshelf.jpg';
import axios from 'axios';


const Appointment = () => {
  
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);

 /*   emailjs.sendForm(
      'service_acln43y',
      'template_2epbnfz',
      form.current,
      'jLNEVLj93MFbOqsAl'


    )
    .then((result) => {
      console.log(result.text);
      setSubmitted(true);
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert('Failed To Send Appointment, Try Again!');
    } );


  };
*/
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      book: formData.get('book'),
      author: formData.get('author'),
      review: formData.get('review'),
    };

    try {
      await axios.post('http://localhost:5000/reviews', data);
      setSubmitted(true);
      form.current.reset();
        // Auto-hide after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      alert('Failed to submit review!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };





  return (
  <section id='appointment' style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }} className='py-12 lg:pb-12 lg:mt-32 relative
  min-h-[584px]'>
    <div className='container mx-auto'>
      <div>

        {/* form */}
        <form 
        ref={form}
        onSubmit={sendEmail}
        
        className='bg-yellow py-8 px-6 w-full max-w-[790px] 
        mx-auto lg:-mt-5 rounded-[60px] text-center flex flex-col 
        justify-start items-center gap-y-4'>
          <h1 className='h1 mb-8 my-4 text-coral font-cinzel text-5xl 
          text-stroke-white drop-shadow-md'>Submit a Book Review</h1>

            <input className='input-control' type='text' name='name' placeholder='Your Name' required />
            <input className='input-control' type='email' name='email' placeholder='Email Address' required />
            <input className='input-control' type='text' name='book' placeholder='Book Title' required />
            <input className='input-control' type='text' name='author' placeholder='Author Name' required />
            <textarea className='input-control h-32 resize-none' name='review' placeholder='Write your review here...' required />

            <button className='btn w-full max-w-[514px]'>Submit Review</button>

            {/* success message */}
            <div className="h-10">
            {submitted && (
                <p
                className="bg-white text-coral px-6 py-3 rounded-full text-sm font-semibold shadow-md border border-coral transition-opacity duration-500 opacity-100 animate-fadeOut"
                style={{ animation: 'fadeOut 3s forwards' }}
                >
                Thank you! Your review has been submitted!
                </p>
            )}
            </div>

        </form>
      </div>
    </div>
  </section>
  );
   
};

export default Appointment;