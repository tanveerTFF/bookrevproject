import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reviews
  useEffect(() => {
    axios.get('http://localhost:5000/reviews')
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch reviews:', err);
        setLoading(false);
      });
  }, []);

  // Delete review
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this review?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/reviews/${id}`);
      setReviews((prev) => prev.filter((review) => review._id !== id));
    } catch (error) {
      alert("Failed to delete review.");
      console.error(error);
    }
  };

  if (loading) return <p className="text-center text-coral mt-10">Loading reviews...</p>;

  return (
    <section className="py-16 bg-white text-coral min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-cinzel mb-8 text-center">📋 Admin: Book Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review._id} className="bg-pinky rounded-xl shadow-lg p-6 border border-coral">
                <h3 className="text-xl font-bold">{review.book}</h3>
                <p><strong>Author:</strong> {review.author}</p>
                <p><strong>Name:</strong> {review.name}</p>
                <p><strong>Email:</strong> {review.email}</p>
                <p className="text-sm mt-2"><strong>Review:</strong> {review.review}</p>
                <button
                  className="mt-4 px-4 py-2 bg-coral text-white rounded-full hover:bg-red-600 transition"
                  onClick={() => handleDelete(review._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
