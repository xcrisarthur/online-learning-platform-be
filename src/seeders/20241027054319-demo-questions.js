module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('questions', [
      // pre test plagiarsm
      { test_id: 1, question_text: '1. Apa yang dimaksud dengan plagiarisme?', created_at: new Date(), updated_at: new Date() },
      { test_id: 1, question_text: '2. Manakah dari tindakan berikut yang BUKAN termasuk bentuk plagiarisme?', created_at: new Date(), updated_at: new Date() },
      { test_id: 1, question_text: '3. Dalam konteks akademik, apa konsekuensi yang dapat diterima jika terbukti melakukan plagiarisme?', created_at: new Date(), updated_at: new Date() },
      { test_id: 1, question_text: '4. Bagaimana cara yang tepat untuk menghindari plagiarisme?', created_at: new Date(), updated_at: new Date() },
      { test_id: 1, question_text: '5. Apa yang dimaksud dengan self-plagiarism?', created_at: new Date(), updated_at: new Date() },

      // mini test plagiarsm
      { test_id: 2, question_text: '1. Dari studi kasus "Tugas Python", apa kesalahan utama yang dilakukan Foxy?', created_at: new Date(), updated_at: new Date() },
      { test_id: 2, question_text: '2. Berdasarkan dialog video, apa yang menyebabkan Foxy ketahuan melakukan plagiarisme?', created_at: new Date(), updated_at: new Date() },
      { test_id: 2, question_text: '3. Dalam penggunaan AI untuk coding, manakah yang merupakan praktik yang benar?', created_at: new Date(), updated_at: new Date() },
      { test_id: 2, question_text: '4. Apa dampak profesional dari kebiasaan melakukan plagiarisme kode?', created_at: new Date(), updated_at: new Date() },
      { test_id: 2, question_text: '5. Dari materi yang diberikan, cara terbaik menghindari plagiarisme adalah?', created_at: new Date(), updated_at: new Date() },

      // post test plagiarsm
      { test_id: 3, question_text: '1. Dalam pengembangan karir programming, mengapa integritas kode penting?', created_at: new Date(), updated_at: new Date() },
      { test_id: 3, question_text: '2. Bagaimana cara terbaik menggunakan referensi kode dari sumber lain?', created_at: new Date(), updated_at: new Date() },
      { test_id: 3, question_text: '3. Dalam konteks pembelajaran programming, apa fungsi utama dari dokumentasi kode?', created_at: new Date(), updated_at: new Date() },
      { test_id: 3, question_text: '4. Ketika menggunakan AI dalam coding, apa yang harus diperhatikan?', created_at: new Date(), updated_at: new Date() },
      { test_id: 3, question_text: '5. Apa konsekuensi jangka panjang dari kebiasaan melakukan plagiarisme kode?', created_at: new Date(), updated_at: new Date() },

      // pre test collusion
      { test_id: 4, question_text: '1. Apa yang dimaksud dengan kolusi akademik?', created_at: new Date(), updated_at: new Date() },
      { test_id: 4, question_text: '2. Manakah yang termasuk bentuk kolusi?', created_at: new Date(), updated_at: new Date() },
      { test_id: 4, question_text: '3. Apa konsekuensi umum dari tindakan kolusi?', created_at: new Date(), updated_at: new Date() },
      { test_id: 4, question_text: '4. Mengapa kolusi dianggap pelanggaran akademik?', created_at: new Date(), updated_at: new Date() },
      { test_id: 4, question_text: '5. Cara terbaik menghindari kolusi adalah?', created_at: new Date(), updated_at: new Date() },

      // mini test collusion
      { test_id: 5, question_text: '1. Dalam studi kasus "Analisis Virtual Reality", apa kesalahan utama yang dilakukan?', created_at: new Date(), updated_at: new Date() },
      { test_id: 5, question_text: '2. Berdasarkan dialog video, mengapa Foxy dan Mosi mendapat pengurangan nilai?', created_at: new Date(), updated_at: new Date() },
      { test_id: 5, question_text: '3. Apa dampak profesional dari kebiasaan kolusi?', created_at: new Date(), updated_at: new Date() },
      { test_id: 5, question_text: '4. Bagaimana penggunaan teknologi yang benar dalam konteks akademik?', created_at: new Date(), updated_at: new Date() },
      { test_id: 5, question_text: '5. Apa strategi terbaik mencegah kolusi di era digital?', created_at: new Date(), updated_at: new Date() },

      // post test collusion
      { test_id: 6, question_text: '1. Bagaimana kolusi mempengaruhi perkembangan akademis jangka panjang?', created_at: new Date(), updated_at: new Date() },
      { test_id: 6, question_text: '2. Apa pentingnya integritas akademik dalam pengembangan profesional?', created_at: new Date(), updated_at: new Date() },
      { test_id: 6, question_text: '3. Bagaimana cara tepat menggunakan AI dalam pembelajaran?', created_at: new Date(), updated_at: new Date() },
      { test_id: 6, question_text: '4. Apa kunci sukses jangka panjang dalam akademik?', created_at: new Date(), updated_at: new Date() },
      { test_id: 6, question_text: '5. Bagaimana membangun portfolio akademik yang berintegritas?', created_at: new Date(), updated_at: new Date() },

      // pre test contract cheating
      { test_id: 7, question_text: '1. Apa yang dimaksud dengan contract cheating?', created_at: new Date(), updated_at: new Date() },
      { test_id: 7, question_text: '2. Manakah yang termasuk bentuk contract cheating?', created_at: new Date(), updated_at: new Date() },
      { test_id: 7, question_text: '3. Apa risiko utama melakukan contract cheating?', created_at: new Date(), updated_at: new Date() },
      { test_id: 7, question_text: '4. Mengapa contract cheating dianggap pelanggaran serius?', created_at: new Date(), updated_at: new Date() },
      { test_id: 7, question_text: '5. Siapa yang dirugikan dalam praktik contract cheating?', created_at: new Date(), updated_at: new Date() },

      // mini test contract cheating
      { test_id: 8, question_text: '1. Dalam dialog video, apa kesalahan yang dilakukan Mosi dan Ruka?', created_at: new Date(), updated_at: new Date() },
      { test_id: 8, question_text: '2. Berdasarkan studi kasus "Esai Bahasa Inggris", mengapa kecurangan terdeteksi?', created_at: new Date(), updated_at: new Date() },
      { test_id: 8, question_text: '3. Apa dampak jangka panjang dari contract cheating?', created_at: new Date(), updated_at: new Date() },
      { test_id: 8, question_text: '4. Bagaimana penggunaan AI yang benar dalam pembelajaran?', created_at: new Date(), updated_at: new Date() },
      { test_id: 8, question_text: '5. Apa strategi terbaik menghindari contract cheating?', created_at: new Date(), updated_at: new Date() },

      // post test contract cheating
      { test_id: 9, question_text: '1. Apa dampak contract cheating terhadap karir profesional?', created_at: new Date(), updated_at: new Date() },
      { test_id: 9, question_text: '2. Bagaimana cara membangun portfolio akademik yang autentik?', created_at: new Date(), updated_at: new Date() },
      { test_id: 9, question_text: '3. Apa peran teknologi yang tepat dalam pembelajaran?', created_at: new Date(), updated_at: new Date() },
      { test_id: 9, question_text: '4. Bagaimana membangun integritas akademik jangka panjang?', created_at: new Date(), updated_at: new Date() },
      { test_id: 9, question_text: '5. Apa kunci sukses dalam pengembangan karir akademik?', created_at: new Date(), updated_at: new Date() },

      // pre test exam cheating
      { test_id: 10, question_text: '1. Apa yang dimaksud dengan kecurangan dalam ujian online?', created_at: new Date(), updated_at: new Date() },
      { test_id: 10, question_text: '2. Manakah yang termasuk bentuk kecurangan dalam ujian online?', created_at: new Date(), updated_at: new Date() },
      { test_id: 10, question_text: '3. Apa konsekuensi utama dari kecurangan dalam ujian?', created_at: new Date(), updated_at: new Date() },
      { test_id: 10, question_text: '4. Mengapa kecurangan ujian dianggap pelanggaran serius?', created_at: new Date(), updated_at: new Date() },
      { test_id: 10, question_text: '5. Apa dampak jangka panjang dari kebiasaan menyontek?', created_at: new Date(), updated_at: new Date() },

      // mini test exam cheating
      { test_id: 11, question_text: '1. Dalam studi kasus "Ujian LMS", apa yang menyebabkan kecurangan terdeteksi?', created_at: new Date(), updated_at: new Date() },
      { test_id: 11, question_text: '2. Dari dialog video, apa konsekuensi yang dialami Pierce?', created_at: new Date(), updated_at: new Date() },
      { test_id: 11, question_text: '3. Apa bentuk penyalahgunaan teknologi dalam ujian online?', created_at: new Date(), updated_at: new Date() },
      { test_id: 11, question_text: '4. Bagaimana penggunaan AI yang tepat dalam pembelajaran?', created_at: new Date(), updated_at: new Date() },
      { test_id: 11, question_text: '5. Apa strategi ujian yang benar?', created_at: new Date(), updated_at: new Date() },

      // post test exam cheating
      { test_id: 12, question_text: '1. Bagaimana kecurangan ujian mempengaruhi perkembangan profesional?', created_at: new Date(), updated_at: new Date() },
      { test_id: 12, question_text: '2. Apa pentingnya integritas dalam ujian online?', created_at: new Date(), updated_at: new Date() },
      { test_id: 12, question_text: '3. Bagaimana cara terbaik menghadapi ujian online?', created_at: new Date(), updated_at: new Date() },
      { test_id: 12, question_text: '4. Apa kunci sukses jangka panjang dalam pembelajaran?', created_at: new Date(), updated_at: new Date() },
      { test_id: 12, question_text: '5. Bagaimana membangun kebiasaan belajar yang efektif?', created_at: new Date(), updated_at: new Date() },

      // pre test research fraud
      { test_id: 13, question_text: '1. Apa yang dimaksud dengan kecurangan penelitian (research fraud)?', created_at: new Date(), updated_at: new Date() },
      { test_id: 13, question_text: '2. Manakah yang termasuk bentuk research fraud?', created_at: new Date(), updated_at: new Date() },
      { test_id: 13, question_text: '3. Apa konsekuensi dari kecurangan penelitian?', created_at: new Date(), updated_at: new Date() },
      { test_id: 13, question_text: '4. Mengapa kecurangan penelitian dianggap serius?', created_at: new Date(), updated_at: new Date() },
      { test_id: 13, question_text: '5. Apa dampak jangka panjang dari kebiasaan manipulasi data?', created_at: new Date(), updated_at: new Date() },

      // mini test research fraud
      { test_id: 14, question_text: '1. Dalam studi kasus "Riset Pertumbuhan Jamur", apa kesalahan yang dilakukan Foxy dan Ruka?', created_at: new Date(), updated_at: new Date() },
      { test_id: 14, question_text: '2. Bagaimana penggunaan AI yang benar dalam penelitian?', created_at: new Date(), updated_at: new Date() },
      { test_id: 14, question_text: '3. Apa yang harus dilakukan ketika eksperimen gagal?', created_at: new Date(), updated_at: new Date() },
      { test_id: 14, question_text: '4. Apa ciri penelitian yang berintegritas?', created_at: new Date(), updated_at: new Date() },
      { test_id: 14, question_text: '5. Bagaimana menangani kendala dalam penelitian?', created_at: new Date(), updated_at: new Date() },

      // post test research fraud
      { test_id: 15, question_text: '1. Apa dampak research fraud terhadap perkembangan ilmiah?', created_at: new Date(), updated_at: new Date() },
      { test_id: 15, question_text: '2. Bagaimana membangun integritas dalam penelitian?', created_at: new Date(), updated_at: new Date() },
      { test_id: 15, question_text: '3. Apa peran teknologi yang tepat dalam penelitian?', created_at: new Date(), updated_at: new Date() },
      { test_id: 15, question_text: '4. Bagaimana menerapkan etika penelitian yang baik?', created_at: new Date(), updated_at: new Date() },
      { test_id: 15, question_text: '5. Apa kunci sukses dalam penelitian akademik?', created_at: new Date(), updated_at: new Date() },

      // pre test AI-based Cheating
      { test_id: 16, question_text: '1. Apa yang dimaksud dengan robot pintar (AI)?', created_at: new Date(), updated_at: new Date() },
      { test_id: 16, question_text: '2. Manakah yang merupakan penggunaan AI yang tidak benar?', created_at: new Date(), updated_at: new Date() },
      { test_id: 16, question_text: '3. Apa dampak negatif menggunakan AI secara tidak jujur?', created_at: new Date(), updated_at: new Date() },
      { test_id: 16, question_text: '4. Mengapa menggunakan AI untuk menyontek itu tidak baik?', created_at: new Date(), updated_at: new Date() },
      { test_id: 16, question_text: '5. Apa yang seharusnya kita lakukan saat menggunakan AI?', created_at: new Date(), updated_at: new Date() },

      // mini test AI-based Cheating
      { test_id: 17, question_text: '1. Dalam cerita, apa kesalahan yang dilakukan Ruka?', created_at: new Date(), updated_at: new Date() },
      { test_id: 17, question_text: '2. Mengapa Pierce sedih dan kecewa?', created_at: new Date(), updated_at: new Date() },
      { test_id: 17, question_text: '3. Apa yang terjadi dengan Ruka saat lomba sains?', created_at: new Date(), updated_at: new Date() },
      { test_id: 17, question_text: '4. Apa yang benar dari tindakan Pierce?', created_at: new Date(), updated_at: new Date() },
      { test_id: 17, question_text: '5. Apa pelajaran yang bisa diambil dari cerita tersebut?', created_at: new Date(), updated_at: new Date() },

      // post test AI-based Cheating
      { test_id: 18, question_text: '1. Bagaimana cara terbaik menggunakan AI dalam belajar?', created_at: new Date(), updated_at: new Date() },
      { test_id: 18, question_text: '2. Apa yang lebih penting dalam belajar?', created_at: new Date(), updated_at: new Date() },
      { test_id: 18, question_text: '3. Mengapa kita harus jujur dalam menggunakan AI?', created_at: new Date(), updated_at: new Date() },
      { test_id: 18, question_text: '4. Apa manfaat mengerjakan tugas sendiri?', created_at: new Date(), updated_at: new Date() },
      { test_id: 18, question_text: '5. Bagaimana sikap yang benar saat menghadapi kesulitan dalam pelajaran?', created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('questions', null, {});
  }
};
