const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/mateController');
const protect = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');

router.use(protect, authorizeRoles('student'));

router.get('/profile', getProfile);
router.put('/profile', updateProfile);

module.exports = router;