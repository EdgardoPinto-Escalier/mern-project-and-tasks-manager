const mongoose = require('mongoose');

// Project schema
const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdOn: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Project', ProjectSchema);