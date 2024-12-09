const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const courseController = require('../controllers/courseController');
const courseEnrollmentController = require('../controllers/courseEnrollmentController');
const moduleController = require('../controllers/moduleController');
const moduleContentController = require('../controllers/moduleContentController');
const moduleContentJuniorController = require('../controllers/moduleContentJuniorController');
const testController = require('../controllers/testController');
const questionController = require('../controllers/questionController');
const choiceController = require("../controllers/choiceController");
const testResultController = require('../controllers/testResultController');
const progressTrackingController = require('../controllers/progressTrackingController');
const notificationController = require('../controllers/notificationController');
const announcementController = require('../controllers/announcementController');
const fileController = require('../controllers/fileController');

const authController = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');

// Auth routes
router.post('/auth/login', authController.login);
// router.post('/auth/register', authController.register);

router.get('/auth/profile', verifyToken, authController.profile);

// users routes
router.get('/users', verifyToken, userController.getAllUsers);
router.get('/users/:id', verifyToken, userController.getUserById);
router.post('/users', verifyToken, userController.createUser);
router.put('/users/:id', verifyToken, userController.updateUser);
router.delete('/users/:id', verifyToken, userController.deleteUser);

// courses routes
router.get('/courses', verifyToken, courseController.getAllCourses);
router.get('/courses/:id', verifyToken, courseController.getCourseById);
router.post('/courses', verifyToken, courseController.createCourse);
router.put('/courses/:id', verifyToken, courseController.updateCourse);
router.delete('/courses/:id', verifyToken, courseController.deleteCourse);

// courses enrollments routes
router.get('/enrollments', verifyToken, courseEnrollmentController.getAllEnrollments);
router.get('/enrollments/enrolled', verifyToken, courseEnrollmentController.getEnrolledCourses);
router.post('/enrollments', verifyToken, courseEnrollmentController.createEnrollment);
router.put('/enrollments/:id', verifyToken, courseEnrollmentController.updateEnrollment);
router.delete('/enrollments/user/:userId', verifyToken, courseEnrollmentController.deleteEnrollmentsByUserId);

// modules routes
router.get('/modules', verifyToken, moduleController.getAllModules);
router.get('/modules/:courseId', verifyToken, moduleController.getModulesByCourseId);
router.get('/modules/MdlId/:id', verifyToken, moduleController.getModuleById);
router.post('/modules', verifyToken, moduleController.createModule);
router.put('/modules/:id', verifyToken, moduleController.updateModule);
router.delete('/modules/:id', verifyToken, moduleController.deleteModule);

// module-contents routes
router.get('/module-contents', verifyToken, moduleContentController.getAllContents);
router.get('/module-contents/:id', verifyToken, moduleContentController.getContentById);
router.get('/module-contents/module/:module_id/contents', verifyToken, moduleContentController.getContentByIdModule);
router.post('/module-contents', verifyToken, moduleContentController.createContent);
router.put('/module-contents/:id', verifyToken, moduleContentController.updateContent);
router.delete('/module-contents/:id', verifyToken, moduleContentController.deleteContent);

// module-contents-junior routes
router.get('/module-contents-junior', verifyToken, moduleContentJuniorController.getAllContentsJr);
router.get('/module-contents-junior/:id', verifyToken, moduleContentJuniorController.getContentJrById);
router.get('/module-contents-junior/module/:module_id/contents', verifyToken, moduleContentJuniorController.getContentJrByIdModule);
router.post('/module-contents-junior', verifyToken, moduleContentJuniorController.createContentJr);
router.put('/module-contents-junior/:id', verifyToken, moduleContentJuniorController.updateContentJr);
router.delete('/module-contents-junior/:id', verifyToken, moduleContentJuniorController.deleteContentJr);

// tests routes
router.get('/tests', verifyToken, testController.getAllTests);
router.get('/tests/:id', verifyToken, testController.getTestById);
router.get('/tests/module/:module_id/tests', verifyToken, testController.getTestsByModuleId);
router.post('/tests', verifyToken, testController.createTest);
router.put('/tests/:id', verifyToken, testController.updateTest);
router.delete('/tests/:id', verifyToken, testController.deleteTest);

// questions routes
router.get('/questions', verifyToken, questionController.getAllQuestions);
router.get('/questions/:id', verifyToken, questionController.getQuestionById);
router.get('/questions/test/:test_id/questions', verifyToken, questionController.getQuestionsByTestId);
router.post('/questions', verifyToken, questionController.createQuestion);
router.put('/questions/:id', verifyToken, questionController.updateQuestion);
router.delete('/questions/:id', verifyToken, questionController.deleteQuestion);

// choices routes
router.get('/choices', verifyToken, choiceController.getAllChoices);
router.get('/choices/:id', verifyToken, choiceController.getChoiceById);
router.get('/choices/questions/:question_id', verifyToken, choiceController.getChoicesByQuestionId);
router.post('/choices', verifyToken, choiceController.createChoice);
router.put('/choices/:id', verifyToken, choiceController.updateChoice);
router.delete('/choices/:id', verifyToken, choiceController.deleteChoice);

// test-results routes
router.get('/test-results', verifyToken, testResultController.getAllResults);
router.get('/test-results/:id', verifyToken, testResultController.getResultById);
router.post('/test-results', verifyToken, testResultController.addTestResult);
router.post('/test-results/test-results', verifyToken, testResultController.addTestResult);

// progress routes
router.get('/progress', verifyToken, progressTrackingController.getAllProgress);
router.get('/progress/:id', verifyToken, progressTrackingController.getProgressById);

// notifications routes
router.get('/notifications', verifyToken, notificationController.getAllNotifications);
router.get('/notifications/:id', verifyToken, notificationController.getNotificationById);
router.post('/notifications', verifyToken, notificationController.createNotification);
router.put('/notifications/:id', verifyToken, notificationController.updateNotification);
router.delete('/notifications/:id', verifyToken, notificationController.deleteNotification);

// announcements routes
router.get('/announcements', verifyToken, announcementController.getAllAnnouncements);
router.get('/announcements/:id', verifyToken, announcementController.getAnnouncementById);
router.post('/announcements', verifyToken, announcementController.createAnnouncement);
router.put('/announcements/:id', verifyToken, announcementController.updateAnnouncement);
router.delete('/announcements/:id', verifyToken, announcementController.deleteAnnouncement);

// files routes
router.get('/files', verifyToken, fileController.getAllFiles);
router.get('/files/:id', verifyToken, fileController.getFileById);
router.post('/files', verifyToken, fileController.createFile);
router.put('/files/:id', verifyToken, fileController.updateFile);
router.delete('/files/:id', verifyToken, fileController.deleteFile);

module.exports = router;