const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-frontend-domain.com'  // Ganti dengan domain frontend Anda
    : 'http://localhost:3030',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const courseEnrollmentRoutes = require('./routes/courseEnrollmentRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const moduleContentRoutes = require('./routes/moduleContentRoutes');
const moduleContentJuniorRoutes = require('./routes/moduleContentJuniorRoutes');
const testRoutes = require('./routes/testRoutes');
const questionRoutes = require('./routes/questionRoutes');
const choiceRoutes = require('./routes/choiceRoutes');
const testResultRoutes = require('./routes/testResultRoutes');
const progressTrackingRoutes = require('./routes/progressTrackingRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const fileRoutes = require('./routes/fileRoutes');
const authRoutes = require('./routes/authRoutes');

// Load models
const models = require('./models');

// Register routes
app.use('/users', userRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', courseEnrollmentRoutes);
app.use('/modules', moduleRoutes);
app.use('/module-contents', moduleContentRoutes);
app.use('/module-contents-junior', moduleContentJuniorRoutes);
app.use('/tests', testRoutes);
app.use('/questions', questionRoutes);
app.use('/choices', choiceRoutes);
app.use('/test-results', testResultRoutes);
app.use('/progress', progressTrackingRoutes);
app.use('/notifications', notificationRoutes);
app.use('/announcements', announcementRoutes);
app.use('/files', fileRoutes);
app.use('/auth', authRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Online Learning Platform API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3000;

// Database connection and server startup
const startServer = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('✅ Database Connected Successfully');

    // Sync models (in development only)
    if (process.env.NODE_ENV !== 'production') {
      await sequelize.sync();
      console.log('✅ Database Synced');
    }

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`Mode: ${process.env.NODE_ENV}`);
      console.log(`Database: ${process.env.NODE_ENV === 'production' ? 'Railway MySQL' : 'Local MySQL'}`);
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Start the server
startServer();

module.exports = app; // For testing purposes