// routes/announcementRoutes.js
const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/AnnouncementController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

router.get('/', authenticateToken, announcementController.getAllAnnouncements);
router.get('/:id', authenticateToken, announcementController.getAnnouncementById);
router.post('/', authenticateToken, authorizeRoles('admin', 'lecturer'), announcementController.createAnnouncement);
router.put('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), announcementController.updateAnnouncement);
router.delete('/:id', authenticateToken, authorizeRoles('admin', 'lecturer'), announcementController.deleteAnnouncement);

module.exports = router;
