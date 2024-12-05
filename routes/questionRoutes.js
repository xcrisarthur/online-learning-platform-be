// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/QuestionController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/test/:test_id/questions', authenticateToken, questionController.getQuestionsByTestId);

router.get('/', authenticateToken, questionController.getAllQuestions);
router.get('/:id', authenticateToken, questionController.getQuestionById);
router.post('/', authenticateToken, authorizeRoles('admin', 'lecturer'), questionController.createQuestion);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), questionController.updateQuestion);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), questionController.deleteQuestion);

module.exports = router;
