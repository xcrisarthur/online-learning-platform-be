// backend/controllers/AuthController.js
const db = require('../models');
const User = db.User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
exports.register = async (req, res) => {
  const { role, first_name, last_name, email, password, class_level } = req.body;

  try {
    // Cek apakah email sudah ada
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat user baru
    const newUser = await User.create({
      role,
      first_name,
      last_name,
      email,
      password: hashedPassword,
      class_level
    });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log('Request Body:', req.body); // Logging request body for debug

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Cek apakah user ada
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Cek password dengan password yang di-hash di database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Buat token JWT
    const token = jwt.sign(
      { userId: user.user_id, role: user.role, firstName: user.first_name, lastName: user.last_name, classLevel: user.class_level },
      process.env.JWT_SECRET,
      { expiresIn: '12h' } // Token valid selama 1 jam
    );

    res.status(200).json({ token, userId: user.user_id, role: user.role, firstName: user.first_name, lastName: user.last_name, classLevel: user.class_level });
  } catch (err) {
    console.error('Error during login:', err); // Logging error
    res.status(500).json({ message: 'Server error' });
  }
};
