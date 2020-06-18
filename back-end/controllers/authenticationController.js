const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {
  // Check if there are any errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  // Extract email and password
  const { email, password } = req.body;

  try {
    // Check that the user is a registered one
    let user = await User.findOne({ email });
    if(!user) {
      return res.status(400).json({msg: 'The user does not exist'});
    }

    // Check the password
    const rightPassword = await bcryptjs.compare(password, user.password);
    if(!rightPassword) {
      return res.status(400).json({msg: 'Wrong password'});
    }

    // If everything is OK create and sign JWT
    const payload = {
      user: {
        id: user.id
      }
    };

    // Sign JWT
    jwt.sign(payload, process.env.SECRET, {
      expiresIn: 3600 // 1 hour
    }, (error, token) => {
      if (error) throw error;

      // Confirmation message
      res.send({ token });
    });


  } catch (error) {
      console.log(error);
  }
}