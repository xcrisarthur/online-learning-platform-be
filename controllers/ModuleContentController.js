// controllers/ModuleContentController.js
const db = require('../models');
const ModuleContent = db.ModuleContent;

exports.getContentByIdModule = async (req, res) => {
  try {
    const moduleId = req.params.module_id;
    const contents = await ModuleContent.findAll({
      where: { module_id: moduleId }
    });

    if (!contents.length) {
      return res.status(404).json({ message: 'No content found for this module' });
    }

    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllContents = async (req, res) => {
  try {
    const contents = await ModuleContent.findAll();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getContentById = async (req, res) => {
  try {
    const content = await ModuleContent.findByPk(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createContent = async (req, res) => {
  try {
    const newContent = await ModuleContent.create(req.body);
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateContent = async (req, res) => {
  try {
    const content = await ModuleContent.findByPk(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });

    await content.update(req.body);
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const content = await ModuleContent.findByPk(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });

    await content.destroy();
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateContent = async (req, res) => {
  try {
    const content = await ModuleContent.findByPk(req.params.id)
    if (!content) return res.status(404).json({ message: 'Content not found' })

    // Hanya update `content_text` jika ada dalam `req.body`
    if (req.body.content_text !== undefined) {
      content.content_text = req.body.content_text
    }

    await content.save()
    res.status(200).json(content)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}