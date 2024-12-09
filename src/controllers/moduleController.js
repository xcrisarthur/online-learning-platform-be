const db = require('../models');
const Modules = db.module;
const Tests = db.test;
const ModuleContents = db.moduleContent;

const moduleController = {
  getModulesByCourseId: async (req, res) => {
    try {
      console.log('Getting modules by course ID...'); // Debug log
      const { courseId } = req.params;
      const modules = await Modules.findAll({
        where: { course_id: courseId }
      });

      if (modules.length > 0) {
        res.json(modules);
      } else {
        res.status(404).json({ message: 'No modules found for this course' });
      }
    } catch (error) {
      console.error('Error in getModulesByCourseId:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getAllModules: async (req, res) => {
    try {
      console.log('Getting all modules...'); // Debug log
      const modules = await Modules.findAll();
      res.json(modules);
    } catch (error) {
      console.error('Error in getAllModules:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getModuleById: async (req, res) => {
    try {
      const module = await Modules.findByPk(req.params.id);
      if (module) {
        res.json(module);
      } else {
        res.status(404).json({ message: 'Module not found' });
      }
    } catch (error) {
      console.error('Error in getModuleById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createModule: async (req, res) => {
    const t = await db.sequelize.transaction();
    try {
      const modulesData = req.body;

      if (!Array.isArray(modulesData) || modulesData.length === 0) {
        return res.status(400).json({ message: 'Modules data must be a non-empty array' });
      }

      // Buat modules dan simpan instance yang dibuat
      const createdModules = await Modules.bulkCreate(modulesData, { transaction: t });

      // Cari modul materials
      const materialModule = createdModules.find(
        mod => mod.module_type === 'materials' && mod.order_index === 2
      );

      // Buat konten untuk modul materials jika ada
      if (materialModule) {
        await ModuleContents.create({
          module_id: materialModule.module_id,
          content_type: 'text',
          content_url: null,
          content_text: materialModule.module_title
        }, { transaction: t });
      }

      // Siapkan data test
      const testData = createdModules
        .filter(module => ['pretest', 'minitest', 'posttest'].includes(module.module_type))
        .map(module => ({
          module_id: module.module_id,
          test_type: module.module_type
        }));

      // Buat tests
      await Tests.bulkCreate(testData, { transaction: t });
      await t.commit();

      res.status(201).json({
        message: 'Modules and tests created successfully',
        modules: createdModules
      });
    } catch (error) {
      await t.rollback();
      console.error('Error in createModule:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateModule: async (req, res) => {
    try {
      const module = await Modules.findByPk(req.params.id);
      if (module) {
        await module.update(req.body);
        res.json(module);
      } else {
        res.status(404).json({ message: 'Module not found' });
      }
    } catch (error) {
      console.error('Error in updateModule:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteModule: async (req, res) => {
    try {
      const module = await Modules.findByPk(req.params.id);
      if (module) {
        await module.destroy();
        res.json({ message: 'Module deleted successfully' });
      } else {
        res.status(404).json({ message: 'Module not found' });
      }
    } catch (error) {
      console.error('Error in deleteModule:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = moduleController;