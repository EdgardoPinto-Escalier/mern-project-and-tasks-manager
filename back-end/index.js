const express = require('express');
const connectDB = require('./config/db');

// First we create the server
const app = express();

// Then we connect to the DB
connectDB();

// Enable express.json 
app.use(express.json({ extended: true }));

// App's port
const PORT = process.env.PORT || 4000;

// Import routes
app.use('/api/users', require('./routes/users'));

// Start application
app.listen(PORT, () => {
  console.log(`The server is working on port number ${PORT}`);
});