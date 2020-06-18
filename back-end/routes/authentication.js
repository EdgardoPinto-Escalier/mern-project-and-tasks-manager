// Routes for users authentication
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authenticationController = require('../controllers/authenticationController');

// Create an user
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

module.exports = router;