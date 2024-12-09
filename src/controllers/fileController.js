const db = require('../models');
const Files = db.File;

const fileController = {
  getAllFiles: async (req, res) => {
    try {
      console.log('Getting all files...'); // Debug log
      const files = await Files.findAll();
      res.json(files);
    } catch (error) {
      console.error('Error in getAllFiles:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getFileById: async (req, res) => {
    try {
      const file = await Files.findByPk(req.params.id);
      if (file) {
        res.json(file);
      } else {
        res.status(404).json({ message: 'File not found' });
      }
    } catch (error) {
      console.error('Error in getFileById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createFile: async (req, res) => {
    try {
      const file = await Files.create(req.body);
      res.status(201).json(file);
    } catch (error) {
      console.error('Error in createFile:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateFile: async (req, res) => {
    try {
      const file = await Files.findByPk(req.params.id);
      if (file) {
        await file.update(req.body);
        res.json(file);
      } else {
        res.status(404).json({ message: 'File not found' });
      }
    } catch (error) {
      console.error('Error in updateFile:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteFile: async (req, res) => {
    try {
      const file = await Files.findByPk(req.params.id);
      if (file) {
        await file.destroy();
        res.json({ message: 'File deleted successfully' });
      } else {
        res.status(404).json({ message: 'File not found' });
      }
    } catch (error) {
      console.error('Error in deleteFile:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = fileController;