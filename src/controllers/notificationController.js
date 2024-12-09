const db = require('../models');
const Notifications = db.notification;

const notificationController = {
  getAllNotifications: async (req, res) => {
    try {
      console.log('Getting all notifications...'); // Debug log
      const notifications = await Notifications.findAll();
      res.json(notifications);
    } catch (error) {
      console.error('Error in getAllNotifications:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getNotificationById: async (req, res) => {
    try {
      const notification = await Notifications.findByPk(req.params.id);
      if (notification) {
        res.json(notification);
      } else {
        res.status(404).json({ message: 'Notification not found' });
      }
    } catch (error) {
      console.error('Error in getNotificationById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createNotification: async (req, res) => {
    try {
      const notification = await Notifications.create(req.body);
      res.status(201).json(notification);
    } catch (error) {
      console.error('Error in createNotification:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateNotification: async (req, res) => {
    try {
      const notification = await Notifications.findByPk(req.params.id);
      if (notification) {
        await notification.update(req.body);
        res.json(notification);
      } else {
        res.status(404).json({ message: 'Notification not found' });
      }
    } catch (error) {
      console.error('Error in updateNotification:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteNotification: async (req, res) => {
    try {
      const notification = await Notifications.findByPk(req.params.id);
      if (notification) {
        await notification.destroy();
        res.json({ message: 'Notification deleted successfully' });
      } else {
        res.status(404).json({ message: 'Notification not found' });
      }
    } catch (error) {
      console.error('Error in deleteNotification:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = notificationController;