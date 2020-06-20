const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authentication = require('../middleware/authentication');

// Create projects
// api/projects
router.post('/',
  authentication,
  projectController.createProject
);

router.get('/',
  authentication,
  projectController.createProject
)

module.exports = router;