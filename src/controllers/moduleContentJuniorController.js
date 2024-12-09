const db = require('../models');
const ModuleContents = db.moduleContent;
const ModuleContentsJunior = db.moduleContentJunior;

const moduleContentJuniorController = {
  // Regular Module Content Methods
  getAllContents: async (req, res) => {
    try {
      console.log('Getting all module contents...'); // Debug log
      const contents = await ModuleContents.findAll();
      res.json(contents);
    } catch (error) {
      console.error('Error in getAllContents:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getContentById: async (req, res) => {
    try {
      const content = await ModuleContents.findByPk(req.params.id);
      if (content) {
        res.json(content);
      } else {
        res.status(404).json({ message: 'Content not found' });
      }
    } catch (error) {
      console.error('Error in getContentById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getContentByIdModule: async (req, res) => {
    try {
      const moduleId = req.params.module_id;
      const contents = await ModuleContents.findAll({
        where: { module_id: moduleId }
      });
      
      if (contents.length > 0) {
        res.json(contents);
      } else {
        res.status(404).json({ message: 'No content found for this module' });
      }
    } catch (error) {
      console.error('Error in getContentByIdModule:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createContent: async (req, res) => {
    try {
      const content = await ModuleContents.create(req.body);
      res.status(201).json(content);
    } catch (error) {
      console.error('Error in createContent:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateContent: async (req, res) => {
    try {
      const content = await ModuleContents.findByPk(req.params.id);
      if (content) {
        if (req.body.content_text !== undefined) {
          content.content_text = req.body.content_text;
        }
        await content.save();
        res.json(content);
      } else {
        res.status(404).json({ message: 'Content not found' });
      }
    } catch (error) {
      console.error('Error in updateContent:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteContent: async (req, res) => {
    try {
      const content = await ModuleContents.findByPk(req.params.id);
      if (content) {
        await content.destroy();
        res.json({ message: 'Content deleted successfully' });
      } else {
        res.status(404).json({ message: 'Content not found' });
      }
    } catch (error) {
      console.error('Error in deleteContent:', error);
      res.status(500).json({ message: error.message });
    }
  },

  // Junior Module Content Methods
  getAllContentsJr: async (req, res) => {
    try {
      console.log('Getting all junior module contents...'); // Debug log
      const contents = await ModuleContentsJunior.findAll();
      res.json(contents);
    } catch (error) {
      console.error('Error in getAllContentsJr:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getContentJrByIdModule: async (req, res) => {
    try {
      const moduleId = req.params.module_id;
      const contents = await ModuleContentsJunior.findAll({
        where: { module_id: moduleId }
      });
      
      if (contents.length > 0) {
        res.json(contents);
      } else {
        res.status(404).json({ message: 'No junior content found for this module' });
      }
    } catch (error) {
      console.error('Error in getContentJrByIdModule:', error);
      res.status(500).json({ message: error.message });
    }
  },

  getContentJrById: async (req, res) => {
    try {
      const content = await ModuleContentsJunior.findByPk(req.params.id);
      if (content) {
        res.json(content);
      } else {
        res.status(404).json({ message: 'Junior content not found' });
      }
    } catch (error) {
      console.error('Error in getContentJrById:', error);
      res.status(500).json({ message: error.message });
    }
  },

  createContentJr: async (req, res) => {
    try {
      const content = await ModuleContentsJunior.create(req.body);
      res.status(201).json(content);
    } catch (error) {
      console.error('Error in createContentJr:', error);
      res.status(400).json({ message: error.message });
    }
  },

  updateContentJr: async (req, res) => {
    try {
      const content = await ModuleContentsJunior.findByPk(req.params.id);
      if (content) {
        if (req.body.content_text !== undefined) {
          content.content_text = req.body.content_text;
        }
        await content.save();
        res.json(content);
      } else {
        res.status(404).json({ message: 'Junior content not found' });
      }
    } catch (error) {
      console.error('Error in updateContentJr:', error);
      res.status(400).json({ message: error.message });
    }
  },

  deleteContentJr: async (req, res) => {
    try {
      const content = await ModuleContentsJunior.findByPk(req.params.id);
      if (content) {
        await content.destroy();
        res.json({ message: 'Junior content deleted successfully' });
      } else {
        res.status(404).json({ message: 'Junior content not found' });
      }
    } catch (error) {
      console.error('Error in deleteContentJr:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = moduleContentJuniorController;