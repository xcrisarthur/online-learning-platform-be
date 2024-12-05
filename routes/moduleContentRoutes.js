// routes/moduleContentRoutes.js
const express = require('express');
const router = express.Router();
const moduleContentController = require('../controllers/ModuleContentController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/module/:module_id/contents', authenticateToken, moduleContentController.getContentByIdModule);

router.get('/', authenticateToken, moduleContentController.getAllContents);
router.get('/:id', authenticateToken, moduleContentController.getContentById);
router.post('/', authenticateToken, authorizeRoles('admin', 'lecturer'), moduleContentController.createContent);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), moduleContentController.updateContent);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), moduleContentController.deleteContent);

module.exports = router;
