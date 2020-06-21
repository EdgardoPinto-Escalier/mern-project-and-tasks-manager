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

// Here we get all projects from current user
exports.getProjects = async (req, res) => {
  try {
      const projects = await Project.find({ createdBy: req.user.id }).sort({createdOn: -1});
      res.json({ projects });
  } catch (error) {
      console.log(error);
      res.status(500).send('Something went wrong');
  }
}

// Edit/Update an existing project
exports.updateProject = async (req, res) => {

  // Check if there are any errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  // Extract project info
  const { name } = req.body;
  const newProject = {};
  if(name) {
    newProject.name = name;
  }

  try {
    // Check the ID
    let project = await Project.findById(req.params.id);
    // Check if the project exists
    if(!project) {
      res.status(404).json({msg: 'Project not found'});
    }
    // Verify project creator
    if(project.createdBy.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Unauthorized'});
    }
    // Update project
    project = await Project.findByIdAndUpdate({ _id: req.params.id }, { $set : newProject }, { new: true });
    res.json({project});
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }

}
