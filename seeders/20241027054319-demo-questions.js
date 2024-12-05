'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('questions', [
      { test_id: 1, question_text: '1. What is contract cheating?', created_at: new Date(), updated_at: new Date() },
      { test_id: 1, question_text: '2. Which of the following is a consequence of contract cheating?', created_at: new Date(), updated_at: new Date() },
      { test_id: 1, question_text: '3. Why do students engage in contract cheating?', created_at: new Date(), updated_at: new Date() },
      { test_id: 2, question_text: '1. Which statement best defines contract cheating?', created_at: new Date(), updated_at: new Date() },
      { test_id: 2, question_text: '2. Which of the following is a consequence of contract cheating?', created_at: new Date(), updated_at: new Date() },
      { test_id: 2, question_text: '3. Contract cheating primarily affects:', created_at: new Date(), updated_at: new Date() },
      { test_id: 3, question_text: '1. Contract cheating involves:', created_at: new Date(), updated_at: new Date() },
      { test_id: 3, question_text: '2. A possible consequence of contract cheating is:', created_at: new Date(), updated_at: new Date() },
      { test_id: 3, question_text: '3. Students may engage in contract cheating due to:', created_at: new Date(), updated_at: new Date() },
      { test_id: 4, question_text: '1. Which of the following is considered exam cheating?', created_at: new Date(), updated_at: new Date() },
      { test_id: 4, question_text: '2. A consequence of exam cheating could be:', created_at: new Date(), updated_at: new Date() },
      { test_id: 4, question_text: '3. Why might some students cheat in exams?', created_at: new Date(), updated_at: new Date() },
      { test_id: 5, question_text: '1. Which activity is NOT exam cheating?', created_at: new Date(), updated_at: new Date() },
      { test_id: 5, question_text: '2. Exam cheating disrupts:', created_at: new Date(), updated_at: new Date() },
      { test_id: 5, question_text: '3. A common consequence of exam cheating is:', created_at: new Date(), updated_at: new Date() },
      { test_id: 6, question_text: '1. Using notes in a closed-book exam is:', created_at: new Date(), updated_at: new Date() },
      { test_id: 6, question_text: '2. Cheating on an exam can lead to:', created_at: new Date(), updated_at: new Date() },
      { test_id: 6, question_text: '3. Students might resort to exam cheating due to:', created_at: new Date(), updated_at: new Date() },
      { test_id: 7, question_text: '1. Plagiarism involves:', created_at: new Date(), updated_at: new Date() },
      { test_id: 7, question_text: '2. Which of the following is a form of plagiarism?', created_at: new Date(), updated_at: new Date() },
      { test_id: 7, question_text: '3. What can result from plagiarism?', created_at: new Date(), updated_at: new Date() },
      { test_id: 8, question_text: '1. Which action is an example of plagiarism?', created_at: new Date(), updated_at: new Date() },
      { test_id: 8, question_text: '2. Plagiarism can lead to:', created_at: new Date(), updated_at: new Date() },
      { test_id: 8, question_text: '3. A way to avoid plagiarism is:', created_at: new Date(), updated_at: new Date() },
      { test_id: 9, question_text: '1. Plagiarism occurs when:', created_at: new Date(), updated_at: new Date() },
      { test_id: 9, question_text: '2. A common outcome of plagiarism is:', created_at: new Date(), updated_at: new Date() },
      { test_id: 9, question_text: '3. To avoid plagiarism, one should:', created_at: new Date(), updated_at: new Date() },
      { test_id: 10, question_text: '1. Collusion occurs when:', created_at: new Date(), updated_at: new Date() },
      { test_id: 10, question_text: '2. Which of these is a consequence of collusion?', created_at: new Date(), updated_at: new Date() },
      { test_id: 10, question_text: '3. Why might students engage in collusion?', created_at: new Date(), updated_at: new Date() },
      { test_id: 11, question_text: '1. Collusion is:', created_at: new Date(), updated_at: new Date() },
      { test_id: 11, question_text: '2. A consequence of collusion can be:', created_at: new Date(), updated_at: new Date() },
      { test_id: 11, question_text: '3. Collusion undermines:', created_at: new Date(), updated_at: new Date() },
      { test_id: 12, question_text: '1. Collusion refers to:', created_at: new Date(), updated_at: new Date() },
      { test_id: 12, question_text: '2. Collusion can result in:', created_at: new Date(), updated_at: new Date() },
      { test_id: 12, question_text: '3. One reason students engage in collusion is:', created_at: new Date(), updated_at: new Date() },
      { test_id: 13, question_text: '1. Research fraud is:', created_at: new Date(), updated_at: new Date() },
      { test_id: 13, question_text: '2. A consequence of research fraud is:', created_at: new Date(), updated_at: new Date() },
      { test_id: 13, question_text: '3. Why might someone commit research fraud?', created_at: new Date(), updated_at: new Date() },
      { test_id: 14, question_text: '1. Research fraud involves:', created_at: new Date(), updated_at: new Date() },
      { test_id: 14, question_text: '2. A consequence of research fraud can be:', created_at: new Date(), updated_at: new Date() },
      { test_id: 14, question_text: '3. To avoid research fraud, researchers should:', created_at: new Date(), updated_at: new Date() },
      { test_id: 15, question_text: '1. Research fraud refers to:', created_at: new Date(), updated_at: new Date() },
      { test_id: 15, question_text: '2. A common result of research fraud is:', created_at: new Date(), updated_at: new Date() },
      { test_id: 15, question_text: '3. Researchers may commit fraud due to:', created_at: new Date(), updated_at: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('questions', null, {});
  }
};
