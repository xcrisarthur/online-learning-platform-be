'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('courses', [
      {
        title: 'Academic Integrity',
        description: 'Kursus ini untuk mengedukasi tentang integritas akademik',
        created_by: 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
