'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tests', [
      { module_id: 1, test_type: 'pretest', created_at: new Date(), updated_at: new Date() },
      { module_id: 3, test_type: 'minitest', created_at: new Date(), updated_at: new Date() },
      { module_id: 4, test_type: 'posttest', created_at: new Date(), updated_at: new Date() },
      { module_id: 5, test_type: 'pretest', created_at: new Date(), updated_at: new Date() },
      { module_id: 7, test_type: 'minitest', created_at: new Date(), updated_at: new Date() },
      { module_id: 8, test_type: 'posttest', created_at: new Date(), updated_at: new Date() },
      { module_id: 9, test_type: 'pretest', created_at: new Date(), updated_at: new Date() },
      { module_id: 11, test_type: 'minitest', created_at: new Date(), updated_at: new Date() },
      { module_id: 12, test_type: 'posttest', created_at: new Date(), updated_at: new Date() },
      { module_id: 13, test_type: 'pretest', created_at: new Date(), updated_at: new Date() },
      { module_id: 15, test_type: 'minitest', created_at: new Date(), updated_at: new Date() },
      { module_id: 16, test_type: 'posttest', created_at: new Date(), updated_at: new Date() },
      { module_id: 17, test_type: 'pretest', created_at: new Date(), updated_at: new Date() },
      { module_id: 19, test_type: 'minitest', created_at: new Date(), updated_at: new Date() },
      { module_id: 20, test_type: 'posttest', created_at: new Date(), updated_at: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tests', null, {});
  }
};
