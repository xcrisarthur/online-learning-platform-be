// controllers/CourseEnrollmentController.js
const db = require('../models');
const CourseEnrollment = db.CourseEnrollment;
const Course = db.Course;
const User = db.User;

// Get all enrollments
exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await CourseEnrollment.findAll({
      include: [
        {
          model: User,
          as: 'student',
          attributes: ['user_id', 'first_name', 'last_name', 'email', 'role', 'class_level']
        },
        {
          model: User,
          as: 'assigner',
          attributes: ['user_id', 'first_name', 'last_name', 'email', 'role']
        },
        {
          model: Course,
          attributes: ['course_id', 'title', 'description']
        }
      ]
    });

    res.status(200).json(enrollments);
  } catch (error) {
    console.error('Error getting enrollments:', error);
    res.status(500).json({
      message: 'Error retrieving enrollments',
      error: error.message
    });
  }
};

// Create a new enrollment
exports.createEnrollment = async (req, res) => {
  try {
    const { student_id, course_id } = req.body;
    const assignedBy = req.user.userId; // Get from authenticated user

    // Validate required fields
    if (!student_id || !course_id) {
      return res.status(400).json({
        message: 'Student ID and Course ID are required'
      });
    }

    // Check if student exists
    const student = await User.findByPk(student_id);
    if (!student) {
      return res.status(404).json({
        message: 'Student not found'
      });
    }

    // Check if course exists
    const course = await Course.findByPk(course_id);
    if (!course) {
      return res.status(404).json({
        message: 'Course not found'
      });
    }

    // Check if enrollment already exists
    const existingEnrollment = await CourseEnrollment.findOne({
      where: {
        student_id,
        course_id
      }
    });

    if (existingEnrollment) {
      return res.status(400).json({
        message: 'Student is already enrolled in this course'
      });
    }

    // Create enrollment
    const newEnrollment = await CourseEnrollment.create({
      student_id,
      course_id,
      assignedBy
    });

    res.status(201).json({
      message: 'Enrollment created successfully',
      enrollment: newEnrollment
    });

  } catch (error) {
    console.error('Error creating enrollment:', error);
    res.status(500).json({
      message: 'Error creating enrollment',
      error: error.message
    });
  }
};

// Update enrollment
exports.updateEnrollment = async (req, res) => {
  try {
    const { id } = req.params;
    const { assignedBy } = req.body;

    const enrollment = await CourseEnrollment.findByPk(id);
    if (!enrollment) {
      return res.status(404).json({
        message: 'Enrollment not found'
      });
    }

    // Update enrollment
    await enrollment.update({
      assignedBy
    });

    res.status(200).json({
      message: 'Enrollment updated successfully',
      enrollment
    });

  } catch (error) {
    console.error('Error updating enrollment:', error);
    res.status(500).json({
      message: 'Error updating enrollment',
      error: error.message
    });
  }
};

// Get enrolled courses for a student
exports.getEnrolledCourses = async (req, res) => {
  try {
    const studentId = req.user.userId; // Get from authenticated user

    const enrollments = await CourseEnrollment.findAll({
      where: {
        student_id: studentId
      },
      include: [
        {
          model: Course,
          attributes: ['course_id', 'title', 'description']
        },
        {
          model: User,
          as: 'assigner',
          attributes: ['user_id', 'first_name', 'last_name']
        }
      ]
    });

    res.status(200).json(enrollments);
  } catch (error) {
    console.error('Error getting enrolled courses:', error);
    res.status(500).json({
      message: 'Error retrieving enrolled courses',
      error: error.message
    });
  }
};

// Delete enrollments by user ID
exports.deleteEnrollmentsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Verify if user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    // Delete all enrollments for the user
    await CourseEnrollment.destroy({
      where: {
        student_id: userId
      }
    });

    res.status(200).json({
      message: 'Enrollments deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting enrollments:', error);
    res.status(500).json({
      message: 'Error deleting enrollments',
      error: error.message
    });
  }
};