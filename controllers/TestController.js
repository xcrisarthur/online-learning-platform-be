// controllers/TestController.js
const db = require('../models');
const Test = db.Test;

exports.getTestsByModuleId = async (req, res) => {
  try {
    // Mengambil module_id dari parameter request
    const { module_id } = req.params;

    // Mencari semua test yang memiliki module_id yang sesuai
    const tests = await Test.findAll({
      where: { module_id },
    });

    // Mengembalikan respon dengan data test jika ditemukan
    if (tests.length > 0) {
      res.status(200).json(tests);
    } else {
      res.status(404).json({ message: 'No tests found for this module ID' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.findAll();
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTestById = async (req, res) => {
  try {
    const test = await Test.findByPk(req.params.id);
    if (!test) return res.status(404).json({ message: 'Test not found' });
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTest = async (req, res) => {
  try {
    const newTest = await Test.create(req.body);
    res.status(201).json(newTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTest = async (req, res) => {
  try {
    const test = await Test.findByPk(req.params.id);
    if (!test) return res.status(404).json({ message: 'Test not found' });

    await test.update(req.body);
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTest = async (req, res) => {
  try {
    const test = await Test.findByPk(req.params.id);
    if (!test) return res.status(404).json({ message: 'Test not found' });

    await test.destroy();
    res.status(200).json({ message: 'Test deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
