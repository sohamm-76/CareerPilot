const { parse } = require('csv-parse/sync');
const Student = require('../models/Student');
const Marks = require('../models/Marks');

const getMarks = async (req, res, next) => {
  try {
    const student = await Student.findOne({ user: req.user.id });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    const marks = await Marks.find({ student: student._id });
    return res.status(200).json({ success: true, marks });
  } catch (err) {
    next(err);
  }
};

const addMarks = async (req, res, next) => {
  try {
    const student = await Student.findOne({ user: req.user.id });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    const mark = await Marks.create({ ...req.body, student: student._id });
    return res.status(201).json({ success: true, mark });
  } catch (err) {
    next(err);
  }
};

const uploadCSV = async (req, res, next) => {
  try {
    const student = await Student.findOne({ user: req.user.id });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const records = parse(req.file.buffer, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    });

    const docs = records.map((row) => ({
      student: student._id,
      subject: row.subject,
      semester: Number(row.semester),
      co: row.co,
      internalMarks: Number(row.internalMarks),
      externalMarks: Number(row.externalMarks)
    }));

    const inserted = await Marks.insertMany(docs, { ordered: false });
    return res.status(201).json({ success: true, count: inserted.length });
  } catch (err) {
    next(err);
  }
};

module.exports = { getMarks, addMarks, uploadCSV };