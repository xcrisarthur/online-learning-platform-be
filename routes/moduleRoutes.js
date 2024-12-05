// routes/moduleRoutes.js
const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/ModuleController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/:courseId', authenticateToken, moduleController.getModulesByCourseId);
router.get('/', authenticateToken, moduleController.getAllModules);
router.get('/MdlId/:id', authenticateToken, moduleController.getModuleById);
router.post('/', authenticateToken, authorizeRoles('admin', 'lecturer'), moduleController.createModule);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), moduleController.updateModule);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), moduleController.deleteModule);

module.exports = router;
