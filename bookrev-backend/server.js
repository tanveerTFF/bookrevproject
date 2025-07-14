// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reviewRoutes = require('./routes/reviewRoutes');
require('dotenv').config();

// init express app
const app = express();

// middleware
app.use(cors());
app.use(express.json()); // parse incoming JSON
app.use('/reviews', reviewRoutes);

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// test route
app.get('/', (req, res) => {
  res.send('📚 Book Review Backend is Live!');
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
