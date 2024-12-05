// routes/progressTrackingRoutes.js
const express = require('express');
const router = express.Router();
const progressTrackingController = require('../controllers/ProgressTrackingController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/', authenticateToken, authorizeRoles('admin', 'lecturer', 'student'), progressTrackingController.getAllProgress);
router.get('/:id', authenticateToken, authorizeRoles('admin', 'lecturer', 'student'), progressTrackingController.getProgressById);

module.exports = router;
