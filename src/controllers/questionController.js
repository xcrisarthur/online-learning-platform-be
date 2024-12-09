const db = require('../models');
const Questions = db.question;

const questionController = {
  getQuestionsByTestId: async (req, res) => {
    try {
      console.log('Getting questions by test ID...'); // Debug log
      const { test_id } = req.params;
      const questions = await Questions.findAll({
        where: { test_id }
      });

      if (questions.length > 0) {
        res.json(questions);
      } else {
        res.status(404).json({ message: 'No questions found for this test ID' });
      }
    } catch (error) {
      console.error('Error in getQuestionsByTestId:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getAllQuestions: async (req, res) => {
    try {
      console.log('Getting all questions...'); // Debug log
      const questions = await Questions.findAll();
      res.json(questions);
    } catch (error) {
      console.error('Error in getAllQuestions:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getQuestionById: async (req, res) => {
    try {
      const question = await Questions.findByPk(req.params.id);
      if (question) {
        res.json(question);
      } else {
        res.status(404).json({ message: 'Question not found' });
      }
    } catch (error) {
      console.error('Error in getQuestionById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createQuestion: async (req, res) => {
    try {
      const question = await Questions.create(req.body);
      res.status(201).json(question);
    } catch (error) {
      console.error('Error in createQuestion:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateQuestion: async (req, res) => {
    try {
      const question = await Questions.findByPk(req.params.id);
      if (question) {
        await question.update(req.body);
        res.json(question);
      } else {
        res.status(404).json({ message: 'Question not found' });
      }
    } catch (error) {
      console.error('Error in updateQuestion:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteQuestion: async (req, res) => {
    try {
      const question = await Questions.findByPk(req.params.id);
      if (question) {
        await question.destroy();
        res.json({ message: 'Question deleted successfully' });
      } else {
        res.status(404).json({ message: 'Question not found' });
      }
    } catch (error) {
      console.error('Error in deleteQuestion:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = questionController;