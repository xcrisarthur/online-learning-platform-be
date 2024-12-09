const db = require('../models');
const ProgressTrackings = db.progressTracking;
const Courses = db.course;
const Users = db.users;
const Modules = db.module;

const progressTrackingController = {
  getAllProgress: async (req, res) => {
    try {
      console.log('Getting all progress...'); // Debug log
      const progressData = await ProgressTrackings.findAll({
        include: [
          {
            model: Courses,
            attributes: ['title']
          },
          {
            model: Users,
            attributes: ['first_name', 'last_name']
          },
          {
            model: Modules,
            attributes: ['module_title']
          }
        ]
      });
      res.json(progressData);
    } catch (error) {
      console.error('Error in getAllProgress:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getProgressById: async (req, res) => {
    try {
      const progress = await ProgressTrackings.findByPk(req.params.id, {
        include: [
          {
            model: Courses,
            attributes: ['title']
          },
          {
            model: Users,
            attributes: ['first_name', 'last_name']
          },
          {
            model: Modules,
            attributes: ['module_title']
          }
        ]
      });
      if (progress) {
        res.json(progress);
      } else {
        res.status(404).json({ message: 'Progress not found' });
      }
    } catch (error) {
      console.error('Error in getProgressById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createProgress: async (req, res) => {
    try {
      const progress = await ProgressTrackings.create(req.body);
      res.status(201).json(progress);
    } catch (error) {
      console.error('Error in createProgress:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateProgress: async (req, res) => {
    try {
      const progress = await ProgressTrackings.findByPk(req.params.id);
      if (progress) {
        await progress.update(req.body);
        res.json(progress);
      } else {
        res.status(404).json({ message: 'Progress not found' });
      }
    } catch (error) {
      console.error('Error in updateProgress:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteProgress: async (req, res) => {
    try {
      const progress = await ProgressTrackings.findByPk(req.params.id);
      if (progress) {
        await progress.destroy();
        res.json({ message: 'Progress deleted successfully' });
      } else {
        res.status(404).json({ message: 'Progress not found' });
      }
    } catch (error) {
      console.error('Error in deleteProgress:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = progressTrackingController;