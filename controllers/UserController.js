// controllers/UserController.js
const db = require('../models');
const User = db.User;
const bcrypt = require('bcrypt');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { password = 'User123', ...userData } = req.body; // Default password if not provided

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user with the hashed password
    const newUser = await User.create({ ...userData, password: hashedPassword });
    
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Destructure the password from req.body
    const { password, ...otherUpdates } = req.body;

    if (password) {
      // Hash the new password before updating
      const hashedPassword = await bcrypt.hash(password, 10);
      await user.update({ ...otherUpdates, password: hashedPassword });
    } else {
      // Update other fields without modifying the password
      await user.update(otherUpdates);
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: error.message });
  }
};



exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.destroy();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
