const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authentication = require('../middleware/authentication');
const { check } = require('express-validator');

// Create a task
// api/tasks
router.post('/',
  authentication,
  [
    check('name', 'The task name is required').not().isEmpty(),
    check('project', 'The project is required').not().isEmpty()
  ],
  taskController.createTask
);

// Get tasks per project
router.get('/',
  authentication,
  taskController.getTasks
);

module.exports = router;