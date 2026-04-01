const mongoose = require('mongoose');
const { calculateAttainment } = require('../utils/attainment');

const marksSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  semester: {
    type: Number,
    required: true
  },
  co: {
    type: String,
    required: true
  },
  internalMarks: {
    type: Number,
    min: 0,
    max: 30
  },
  externalMarks: {
    type: Number,
    min: 0,
    max: 70
  },
  totalMarks: {
    type: Number
  },
  attainment: {
    type: Number,
    min: 0,
    max: 3
  }
});

marksSchema.index({ student: 1, semester: 1, subject: 1, co: 1 }, { unique: true });

marksSchema.pre('save', function (next) {
  this.totalMarks = (this.internalMarks || 0) + (this.externalMarks || 0);
  this.attainment = calculateAttainment(this.totalMarks);
  next();
});

module.exports = mongoose.model('Marks', marksSchema);