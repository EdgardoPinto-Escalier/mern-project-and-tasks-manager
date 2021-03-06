// Routes for user creation
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

// Create an user
// api/users
router.post(
  "/",

  // Validation rules
  [
    check("name", "The name is required").not().isEmpty(),
    check("email", "Add a valid email").isEmail(),
    check("password", "The password must be at least six characters long").isLength({ min: 6 })
  ],
  userController.createUser
);

module.exports = router;
