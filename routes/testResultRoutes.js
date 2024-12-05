// routes/testResultRoutes.js
const express = require('express');
const router = express.Router();
const testResultController = require('../controllers/TestResultController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/', authenticateToken, authorizeRoles('admin', 'lecturer', 'student'), testResultController.getAllResults);
router.get('/:id', authenticateToken, authorizeRoles('admin', 'lecturer', 'student'), testResultController.getResultById);
router.post('/', authenticateToken, authorizeRoles('admin', 'lecturer', 'student'), testResultController.addTestResult);

// Endpoint untuk menambahkan TestResult
router.post(
    '/test-results',
    authenticateToken,
    authorizeRoles('admin', 'lecturer', 'student'),
    testResultController.addTestResult,
  );

module.exports = router;
