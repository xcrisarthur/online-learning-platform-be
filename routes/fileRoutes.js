// routes/fileRoutes.js
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/FileController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/', authenticateToken, fileController.getAllFiles);
router.get('/:id', authenticateToken, fileController.getFileById);
router.post('/', authenticateToken, authorizeRoles('admin', 'lecturer'), fileController.createFile);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), fileController.updateFile);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), fileController.deleteFile);

module.exports = router;
