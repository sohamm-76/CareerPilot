const Student = require('../models/Student');

const getProfile = async (req, res, next) => {
  try {
    const student = await Student.findOne({ user: req.user.id }).populate('user', 'name email');
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student profile not found' });
    }
    return res.status(200).json({ success: true, student });
  } catch (err) {
    next(err);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const { department, semester, goals, interests } = req.body;

    const student = await Student.findOneAndUpdate(
      { user: req.user.id },
      { department, semester, goals, interests },
      { new: true, runValidators: true }
    );

    if (!student) {
      return res.status(404).json({ success: false, message: 'Student profile not found' });
    }

    return res.status(200).json({ success: true, student });
  } catch (err) {
    next(err);
  }
};

module.exports = { getProfile, updateProfile };