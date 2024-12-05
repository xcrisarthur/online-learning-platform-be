// controllers/ModuleController.js
const db = require('../models');
const Module = db.Module;
const Test = db.Test; // Import model Test
const ModuleContent = db.ModuleContent; // Import model ModuleContent

// Fungsi untuk mendapatkan semua modul berdasarkan course_id
exports.getModulesByCourseId = async (req, res) => {
  try {
    const { courseId } = req.params; // Ambil courseId dari parameter URL
    const modules = await Module.findAll({
      where: { course_id: courseId }, // Filter berdasarkan course_id
    });

    // Jika tidak ada modul ditemukan, kirim respons kosong
    if (modules.length === 0) {
      return res.status(404).json({ message: 'No modules found for this course' });
    }

    // Kirim data modul yang sesuai
    res.status(200).json(modules);
  } catch (error) {
    console.error('Error fetching modules:', error);
    res.status(500).json({ message: 'Error fetching modules', error });
  }
};

exports.getAllModules = async (req, res) => {
  try {
    const modules = await Module.findAll();
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getModuleById = async (req, res) => {
  try {
    const module = await Module.findByPk(req.params.id);
    if (!module) return res.status(404).json({ message: 'Module not found' });
    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createModule = async (req, res) => {
  const t = await db.sequelize.transaction(); // Start a transaction
  try {
    const modulesData = req.body;

    if (!Array.isArray(modulesData) || modulesData.length === 0) {
      return res.status(400).json({ message: 'Modules data must be a non-empty array.' });
    }

    // Save modules and capture the created instances
    const createdModules = await Module.bulkCreate(modulesData, { transaction: t });

    const materialModule = createdModules.find((mod) => mod.module_type === 'materials' && mod.order_index === 2);
    if (materialModule) {
      // Tambahkan konten otomatis ke modul 'materials'
      await ModuleContent.create(
        {
          module_id: materialModule.module_id,
          content_type: 'text',
          content_url: null,
          content_text: materialModule.module_title, // Mengisi konten dengan judul modul
        },
        { transaction: t }
      );
    }
    
    // Prepare the test data based on created modules
    const testData = createdModules
      .filter(module => ['pretest', 'minitest', 'posttest'].includes(module.module_type))
      .map(module => ({
        module_id: module.module_id,
        test_type: module.module_type
      }));

    // Save tests
    await Test.bulkCreate(testData, { transaction: t });

    await t.commit(); // Commit transaction if all operations are successful

    res.status(201).json({ message: 'Modules and tests created successfully', modules: createdModules });
  } catch (error) {
    await t.rollback(); // Rollback transaction in case of error
    console.error('Error creating modules and tests:', error);
    res.status(500).json({ message: 'Failed to create modules and tests', error });
  }
};

exports.updateModule = async (req, res) => {
  try {
    const module = await Module.findByPk(req.params.id);
    if (!module) return res.status(404).json({ message: 'Module not found' });

    await module.update(req.body);
    res.status(200).json(module);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteModule = async (req, res) => {
  try {
    const module = await Module.findByPk(req.params.id);
    if (!module) return res.status(404).json({ message: 'Module not found' });

    await module.destroy();
    res.status(200).json({ message: 'Module deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
