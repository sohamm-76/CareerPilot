const Student = require('../models/Student');
const Activity = require('../models/Activity');

const getActivities = async (req, res, next) => {
  try {
    const student = await Student.findOne({ user: req.user.id });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    const activities = await Activity.find({ student: student._id });
    return res.status(200).json({ success: true, activities });
  } catch (err) {
    next(err);
  }
};

const addActivity = async (req, res, next) => {
  try {
    const student = await Student.findOne({ user: req.user.id });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    const activity = await Activity.create({ ...req.body, student: student._id });
    return res.status(201).json({ success: true, activity });
  } catch (err) {
    next(err);
  }
};

const deleteActivity = async (req, res, next) => {
  try {
    const student = await Student.findOne({ user: req.user.id });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    const activity = await Activity.findById(req.params.id);
    if (!activity) {
      return res.status(404).json({ success: false, message: 'Activity not found' });
    }

    if (activity.student.toString() !== student._id.toString()) {
      return res.status(403).json({ success: false, message: 'Forbidden: not your activity' });
    }

    await activity.deleteOne();
    return res.status(200).json({ success: true, message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getActivities, addActivity, deleteActivity };