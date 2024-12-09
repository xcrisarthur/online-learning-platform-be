const db = require('../models');
const Courses = db.course;
const CourseEnrollments = db.courseEnrollment;

const courseController = {
  getAllCourses: async (req, res) => {
    try {
      console.log('Getting all courses...');
      const courses = await Courses.findAll();
      console.log('Courses found:', courses);
      res.json(courses);
    } catch (error) {
      console.error('Error in getAllCourses:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getCourseById: async (req, res) => {
    try {
      const course = await Courses.findByPk(req.params.id);
      if (course) {
        res.json(course);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      console.error('Error in getCourseById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createCourse: async (req, res) => {
    try {
      const course = await Courses.create(req.body);
      res.status(201).json(course);
    } catch (error) {
      console.error('Error in createCourse:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateCourse: async (req, res) => {
    try {
      const course = await Courses.findByPk(req.params.id);
      if (course) {
        await course.update(req.body);
        res.json(course);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      console.error('Error in updateCourse:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const course = await Courses.findByPk(req.params.id);
      if (course) {
        await course.destroy();
        res.json({ message: 'Course deleted successfully' });
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      console.error('Error in deleteCourse:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = courseController;