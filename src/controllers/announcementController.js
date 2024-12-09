const db = require('../models');
const Announcements = db.announcement;

const announcementController = {
  getAllAnnouncements: async (req, res) => {
    try {
      console.log('Getting all announcements...');
      const announcements = await Announcements.findAll();
      console.log('Announcements found:', announcements);
      res.json(announcements);
    } catch (error) {
      console.error('Error in getAllAnnouncements:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getAnnouncementById: async (req, res) => {
    try {
      const announcement = await Announcements.findByPk(req.params.id);
      if (announcement) {
        res.json(announcement);
      } else {
        res.status(404).json({ message: 'Announcement not found' });
      }
    } catch (error) {
      console.error('Error in getAnnouncementById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createAnnouncement: async (req, res) => {
    try {
      const announcement = await Announcements.create(req.body);
      res.status(201).json(announcement);
    } catch (error) {
      console.error('Error in createAnnouncement:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateAnnouncement: async (req, res) => {
    try {
      const announcement = await Announcements.findByPk(req.params.id);
      if (announcement) {
        await announcement.update(req.body);
        res.json(announcement);
      } else {
        res.status(404).json({ message: 'Announcement not found' });
      }
    } catch (error) {
      console.error('Error in updateAnnouncement:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteAnnouncement: async (req, res) => {
    try {
      const announcement = await Announcements.findByPk(req.params.id);
      if (announcement) {
        await announcement.destroy();
        res.json({ message: 'Announcement deleted successfully' });
      } else {
        res.status(404).json({ message: 'Announcement not found' });
      }
    } catch (error) {
      console.error('Error in deleteAnnouncement:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = announcementController;