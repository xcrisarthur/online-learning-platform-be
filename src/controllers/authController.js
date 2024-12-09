const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { users } = require('../models');

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Cari user berdasarkan email
      const user = await users.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Verifikasi password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Buat token
      const token = jwt.sign(
        { 
          id: user.user_id,
          email: user.email,
          role: user.role 
        }, 
        'online_learning_academia',
        { expiresIn: '24h' }
      );

      // Kirim response
      res.json({
        token,
        user_id: user.user_id,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
        email: user.email,
        class_level: user.class_level
      });

    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  profile: async (req, res) => {
    try {
      const user = await users.findByPk(req.user.id, {
        attributes: { exclude: ['password'] }
      });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = authController;