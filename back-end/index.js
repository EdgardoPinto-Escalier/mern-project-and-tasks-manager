const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// First we create the server
const app = express();

// Then we connect to the DB
connectDB();

// Use cors
app.use(cors());

// Enable express.json 
app.use(express.json({ extended: true }));

// App's port
const PORT = process.env.PORT || 4000;

// Import routes
app.use('/api/users', require('./routes/users'));
app.use('/api/authentication', require('./routes/authentication'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/tasks', require('./routes/tasks'));

// Start application
app.listen(PORT, () => {
  console.log(`The server is working on port number ${PORT}`);
});