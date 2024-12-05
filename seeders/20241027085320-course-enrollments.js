'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const courseEnrollments = [
      { course_id: 1, student_id: 1, enrolled_at: new Date()},
      { course_id: 1, student_id: 2, assignedBy: 1, enrolled_at: new Date()},
      { course_id: 1, student_id: 3, assignedBy: 1, enrolled_at: new Date()},
      { course_id: 1, student_id: 4, assignedBy: 2, enrolled_at: new Date()},
    ];

    await queryInterface.bulkInsert('course_enrollments', courseEnrollments, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('course_enrollments', null, {});
  }
};
