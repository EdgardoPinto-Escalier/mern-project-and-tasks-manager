const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
      let user;
      // Create the new user
      user = new User(req.body);
      // Save the new user
      await user.save();
      // Confirmation message
      res.send('The user has been created successfully!');
  } catch (error) {
      console.log(error);
      res.status(400).send('Something went wrong');
  }
}