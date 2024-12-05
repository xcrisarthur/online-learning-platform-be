'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const passwordHash1 = await bcrypt.hash('admin1', 10);
    const passwordHash2 = await bcrypt.hash('dosen1', 10);
    const passwordHash3 = await bcrypt.hash('student1', 10);
    const passwordHash4 = await bcrypt.hash('student2', 10);
    const passwordHash5 = await bcrypt.hash('student3', 10);

    await queryInterface.bulkInsert('users', [
      {
        role: 'admin',
        first_name: 'admin',
        last_name: 'satu',
        email: 'adminsatu@gmail.com',
        password: passwordHash1,
        class_level: 'general',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        role: 'lecturer',
        first_name: 'dosen',
        last_name: 'satu',
        email: 'dosensatu@gmail.com',
        password: passwordHash2,
        class_level: 'general',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        role: 'student',
        first_name: 'student',
        last_name: 'satu',
        email: 'studentsatu@gmail.com',
        password: passwordHash3,
        class_level: 'junior',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        role: 'student',
        first_name: 'student',
        last_name: 'dua',
        email: 'studentdua@gmail.com',
        password: passwordHash4,
        class_level: 'general',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        role: 'student',
        first_name: 'student',
        last_name: 'tiga',
        email: 'studenttiga@gmail.com',
        password: passwordHash5,
        class_level: 'general',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
