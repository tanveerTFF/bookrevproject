// models/Review.js
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);
