const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authentication = require('../middleware/authentication');
const { check } = require('express-validator');

// Create projects
// api/projects
router.post('/',
  authentication,
  [
    check('name', 'The project name is required').not().isEmpty()
  ],
  projectController.createProject
);

// Get all projects
router.get('/',
  authentication,
  projectController.getProjects
)

// Update/Edit project via ID
router.put('/:id',
  authentication,
  [
    check('name', 'The project name is required').not().isEmpty()
  ],
  projectController.updateProject
);


module.exports = router;