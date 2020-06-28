const Task = require('../models/Task');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');


// Create a new task
exports.createTask = async (req, res) => {
  // Check if there are any errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {

    // Extract the project and check if exists
    const { project } = req.body;

    const projectExist = await Project.findById(project);
    if(!projectExist) {
      return res.status(404).json({msg: 'Project not found'})
    }

    // Check that the current project belongs to the authenticated user
    if (projectExist.createdBy.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Unauthorized' });
    }

    // Create the task
    const task = new Task(req.body);
    await task.save();
    res.json({ task });

  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong')
  }
}

// Get tasks
exports.getTasks = async (req, res) => {
  
  try {
    // Extract the project and check if exists
    const { project } = req.body;

    const projectExist = await Project.findById(project);
    if (!projectExist) {
      return res.status(404).json({ msg: 'Project not found' })
    }

    // Check that the current project belongs to the authenticated user
    if (projectExist.createdBy.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Unauthorized' });
    }

    // Get tasks per project
    const tasks = await Task.find({ project });
    res.json({ tasks });

  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
}

// Update task
exports.updateTask = async (req, res) => {
  try {
    // Extract the project and check if exists
    const { project, name, status } = req.body;

    // Check if the task really exixts
    let task = await Task.findById(req.params.id);

    if(!task) {
      return res.status(401).json({ msg: 'There is not such task' });
    }

    // Extract project
    const projectExist = await Project.findById(project);

    // Check that the current project belongs to the authenticated user
    if (projectExist.createdBy.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Unauthorized' });
    }

    // Create an object with the new info
    const newTask = {};
    if(name) newTask.name = name;
    if (status) newTask.status = status;

    // Save task
    task = await Task.findOneAndUpdate({_id : req.params.id }, newTask, { new: true });
    res.json({task})

  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong')
  }
}

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    // Extract the project and check if exists
    const { project } = req.body;

    // Check if the task really exixts
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(401).json({ msg: 'There is not such task' });
    }

    // Extract project
    const projectExist = await Project.findById(project);

    // Check that the current project belongs to the authenticated user
    if (projectExist.createdBy.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Unauthorized' });
    }

    // Delete
    await Task.findOneAndRemove({_id: req.params.id});
    res.json({msg: 'The task has been deleted'})

  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong')
  }
}