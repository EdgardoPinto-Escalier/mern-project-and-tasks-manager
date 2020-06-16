const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Success! Connected to the DB');
  } catch (error) {
    console.log(error);
    process.exit(1); // In case of connection error, stops the application
  }
}

module.exports = connectDB;