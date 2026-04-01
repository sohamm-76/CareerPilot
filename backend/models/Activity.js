const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['certification', 'hackathon', 'project', 'internship'],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Activity', activitySchema);