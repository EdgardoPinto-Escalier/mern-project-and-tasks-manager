// Routes for users authentication
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authenticationController = require('../controllers/authenticationController');
const authentication = require('../middleware/authentication');

// Login
// api/authentication
router.post(
  "/",

  // Validation rules
  [
    check("email", "Add a valid email").isEmail(),
    check("password", "The password must be at least six characters long").isLength({ min: 6 })
  ],
  authenticationController.authenticateUser
);

// Get the authenticated user
router.get('/',
  authenticated,
  authenticationController.authenticateUser
);

module.exports = router;