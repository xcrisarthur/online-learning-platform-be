// controllers/AnnouncementController.js
const db = require('../models');
const Announcement = db.Announcement;

exports.getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.findAll();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAnnouncementById = async (req, res) => {
  try {
    const announcement = await Announcement.findByPk(req.params.id);
    if (!announcement) return res.status(404).json({ message: 'Announcement not found' });
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAnnouncement = async (req, res) => {
  try {
    const newAnnouncement = await Announcement.create(req.body);
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByPk(req.params.id);
    if (!announcement) return res.status(404).json({ message: 'Announcement not found' });

    await announcement.update(req.body);
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByPk(req.params.id);
    if (!announcement) return res.status(404).json({ message: 'Announcement not found' });

    await announcement.destroy();
    res.status(200).json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
