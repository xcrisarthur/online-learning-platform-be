// routes/testRoutes.js
const express = require('express');
const router = express.Router();
const testController = require('../controllers/TestController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/module/:module_id/tests', authenticateToken, testController.getTestsByModuleId);

router.get('/', authenticateToken, testController.getAllTests);
router.get('/:id', authenticateToken, testController.getTestById);
router.post('/', authenticateToken, authorizeRoles('admin', 'lecturer'), testController.createTest);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), testController.updateTest);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), testController.deleteTest);

module.exports = router;
