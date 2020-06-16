const User = require('../models/User');

exports.createUser = async (req, res) => {

  // Extract email and password
  const { email, password } = req.body;

  try {
      // Check so the registered user is unique
      let user = await User.findOne({ email });

      if(user) {
        return res.status(400).json({ msg: 'The user already exists in the Database'});
      }

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