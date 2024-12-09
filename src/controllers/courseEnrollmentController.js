// controllers/courseEnrollmentController.js
const db = require('../models');
const CourseEnrollments = db.courseEnrollment;
const Courses = db.course;
const Users = db.users;

const courseEnrollmentController = {
  getAllEnrollments: async (req, res) => {
    try {
      console.log('Getting all enrollments...');
      const enrollments = await CourseEnrollments.findAll({
        include: [
          {
            model: Users,
            as: 'student',
            attributes: ['user_id', 'first_name', 'last_name', 'email', 'role', 'class_level']
          },
          {
            model: Users,
            as: 'assigner',
            attributes: ['user_id', 'first_name', 'last_name', 'email', 'role']
          },
          {
            model: Courses,
            attributes: ['course_id', 'title', 'description']
          }
        ]
      });
      res.json(enrollments);
    } catch (error) {
      console.error('Error in getAllEnrollments:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createEnrollment: async (req, res) => {
    try {
      const { student_id, course_id } = req.body;
      const assignedBy = req.user.userId; // Menggunakan assignedBy sesuai nama kolom di database

      if (!student_id || !course_id) {
        return res.status(400).json({ message: 'Student ID and Course ID are required' });
      }

      const student = await Users.findByPk(student_id);
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      const course = await Courses.findByPk(course_id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }

      const existingEnrollment = await CourseEnrollments.findOne({
        where: { student_id, course_id }
      });

      if (existingEnrollment) {
        return res.status(400).json({ message: 'Student is already enrolled in this course' });
      }

      const enrollment = await CourseEnrollments.create({
        student_id,
        course_id,
        assignedBy // Menggunakan assignedBy sesuai nama kolom di database
      });

      res.status(201).json(enrollment);
    } catch (error) {
      console.error('Error in createEnrollment:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateEnrollment: async (req, res) => {
    try {
      const enrollment = await CourseEnrollments.findByPk(req.params.id);
      if (enrollment) {
        await enrollment.update(req.body);
        res.json(enrollment);
      } else {
        res.status(404).json({ message: 'Enrollment not found' });
      }
    } catch (error) {
      console.error('Error in updateEnrollment:', error);
      res.status(400).json({ message: error.message });
    }
  },

  getEnrolledCourses: async (req, res) => {
    try {
      console.log('User from token:', req.user);

      const studentId = req.user.id;
      const enrollments = await CourseEnrollments.findAll({
        where: { student_id: studentId },
        include: [
          {
            model: Courses,
            attributes: ['course_id', 'title', 'description']
          },
          {
            model: Users,
            as: 'assigner',
            attributes: ['user_id', 'first_name', 'last_name']
          }
        ]
      });
      res.json(enrollments);
    } catch (error) {
      console.error('Error in getEnrolledCourses:', error);
      res.status(500).json({ message: error.message });
    }
  },

  deleteEnrollmentsByUserId: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await Users.findByPk(userId);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      await CourseEnrollments.destroy({
        where: { student_id: userId }
      });

      res.json({ message: 'Enrollments deleted successfully' });
    } catch (error) {
      console.error('Error in deleteEnrollmentsByUserId:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = courseEnrollmentController;