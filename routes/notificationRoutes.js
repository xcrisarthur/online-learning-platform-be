// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/NotificationController');
const { authenticateToken } = require('../middleware/auth');

router.get('/', authenticateToken, notificationController.getAllNotifications);
router.get('/:id', authenticateToken, notificationController.getNotificationById);
router.post('/', authenticateToken, notificationController.createNotification);
router.put('/:id', authenticateToken, notificationController.updateNotification);
router.delete('/:id', authenticateToken, notificationController.deleteNotification);

module.exports = router;
