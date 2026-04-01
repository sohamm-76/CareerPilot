const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getMarks, addMarks, uploadCSV } = require('../controllers/marksController');
const protect = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');

const upload = multer({ storage: multer.memoryStorage() });

router.use(protect, authorizeRoles('student'));

router.get('/', getMarks);
router.post('/', addMarks);
router.post('/upload', upload.single('file'), uploadCSV);

module.exports = router;