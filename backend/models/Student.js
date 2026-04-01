const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  department: {
    type: String,
    enum: ['CS', 'IT', 'AIDS'],
    required: true
  },
  semester: {
    type: Number,
    min: 1,
    max: 8,
    required: true
  },
  goals: {
    type: String,
    default: ''
  },
  interests: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Student', studentSchema);