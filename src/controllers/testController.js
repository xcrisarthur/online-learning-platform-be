const db = require('../models');
const Tests = db.test;

const testController = {
  getTestsByModuleId: async (req, res) => {
    try {
      console.log('Getting tests by module ID...'); // Debug log
      const { module_id } = req.params;
      const tests = await Tests.findAll({
        where: { module_id }
      });

      if (tests.length > 0) {
        res.json(tests);
      } else {
        res.status(404).json({ message: 'No tests found for this module ID' });
      }
    } catch (error) {
      console.error('Error in getTestsByModuleId:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getAllTests: async (req, res) => {
    try {
      console.log('Getting all tests...'); // Debug log
      const tests = await Tests.findAll();
      res.json(tests);
    } catch (error) {
      console.error('Error in getAllTests:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getTestById: async (req, res) => {
    try {
      const test = await Tests.findByPk(req.params.id);
      if (test) {
        res.json(test);
      } else {
        res.status(404).json({ message: 'Test not found' });
      }
    } catch (error) {
      console.error('Error in getTestById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createTest: async (req, res) => {
    try {
      const test = await Tests.create(req.body);
      res.status(201).json(test);
    } catch (error) {
      console.error('Error in createTest:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateTest: async (req, res) => {
    try {
      const test = await Tests.findByPk(req.params.id);
      if (test) {
        await test.update(req.body);
        res.json(test);
      } else {
        res.status(404).json({ message: 'Test not found' });
      }
    } catch (error) {
      console.error('Error in updateTest:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteTest: async (req, res) => {
    try {
      const test = await Tests.findByPk(req.params.id);
      if (test) {
        await test.destroy();
        res.json({ message: 'Test deleted successfully' });
      } else {
        res.status(404).json({ message: 'Test not found' });
      }
    } catch (error) {
      console.error('Error in deleteTest:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = testController;