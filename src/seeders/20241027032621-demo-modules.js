module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('modules', [
      // Plagiarism Modules
      { course_id: 1, module_title: 'Pre-Test Plagiarism', module_type: 'pretest', order_index: 1, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Plagiarism', module_type: 'materials', order_index: 2, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Quiz Plagiarism', module_type: 'minitest', order_index: 3, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Post-Test Plagiarism', module_type: 'posttest', order_index: 4, created_at: new Date(), updated_at: new Date() },

      // Collusion Modules
      { course_id: 1, module_title: 'Pre-Test Collusion', module_type: 'pretest', order_index: 1, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Collusion', module_type: 'materials', order_index: 2, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Quiz Collusion', module_type: 'minitest', order_index: 3, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Post-Test Collusion', module_type: 'posttest', order_index: 4, created_at: new Date(), updated_at: new Date() },

      // Contract Cheating Modules
      { course_id: 1, module_title: 'Pre-Test Contract Cheating', module_type: 'pretest', order_index: 1, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Contract Cheating', module_type: 'materials', order_index: 2, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Quiz Contract Cheating', module_type: 'minitest', order_index: 3, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Post-Test Contract Cheating', module_type: 'posttest', order_index: 4, created_at: new Date(), updated_at: new Date() },

      // Exam Cheating Modules
      { course_id: 1, module_title: 'Pre-Test Exam Cheating', module_type: 'pretest', order_index: 1, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Exam Cheating', module_type: 'materials', order_index: 2, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Quiz Exam Cheating', module_type: 'minitest', order_index: 3, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Post-Test Exam Cheating', module_type: 'posttest', order_index: 4, created_at: new Date(), updated_at: new Date() },

      // Research Fraud Modules
      { course_id: 1, module_title: 'Pre-Test Research Fraud', module_type: 'pretest', order_index: 1, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Research Fraud', module_type: 'materials', order_index: 2, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Quiz Research Fraud', module_type: 'minitest', order_index: 3, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Post-Test Research Fraud', module_type: 'posttest', order_index: 4, created_at: new Date(), updated_at: new Date() },

      // AI-based Cheating Modules
      { course_id: 1, module_title: 'Pre-Test AI-based Cheating', module_type: 'pretest', order_index: 1, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'AI-based Cheating', module_type: 'materials', order_index: 2, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Quiz AI-based Cheating', module_type: 'minitest', order_index: 3, created_at: new Date(), updated_at: new Date() },
      { course_id: 1, module_title: 'Post-Test AI-based Cheating', module_type: 'posttest', order_index: 4, created_at: new Date(), updated_at: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('modules', null, {});
  }
};
