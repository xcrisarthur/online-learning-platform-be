// controllers/ProgressTrackingController.js
const db = require('../models');
const ProgressTracking = db.ProgressTracking;

exports.getAllProgress = async (req, res) => {
  try {
    const progressData = await ProgressTracking.findAll({
      include: [
        { model: db.Course, attributes: ['title'] },
        { model: db.User, attributes: ['first_name', 'last_name'] },
        { model: db.Module, attributes: ['module_title'] },
      ],
    });
    res.status(200).json(progressData);
  } catch (error) {
    console.error('Error fetching progress data:', error);
    res.status(500).json({ message: 'Error fetching progress data', error: error.message });
  }
};

exports.getProgressById = async (req, res) => {
  try {
    const progress = await ProgressTracking.findByPk(req.params.id);
    if (!progress) return res.status(404).json({ message: 'Progress not found' });
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProgress = async (req, res) => {
  try {
    const newProgress = await ProgressTracking.create(req.body);
    res.status(201).json(newProgress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProgress = async (req, res) => {
  try {
    const progress = await ProgressTracking.findByPk(req.params.id);
    if (!progress) return res.status(404).json({ message: 'Progress not found' });

    await progress.update(req.body);
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProgress = async (req, res) => {
  try {
    const progress = await ProgressTracking.findByPk(req.params.id);
    if (!progress) return res.status(404).json({ message: 'Progress not found' });

    await progress.destroy();
    res.status(200).json({ message: 'Progress deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
