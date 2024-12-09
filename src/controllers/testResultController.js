const db = require('../models');
const { Op } = require('sequelize');
const TestResults = db.testResult;
const ProgressTrackings = db.progressTracking;
const Tests = db.test;
const Modules = db.module;

const testResultController = {
  getAllResults: async (req, res) => {
    try {
      console.log('Getting all test results...'); // Debug log
      const results = await TestResults.findAll();
      res.json(results);
    } catch (error) {
      console.error('Error in getAllResults:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getResultById: async (req, res) => {
    try {
      const result = await TestResults.findByPk(req.params.id);
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ message: 'Result not found' });
      }
    } catch (error) {
      console.error('Error in getResultById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createResult: async (req, res) => {
    try {
      const result = await TestResults.create(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error('Error in createResult:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateResult: async (req, res) => {
    try {
      const result = await TestResults.findByPk(req.params.id);
      if (result) {
        await result.update(req.body);
        res.json(result);
      } else {
        res.status(404).json({ message: 'Result not found' });
      }
    } catch (error) {
      console.error('Error in updateResult:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteResult: async (req, res) => {
    try {
      const result = await TestResults.findByPk(req.params.id);
      if (result) {
        await result.destroy();
        res.json({ message: 'Result deleted successfully' });
      } else {
        res.status(404).json({ message: 'Result not found' });
      }
    } catch (error) {
      console.error('Error in deleteResult:', error);
      res.status(500).json({ message: error.message });
    }
  },

  addTestResult: async (req, res) => {
    const { test_id, student_id, score, completed_at } = req.body;
    const t = await db.sequelize.transaction();

    try {
      console.log('Adding new test result...'); // Debug log

      // 1. Validasi Test
      const test = await Tests.findByPk(test_id);
      if (!test) {
        await t.rollback();
        return res.status(404).json({ message: 'Test not found' });
      }

      const { module_id, test_type } = test;

      // 2. Handle berdasarkan test_type
      if (test_type === 'pretest') {
        const existingProgress = await ProgressTrackings.findOne({
          where: { student_id, module_id },
          transaction: t
        });

        if (existingProgress) {
          await t.rollback();
          return res.status(400).json({ message: 'Progress already exists for this pretest' });
        }

        await ProgressTrackings.create({
          course_id: 1,
          student_id,
          module_id,
          status: 'completed',
          completed_at: new Date()
        }, { transaction: t });
      } 
      else if (['minitest', 'posttest'].includes(test_type)) {
        const progressCount = await ProgressTrackings.count({
          where: { student_id, module_id },
          transaction: t
        });

        if (progressCount >= 5) {
          await t.rollback();
          return res.status(400).json({ 
            message: `Cannot add more than 5 progress entries for ${test_type}` 
          });
        }

        await ProgressTrackings.create({
          course_id: 1,
          student_id,
          module_id,
          status: 'completed',
          completed_at: new Date()
        }, { transaction: t });
      }

      // 3. Create next module progress if applicable
      const nextModule = await Modules.findOne({
        where: { module_id: module_id + 1 },
        transaction: t
      });

      if (nextModule && ['materials', 'posttest'].includes(nextModule.module_type)) {
        await ProgressTrackings.create({
          course_id: 1,
          student_id,
          module_id: module_id + 1,
          status: 'in_progress',
          completed_at: null
        }, { transaction: t });
      }

      // 4. Create test result
      const newTestResult = await TestResults.create({
        test_id,
        student_id,
        score,
        completed_at
      }, { transaction: t });

      // 5. Update minitest progress
      if (test_type === 'minitest') {
        await ProgressTrackings.update(
          { status: 'completed' },
          { 
            where: { 
              student_id,
              module_id: module_id - 1,
              status: 'in_progress'
            },
            transaction: t
          }
        );
      }

      // 6. Clean up duplicate entries
      const progressEntries = await ProgressTrackings.findAll({
        where: {
          student_id,
          module_id: {
            [Op.in]: [module_id, module_id + 1]
          }
        },
        order: [['completed_at', 'DESC']],
        transaction: t
      });

      // Group and clean duplicates
      const groupedEntries = {};
      progressEntries.forEach(entry => {
        if (!groupedEntries[entry.module_id]) {
          groupedEntries[entry.module_id] = [];
        }
        groupedEntries[entry.module_id].push(entry);
      });

      for (const moduleEntries of Object.values(groupedEntries)) {
        if (moduleEntries.length > 1) {
          moduleEntries.sort((a, b) => {
            if (a.completed_at === null && b.completed_at !== null) return 1;
            if (a.completed_at !== null && b.completed_at === null) return -1;
            if (a.completed_at === null && b.completed_at === null) return 0;
            return new Date(b.completed_at) - new Date(a.completed_at);
          });

          for (let i = 1; i < moduleEntries.length; i++) {
            await moduleEntries[i].destroy({ transaction: t });
          }
        }
      }

      await t.commit();
      res.status(201).json(newTestResult);

    } catch (error) {
      await t.rollback();
      console.error('Error in addTestResult:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = testResultController;