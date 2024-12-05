// routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/CourseController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/', authenticateToken, courseController.getAllCourses);
router.get('/:id', authenticateToken, courseController.getCourseById);
router.post('/', authenticateToken, authorizeRoles('admin', 'lecturer'), courseController.createCourse);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), courseController.updateCourse);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), courseController.deleteCourse);

module.exports = router;
