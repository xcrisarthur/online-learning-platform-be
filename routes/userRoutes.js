// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/', authenticateToken, authorizeRoles('admin', "lecturer", "student"), userController.getAllUsers);
router.get('/:id', authenticateToken, authorizeRoles('admin', "lecturer", "student"), userController.getUserById);
router.post('/', authenticateToken, authorizeRoles('admin', "lecturer"), userController.createUser);
router.put('/:id', authenticateToken, authorizeRoles('admin', "lecturer", "student"), userController.updateUser);
router.delete('/:id', authenticateToken, authorizeRoles('admin', "lecturer"), userController.deleteUser);

module.exports = router;
