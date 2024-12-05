// routes/courseEnrollmentRoutes.js
const express = require('express');
const router = express.Router();
const courseEnrollmentController = require('../controllers/CourseEnrollmentController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

// Get all enrollments - accessible by admin and lecturer
router.get(
  '/', 
  authenticateToken, 
  authorizeRoles('admin', 'lecturer'), 
  courseEnrollmentController.getAllEnrollments
);

// Create new enrollment - accessible by admin and lecturer
router.post(
  '/', 
  authenticateToken, 
  authorizeRoles('admin', 'lecturer'), 
  courseEnrollmentController.createEnrollment
);

// Update enrollment - accessible by admin and lecturer
router.put(
  '/:id', 
  authenticateToken, 
  authorizeRoles('admin', 'lecturer'), 
  courseEnrollmentController.updateEnrollment
);

// Get enrolled courses for current user - accessible by all authenticated users
router.get(
  '/enrolled', 
  authenticateToken, 
  authorizeRoles('admin', 'lecturer', 'student'), 
  courseEnrollmentController.getEnrolledCourses
);

// Delete enrollments by user ID - accessible by admin and lecturer
router.delete(
  '/user/:userId', 
  authenticateToken, 
  authorizeRoles('admin', 'lecturer'), 
  courseEnrollmentController.deleteEnrollmentsByUserId
);

module.exports = router;