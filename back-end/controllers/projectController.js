const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.createProject = async (req, res) => {

  // Check if there are any errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    // Create a new project
    const project = new Project(req.body);

    // Save project creator via JWT
    project.createdBy = req.user.id;

    // Save project
    project.save();
    res.json(project);

  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
}