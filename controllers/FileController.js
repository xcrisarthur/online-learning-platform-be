// controllers/FileController.js
const db = require('../models');
const File = db.File;

exports.getAllFiles = async (req, res) => {
  try {
    const files = await File.findAll();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFileById = async (req, res) => {
  try {
    const file = await File.findByPk(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found' });
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFile = async (req, res) => {
  try {
    const newFile = await File.create(req.body);
    res.status(201).json(newFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateFile = async (req, res) => {
  try {
    const file = await File.findByPk(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found' });

    await file.update(req.body);
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const file = await File.findByPk(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found' });

    await file.destroy();
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
