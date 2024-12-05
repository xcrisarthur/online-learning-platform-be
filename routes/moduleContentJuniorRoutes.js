// routes/moduleContentRoutes.js
const express = require('express');
const router = express.Router();
const ModuleContentJunior = require('../controllers/ModuleContentJuniorController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/module/:module_id/contents', authenticateToken, ModuleContentJunior.getContentJrByIdModule);

router.get('/', authenticateToken, ModuleContentJunior.getAllContentsJr);
router.get('/:id', authenticateToken, ModuleContentJunior.getContentJrById);
router.post('/', authenticateToken, authorizeRoles('admin', 'lecturer'), ModuleContentJunior.createContentJr);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), ModuleContentJunior.updateContentJr);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), ModuleContentJunior.deleteContentJr);

module.exports = router;
