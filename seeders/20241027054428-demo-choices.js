'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const choices = [
      { question_id: 1, choice_text: 'a) Collaborating with classmates', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 1, choice_text: 'b) Hiring someone to complete an assignment', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 1, choice_text: 'c) Using online resources for research', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 1, choice_text: 'd) Seeking advice from a tutor', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 2, choice_text: 'a) Higher grades', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 2, choice_text: 'b) Expulsion from school', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 2, choice_text: 'c) Improved understanding', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 2, choice_text: 'd) None of the above', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 3, choice_text: 'a) To learn more', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 3, choice_text: 'b) For time management', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 3, choice_text: 'c) Due to time pressure and fear of failure', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 3, choice_text: 'd) For fun', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 4, choice_text: 'a) Collaborative studying', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 4, choice_text: 'b) Paying others to do your academic work', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 4, choice_text: 'c) Using library resources', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 4, choice_text: 'd) Taking extra courses', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 5, choice_text: 'a) Interest in learning', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 5, choice_text: 'b) Managing time better', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 5, choice_text: 'c) Overcoming study challenges alone', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 5, choice_text: 'd) Desire for higher grades without personal effort', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 6, choice_text: 'a) The hired person', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 6, choice_text: 'b) Only the student who cheats', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 6, choice_text: 'c) Academic integrity and the student’s reputation', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 6, choice_text: 'd) The school\'s financial situation', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 7, choice_text: 'a) Completing tasks independently', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 7, choice_text: 'b) Paying others to do academic work', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 7, choice_text: 'c) Seeking advice from teachers', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 7, choice_text: 'd) Using textbooks', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 8, choice_text: 'a) Getting expelled from school', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 8, choice_text: 'b) Gaining more skills', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 8, choice_text: 'c) Building better study habits', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 8, choice_text: 'd) Stronger academic integrity', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 9, choice_text: 'a) Interest in learning', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 9, choice_text: 'b) Time constraints and fear of failure', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 9, choice_text: 'c) Curiosity', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 9, choice_text: 'd) Personal satisfaction', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 10, choice_text: 'a) Studying with a friend', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 10, choice_text: 'b) Using notes during a closed-book exam', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 10, choice_text: 'c) Reviewing class notes before an exam', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 10, choice_text: 'd) Asking the instructor for clarification', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 11, choice_text: 'a) Increased knowledge', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 11, choice_text: 'b) Failing the exam', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 11, choice_text: 'c) Extra credit', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 11, choice_text: 'd) Reduced study time', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 12, choice_text: 'a) To learn more effectively', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 12, choice_text: 'b) Due to pressure to succeed', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 12, choice_text: 'c) To test their knowledge', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 12, choice_text: 'd) To support classmates', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 13, choice_text: 'a) Sharing answers during an exam', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 13, choice_text: 'b) Using a calculator in a restricted section', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 13, choice_text: 'c) Studying the night before', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 13, choice_text: 'd) Bringing unauthorized notes into the exam room', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 14, choice_text: 'a) Fair assessment of student knowledge', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 14, choice_text: 'b) The learning environment only', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 14, choice_text: 'c) The student’s focus on academics', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 14, choice_text: 'd) The instructor’s expectations', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 15, choice_text: 'a) Getting extra time on exams', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 15, choice_text: 'b) Failing the test or worse penalties', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 15, choice_text: 'c) Improving academic skills', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 15, choice_text: 'd) Making new friends in class', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 16, choice_text: 'a) Allowed in special cases', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 16, choice_text: 'b) An example of exam cheating', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 16, choice_text: 'c) Recommended by teachers', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 16, choice_text: 'd) A study technique', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 17, choice_text: 'a) Learning new skills', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 17, choice_text: 'b) Failing the course', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 17, choice_text: 'c) Earning more points', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 17, choice_text: 'd) Increased integrity', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 18, choice_text: 'a) Curiosity', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 18, choice_text: 'b) Pressure to perform well', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 18, choice_text: 'c) Wanting to make friends', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 18, choice_text: 'd) Learning gaps', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 19, choice_text: 'a) Using one\'s original ideas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 19, choice_text: 'b) Copying others\' work without credit', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 19, choice_text: 'c) Collaboration on group projects', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 19, choice_text: 'd) Writing a personal essay', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 20, choice_text: 'a) Citing all sources used', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 20, choice_text: 'b) Copying text without quotation marks', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 20, choice_text: 'c) Writing an original essay', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 20, choice_text: 'd) Using a bibliography', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 21, choice_text: 'a) Improved grades', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 21, choice_text: 'b) Academic penalties', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 21, choice_text: 'c) Increased learning', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 21, choice_text: 'd) Enhanced research skills', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 22, choice_text: 'a) Summarizing ideas without citing', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 22, choice_text: 'b) Discussing ideas with friends', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 22, choice_text: 'c) Conducting research independently', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 22, choice_text: 'd) Writing an original thesis', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 23, choice_text: 'a) Academic success', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 23, choice_text: 'b) Penalties or academic discipline', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 23, choice_text: 'c) Better research techniques', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 23, choice_text: 'd) Higher grades', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 24, choice_text: 'a) Paraphrasing without citation', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 24, choice_text: 'b) Using quotations and citations', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 24, choice_text: 'c) Relying only on personal knowledge', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 24, choice_text: 'd) Avoiding any research', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 25, choice_text: 'a) Using others’ work without credit', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 25, choice_text: 'b) Adding citations to sources', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 25, choice_text: 'c) Creating unique content', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 25, choice_text: 'd) Writing a summary', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 26, choice_text: 'a) Academic advancement', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 26, choice_text: 'b) Grade penalties or expulsion', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 26, choice_text: 'c) Extra credit', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 26, choice_text: 'd) Increased research skills', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 27, choice_text: 'a) Use proper citations', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 27, choice_text: 'b) Avoid using any sources', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 27, choice_text: 'c) Rely solely on group work', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 27, choice_text: 'd) Avoid research altogether', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 28, choice_text: 'a) Working on group projects', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 28, choice_text: 'b) Sharing answers for individual assignments', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 28, choice_text: 'c) Studying together in a group', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 28, choice_text: 'd) Asking for feedback on an essay', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 29, choice_text: 'a) Academic warnings', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 29, choice_text: 'b) Higher grades', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 29, choice_text: 'c) Improved skills', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 29, choice_text: 'd) Better understanding', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 30, choice_text: 'a) To make friends', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 30, choice_text: 'b) Due to assignment pressure', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 30, choice_text: 'c) To receive feedback', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 30, choice_text: 'd) Out of curiosity', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 31, choice_text: 'a) A group study method', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 31, choice_text: 'b) Unauthorized collaboration on assignments', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 31, choice_text: 'c) A peer review technique', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 31, choice_text: 'd) A teacher-led discussion', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 32, choice_text: 'a) Increased grades', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 32, choice_text: 'b) Academic penalties', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 32, choice_text: 'c) Gaining skills', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 32, choice_text: 'd) Recognition', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 33, choice_text: 'a) Group learning', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 33, choice_text: 'b) Individual learning integrity', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 33, choice_text: 'c) Collaborative projects', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 33, choice_text: 'd) Research methods', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 34, choice_text: 'a) Unauthorized collaboration on work', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 34, choice_text: 'b) Approved group projects', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 34, choice_text: 'c) Seeking feedback from peers', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 34, choice_text: 'd) Studying with classmates', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 35, choice_text: 'a) Academic penalties', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 35, choice_text: 'b) Improved study habits', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 35, choice_text: 'c) Better group skills', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 35, choice_text: 'd) Awards', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 36, choice_text: 'a) Due to assignment pressure', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 36, choice_text: 'b) For fun', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 36, choice_text: 'c) To learn from each other', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 36, choice_text: 'd) To improve research', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 37, choice_text: 'a) Accurate reporting', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 37, choice_text: 'b) Falsification of data', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 37, choice_text: 'c) Collaborative research', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 37, choice_text: 'd) Peer-reviewed study', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 38, choice_text: 'a) Increased trust in findings', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 38, choice_text: 'b) Damaged scientific credibility', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 38, choice_text: 'c) Higher publication rates', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 38, choice_text: 'd) Enhanced research quality', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 39, choice_text: 'a) For peer recognition', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 39, choice_text: 'b) Due to time pressure', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 39, choice_text: 'c) To improve accuracy', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 39, choice_text: 'd) For teamwork', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 40, choice_text: 'a) Misrepresenting or falsifying data', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 40, choice_text: 'b) Using accurate methods', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 40, choice_text: 'c) Collaborative data analysis', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 40, choice_text: 'd) Transparent reporting', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 41, choice_text: 'a) Enhanced trust in science', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 41, choice_text: 'b) Ruined career and credibility', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 41, choice_text: 'c) Improved research skills', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 41, choice_text: 'd) Higher integrity in data', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 42, choice_text: 'a) Falsify data as needed', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 42, choice_text: 'b) Follow ethical guidelines', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 42, choice_text: 'c) Avoid peer review', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 42, choice_text: 'd) Skip documenting results', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 43, choice_text: 'a) Data manipulation', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 43, choice_text: 'b) Honest reporting', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 43, choice_text: 'c) Accurate citations', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 43, choice_text: 'd) Collaborative work', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 44, choice_text: 'a) Reduced credibility', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 44, choice_text: 'b) Improved scientific reputation', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 44, choice_text: 'c) Awards', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 44, choice_text: 'd) New findings', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 45, choice_text: 'a) Time pressure', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 45, choice_text: 'b) Peer recognition', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 45, choice_text: 'c) Team support', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 45, choice_text: 'd) Curiosity', is_correct: false, created_at: new Date(), updated_at: new Date(), },

    ];

    const batchSize = 10;
    for (let i = 0; i < choices.length; i += batchSize) {
      const batch = choices.slice(i, i + batchSize);
      await queryInterface.bulkInsert('choices', batch, {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('choices', null, {});
  }
};
