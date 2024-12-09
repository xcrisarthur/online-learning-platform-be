const db = require('../models');
const Choices = db.choice;

const choiceController = {
  getAllChoices: async (req, res) => {
    try {
      console.log('Getting all choices...');
      const choices = await Choices.findAll();
      console.log('Choices found:', choices);
      res.json(choices);
    } catch (error) {
      console.error('Error in getAllChoices:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getChoiceById: async (req, res) => {
    try {
      const choice = await Choices.findByPk(req.params.id);
      if (choice) {
        res.json(choice);
      } else {
        res.status(404).json({ message: 'Choice not found' });
      }
    } catch (error) {
      console.error('Error in getChoiceById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createChoice: async (req, res) => {
    try {
      const choice = await Choices.create(req.body);
      res.status(201).json(choice);
    } catch (error) {
      console.error('Error in createChoice:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateChoice: async (req, res) => {
    try {
      const choice = await Choices.findByPk(req.params.id);
      if (choice) {
        await choice.update(req.body);
        res.json(choice);
      } else {
        res.status(404).json({ message: 'Choice not found' });
      }
    } catch (error) {
      console.error('Error in updateChoice:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteChoice: async (req, res) => {
    try {
      const choice = await Choices.findByPk(req.params.id);
      if (choice) {
        await choice.destroy();
        res.json({ message: 'Choice deleted successfully' });
      } else {
        res.status(404).json({ message: 'Choice not found' });
      }
    } catch (error) {
      console.error('Error in deleteChoice:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getChoicesByQuestionId: async (req, res) => {
    try {
      console.log('Getting choices by question ID...'); // Debug log
      const { question_id } = req.params;
      const choices = await Choices.findAll({
        where: { question_id }
      });
      
      if (choices.length > 0) {
        res.json(choices);
      } else {
        res.status(404).json({ message: 'No choices found for this question ID' });
      }
    } catch (error) {
      console.error('Error in getChoicesByQuestionId:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = choiceController;