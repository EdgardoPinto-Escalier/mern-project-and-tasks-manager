const express = require('express');

// First we create the server
const app = express();

// App's port
const PORT = process.env.PORT || 4000;

// Start application
app.listen(PORT, () => {
  console.log(`The server is working on port number ${PORT}`);
});