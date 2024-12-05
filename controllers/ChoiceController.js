// controllers/ChoiceController.js
const db = require('../models');
const Choice = db.Choice;

exports.getAllChoices = async (req, res) => {
  try {
    const choices = await Choice.findAll();
    res.status(200).json(choices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getChoiceById = async (req, res) => {
  try {
    const choice = await Choice.findByPk(req.params.id);
    if (!choice) return res.status(404).json({ message: 'Choice not found' });
    res.status(200).json(choice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createChoice = async (req, res) => {
  try {
    const newChoice = await Choice.create(req.body);
    res.status(201).json(newChoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateChoice = async (req, res) => {
  try {
    const choice = await Choice.findByPk(req.params.id);
    if (!choice) return res.status(404).json({ message: 'Choice not found' });

    await choice.update(req.body);
    res.status(200).json(choice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteChoice = async (req, res) => {
  try {
    const choice = await Choice.findByPk(req.params.id);
    if (!choice) return res.status(404).json({ message: 'Choice not found' });

    await choice.destroy();
    res.status(200).json({ message: 'Choice deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getChoicesByQuestionId = async (req, res) => {
  try {
    const { question_id } = req.params;
    
    // Fetch all choices where question_id matches
    const choices = await Choice.findAll({
      where: { question_id }
    });
    if (choices.length > 0) {
      res.status(200).json(choices);
    } else {
      res.status(404).json({ message: 'No choices found for this question ID' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
