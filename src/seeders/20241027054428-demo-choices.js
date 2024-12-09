module.exports = {
  up: async (queryInterface, Sequelize) => {
    const choices = [
      // pre test plagiarsm
      { question_id: 1, choice_text: 'A. Mengutip sumber dengan mencantumkan referensi lengkap', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 1, choice_text: 'B. Menggunakan ide orang lain dan mengakuinya sebagai karya sendiri tanpa izin', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 1, choice_text: 'C. Membuat karya baru berdasarkan inspirasi dari karya lain', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 1, choice_text: 'D. Berkolaborasi dalam pembuatan karya ilmiah', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 2, choice_text: 'A. Menggunakan data penelitian orang lain tanpa izin', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 2, choice_text: 'B. Mengutip kalimat dengan mencantumkan nama penulis dan tahun publikasi', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 2, choice_text: 'C. Menyalin tugas teman dan mengubah beberapa kata', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 2, choice_text: 'D. Menggunakan hasil terjemahan tanpa menyebutkan sumber asli', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 3, choice_text: 'A. Mendapat nilai tambahan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 3, choice_text: 'B. Dipuji oleh dosen pembimbing', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 3, choice_text: 'C. Nilai tugas atau ujian dibatalkan', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 3, choice_text: 'D. Mendapat penghargaan akademik', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 4, choice_text: 'A. Menggunakan ide orang lain tanpa mencantumkan sumber', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 4, choice_text: 'B. Mengubah beberapa kata dari teks asli', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 4, choice_text: 'C. Mencantumkan daftar pustaka dan kutipan yang sesuai', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 4, choice_text: 'D. Meminta teman untuk mengerjakan tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 5, choice_text: 'A. Mengutip karya orang lain', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 5, choice_text: 'B. Menggunakan kembali karya sendiri tanpa mencantumkan referensi', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 5, choice_text: 'C. Membuat karya original', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 5, choice_text: 'D. Melakukan parafrase dengan benar', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // mini test plagiarsm
      { question_id: 6, choice_text: 'A. Menggunakan Google Drive bersama', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 6, choice_text: 'B. Tidak bisa mengerjakan tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 6, choice_text: 'C. Menyalin kode Mosi tanpa izin', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 6, choice_text: 'D. Mengumpulkan tugas terlambat', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 7, choice_text: 'A. Ruka melihat Foxy menyalin', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 7, choice_text: 'B. Foxy mengaku sendiri', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 7, choice_text: 'C. Tidak mengerti karya yang dibuatnya', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 7, choice_text: 'D. Ada saksi mata', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 8, choice_text: 'A. Copy-paste langsung dari output AI', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 8, choice_text: 'B. Menggunakan AI tanpa pemahaman', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 8, choice_text: 'C. Gunakan AI sebagai learning tool dan pahami outputnya', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 8, choice_text: 'D. Menyembunyikan penggunaan AI', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 9, choice_text: 'A. Karir menjadi lebih cepat berkembang', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 9, choice_text: 'B. Ketidakmampuan menjelaskan kode sendiri dan hambatan karir', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 9, choice_text: 'C. Mendapat promosi lebih cepat', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 9, choice_text: 'D. Lebih dihargai dalam tim', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 10, choice_text: 'A. Menggunakan AI secara diam-diam', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 10, choice_text: 'B. Menyalin kode teman dengan modifikasi', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 10, choice_text: 'C. Menulis pseudocode sendiri dan memahami setiap baris kode', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 10, choice_text: 'D. Menghindari penggunaan Git', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // post test plagiarsm
      { question_id: 11, choice_text: 'A. Agar kode berjalan lebih cepat', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 11, choice_text: 'B. Untuk menghindari masalah legal dan membangun reputasi profesional', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 11, choice_text: 'C. Agar file program lebih kecil', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 11, choice_text: 'D. Untuk mendapatkan gaji lebih tinggi', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 12, choice_text: 'A. Langsung implementasi tanpa modifikasi', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 12, choice_text: 'B. Pahami kode, dokumentasikan, dan berikan atribusi', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 12, choice_text: 'C. Hapus semua komentar asli', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 12, choice_text: 'D. Ganti nama variabel saja', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 13, choice_text: 'A. Membuat file menjadi lebih besar', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 13, choice_text: 'B. Memperlambat eksekusi program', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 13, choice_text: 'C. Membantu pemahaman dan maintenance kode', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 13, choice_text: 'D. Membuat program terlihat kompleks', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 14, choice_text: 'A. Sembunyikan penggunaan AI dari tim', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 14, choice_text: 'B. Copy-paste seluruh output tanpa modifikasi', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 14, choice_text: 'C. Pahami output AI dan modifikasi sesuai kebutuhan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 14, choice_text: 'D. Gunakan AI untuk semua tugas tanpa belajar', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 15, choice_text: 'A. Peningkatan skill programming', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 15, choice_text: 'B. Ketergantungan pada kode orang lain dan lemahnya fundamental', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 15, choice_text: 'C. Program berjalan lebih efisien', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 15, choice_text: 'D. Lebih cepat dalam pengembangan software', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // pre test collusion
      { question_id: 16, choice_text: 'A. Bekerja dalam kelompok yang ditugaskan guru', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 16, choice_text: 'B. Kerja sama tidak sah dalam tugas individual', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 16, choice_text: 'C. Belajar bersama untuk ujian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 16, choice_text: 'D. Membuat kelompok belajar', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 17, choice_text: 'A. Berdiskusi di kelas saat guru mengizinkan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 17, choice_text: 'B. Mengerjakan tugas kelompok bersama', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 17, choice_text: 'C. Berbagi jawaban dalam grup chat untuk tugas individual', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 17, choice_text: 'D. Bertanya pada guru saat tidak mengerti', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 18, choice_text: 'A. Mendapat nilai tambahan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 18, choice_text: 'B. Dipuji oleh guru', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 18, choice_text: 'C. Pengurangan nilai dan sanksi akademik', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 18, choice_text: 'D. Diberi tugas tambahan', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 19, choice_text: 'A. Karena melibatkan penggunaan teknologi', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 19, choice_text: 'B. Karena menghambat proses pembelajaran individual', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 19, choice_text: 'C. Karena dilakukan dalam kelompok', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 19, choice_text: 'D. Karena menggunakan internet', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 20, choice_text: 'A. Tidak masuk sekolah', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 20, choice_text: 'B. Menolak semua kerja kelompok', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 20, choice_text: 'C. Mengerjakan tugas secara mandiri dan tepat waktu', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 20, choice_text: 'D. Tidak berteman dengan siapapun', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // mini test collusion
      { question_id: 21, choice_text: 'A. Menggunakan aplikasi chat', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 21, choice_text: 'B. Melakukan analisis tentang VR', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 21, choice_text: 'C. Berbagi jawaban untuk tugas individual', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 21, choice_text: 'D. Menggunakan referensi yang sama', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 22, choice_text: 'A. Karena terlambat mengumpulkan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 22, choice_text: 'B. Karena berbagi tugas yang seharusnya individual', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 22, choice_text: 'C. Karena tidak masuk kelas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 22, choice_text: 'D. Karena tidak memahami materi', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 23, choice_text: 'A. Meningkatkan kerja sama tim', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 23, choice_text: 'B. Lemahnya kemampuan problem-solving individual', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 23, choice_text: 'C. Mempercepat penyelesaian tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 23, choice_text: 'D. Meningkatkan efisiensi kerja', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 24, choice_text: 'A. Berbagi jawaban via cloud storage', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 24, choice_text: 'B. Membuat grup chat untuk berbagi jawaban', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 24, choice_text: 'C. Menggunakan untuk riset dan mencatat sumber', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 24, choice_text: 'D. Menyalin hasil pekerjaan teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 25, choice_text: 'A. Menghindari penggunaan teknologi', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 25, choice_text: 'B. Manajemen waktu dan dokumentasi proses kerja', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 25, choice_text: 'C. Tidak menggunakan internet', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 25, choice_text: 'D. Menghindari kerja kelompok', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // post test collusion
      { question_id: 26, choice_text: 'A. Meningkatkan nilai akademis', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 26, choice_text: 'B. Menghambat pengembangan kemampuan analitis', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 26, choice_text: 'C. Mempercepat pembelajaran', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 26, choice_text: 'D. Meningkatkan kerja sama', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 27, choice_text: 'A. Hanya untuk mendapat nilai bagus', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 27, choice_text: 'B. Membangun fondasi kemampuan dan kepercayaan', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 27, choice_text: 'C. Tidak penting untuk karir', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 27, choice_text: 'D. Hanya formalitas akademik', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 28, choice_text: 'A. Berbagi hasil AI dengan teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 28, choice_text: 'B. Menyalin langsung hasil AI', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 28, choice_text: 'C. Menggunakan AI sebagai referensi dengan atribusi', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 28, choice_text: 'D. Menghindari penggunaan AI', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 29, choice_text: 'A. Nilai tinggi dengan cara apapun', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 29, choice_text: 'B. Pengembangan kemampuan individual dan integritas', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 29, choice_text: 'C. Kolaborasi dalam semua tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 29, choice_text: 'D. Menghindari tugas sulit', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 30, choice_text: 'A. Mengumpulkan semua hasil kerja sama', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 30, choice_text: 'B. Mendokumentasikan proses kerja individual dan sumber referensi', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 30, choice_text: 'C. Menyalin portfolio teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 30, choice_text: 'D. Membuat portfolio bersama', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // pre test contract cheating
      { question_id: 31, choice_text: 'A. Menyontek saat ujian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 31, choice_text: 'B. Membayar atau memberi imbalan kepada orang lain untuk mengerjakan tugas', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 31, choice_text: 'C. Bekerja sama dalam kelompok', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 31, choice_text: 'D. Meminta bantuan guru', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 32, choice_text: 'A. Belajar bersama teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 32, choice_text: 'B. Mengikuti les privat', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 32, choice_text: 'C. Menyewa jasa pengerjaan tugas', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 32, choice_text: 'D. Bertanya pada guru', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 33, choice_text: 'A. Mendapat nilai sempurna', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 33, choice_text: 'B. Kehilangan kesempatan belajar dan sanksi akademik', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 33, choice_text: 'C. Menjadi populer di kelas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 33, choice_text: 'D. Menghemat waktu', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 34, choice_text: 'A. Karena melibatkan uang', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 34, choice_text: 'B. Karena melanggar etika dan menghambat pembelajaran', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 34, choice_text: 'C. Karena melibatkan orang lain', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 34, choice_text: 'D. Karena menggunakan internet', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 35, choice_text: 'A. Hanya pemberi tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 35, choice_text: 'B. Hanya pengerjaan tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 35, choice_text: 'C. Kedua belah pihak', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 35, choice_text: 'D. Tidak ada yang dirugikan', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // mini test contract cheating
      { question_id: 36, choice_text: 'A. Mereka belajar bersama', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 36, choice_text: 'B. Mosi membayar Ruka dengan permen untuk mengerjakan tugasnya', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 36, choice_text: 'C. Mereka mengerjakan tugas di sekolah', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 36, choice_text: 'D. Mereka terlambat mengumpulkan tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 37, choice_text: 'A. Ada yang melaporkan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 37, choice_text: 'B. Karena menggunakan komputer', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 37, choice_text: 'C. Karena pola penulisan dan gaya bahasa yang mirip', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 37, choice_text: 'D. Karena terlambat mengumpulkan', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 38, choice_text: 'A. Meningkatkan kemampuan akademik', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 38, choice_text: 'B. Ketergantungan dan lemahnya kemampuan pribadi', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 38, choice_text: 'C. Mempercepat kelulusan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 38, choice_text: 'D. Menghemat waktu belajar', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 39, choice_text: 'A. Menggunakan AI untuk mengerjakan seluruh tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 39, choice_text: 'B. Menggunakan AI untuk brainstorming dan bantuan pembelajaran', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 39, choice_text: 'C. Menyembunyikan penggunaan AI', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 39, choice_text: 'D. Membayar orang untuk mengoperasikan AI', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 40, choice_text: 'A. Tidak mengerjakan tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 40, choice_text: 'B. Manajemen waktu efektif dan mulai tugas lebih awal', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 40, choice_text: 'C. Selalu bekerja dalam kelompok', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 40, choice_text: 'D. Menunggu deadline', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // post test contract cheating
      { question_id: 41, choice_text: 'A. Meningkatkan peluang karir', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 41, choice_text: 'B. Merusak kredibilitas dan menghambat pengembangan skill', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 41, choice_text: 'C. Tidak ada dampak', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 41, choice_text: 'D. Mempercepat promosi', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 42, choice_text: 'A. Menggunakan jasa ghostwriter', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 42, choice_text: 'B. Mengembangkan kemampuan sendiri dan dokumentasi proses', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 42, choice_text: 'C. Menyalin portfolio orang lain', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 42, choice_text: 'D. Membeli portfolio', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 43, choice_text: 'A. Untuk mencari jasa pengerjaan tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 43, choice_text: 'B. Sebagai alat bantu pembelajaran dan pengembangan skill', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 43, choice_text: 'C. Untuk menyembunyikan kecurangan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 43, choice_text: 'D. Untuk menggantikan proses belajar', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 44, choice_text: 'A. Fokus pada nilai tinggi dengan cara apapun', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 44, choice_text: 'B. Mengembangkan kemampuan dan etika profesional', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 44, choice_text: 'C. Menghindari tugas sulit', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 44, choice_text: 'D. Bergantung pada bantuan orang lain', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 45, choice_text: 'A. Mencari jalan pintas untuk tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 45, choice_text: 'B. Membangun kemampuan real dan portofolio autentik', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 45, choice_text: 'C. Mengandalkan orang lain', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 45, choice_text: 'D. Mengabaikan integritas akademik', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // pre test exam cheating
      { question_id: 46, choice_text: 'A. Belajar menggunakan internet sebelum ujian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 46, choice_text: 'B. Menggunakan sumber atau alat bantu yang tidak diizinkan saat ujian', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 46, choice_text: 'C. Mengerjakan ujian dengan komputer', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 46, choice_text: 'D. Bertanya pada guru saat ujian', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 47, choice_text: 'A. Menggunakan kalkulator saat diizinkan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 47, choice_text: 'B. Membaca materi sebelum ujian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 47, choice_text: 'C. Mengakses search engine saat ujian tertutup', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 47, choice_text: 'D. Menggunakan komputer yang disediakan sekolah', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 48, choice_text: 'A. Mendapat nilai tambahan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 48, choice_text: 'B. Diskualifikasi dan sanksi akademik', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 48, choice_text: 'C. Diberi kesempatan mengulang', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 48, choice_text: 'D. Mendapat pujian', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 49, choice_text: 'A. Karena menggunakan teknologi', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 49, choice_text: 'B. Karena dilakukan sendirian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 49, choice_text: 'C. Karena merusak integritas dan proses pembelajaran', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 49, choice_text: 'D. Karena melibatkan internet', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 50, choice_text: 'A. Meningkatkan nilai akademik', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 50, choice_text: 'B. Lemahnya pemahaman materi dan ketergantungan', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 50, choice_text: 'C. Mempercepat kelulusan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 50, choice_text: 'D. Meningkatkan kepercayaan diri', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // mini test exam cheating
      { question_id: 51, choice_text: 'A. Laporan teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 51, choice_text: 'B. Terekam CCTV saat menggunakan search engine', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 51, choice_text: 'C. Nilai terlalu tinggi', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 51, choice_text: 'D. Terlambat mengumpulkan', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 52, choice_text: 'A. Langsung dikeluarkan dari sekolah', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 52, choice_text: 'B. Kesulitan memahami materi selanjutnya', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 52, choice_text: 'C. Mendapat nilai tambahan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 52, choice_text: 'D. Dipuji guru', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 53, choice_text: 'A. Menggunakan komputer untuk mengetik', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 53, choice_text: 'B. Menggunakan browser tab switching dan AI saat ujian', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 53, choice_text: 'C. Menggunakan internet sebelum ujian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 53, choice_text: 'D. Menggunakan kalkulator yang diizinkan', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 54, choice_text: 'A. Menggunakannya saat ujian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 54, choice_text: 'B. Menggunakannya untuk persiapan dan pemahaman konsep', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 54, choice_text: 'C. Berbagi hasil AI dengan teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 54, choice_text: 'D. Mengandalkan AI sepenuhnya', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 55, choice_text: 'A. Menyiapkan contekan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 55, choice_text: 'B. Belajar teratur dan memahami konsep dasar', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 55, choice_text: 'C. Mengandalkan teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 55, choice_text: 'D. Mencari jawaban di internet', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // post test exam cheating
      { question_id: 56, choice_text: 'A. Meningkatkan karir', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 56, choice_text: 'B. Membentuk kebiasaan buruk dan lemahnya kompetensi', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 56, choice_text: 'C. Tidak ada pengaruh', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 56, choice_text: 'D. Mempercepat promosi', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 57, choice_text: 'A. Hanya untuk mendapat nilai bagus', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 57, choice_text: 'B. Membangun karakter dan kompetensi nyata', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 57, choice_text: 'C. Tidak penting dalam era digital', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 57, choice_text: 'D. Hanya formalitas akademik', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 58, choice_text: 'A. Menyiapkan berbagai alat bantu', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 58, choice_text: 'B. Persiapan matang dan mengandalkan kemampuan sendiri', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 58, choice_text: 'C. Mengandalkan internet', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 58, choice_text: 'D. Bekerja sama dengan teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 59, choice_text: 'A. Mendapat nilai tinggi dengan cara apapun', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 59, choice_text: 'B. Membangun pemahaman dan integritas akademik', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 59, choice_text: 'C. Menghindari ujian sulit', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 59, choice_text: 'D. Menggunakan teknologi untuk menyontek', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 60, choice_text: 'A. Menunggu hingga mendekati ujian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 60, choice_text: 'B. Belajar teratur dan menggunakan teknik active recall', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 60, choice_text: 'C. Mengandalkan contekan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 60, choice_text: 'D. Bergantung pada orang lain', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // pre test research fraud
      { question_id: 61, choice_text: 'A. Melakukan penelitian dengan tim', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 61, choice_text: 'B. Manipulasi atau pemalsuan data penelitian', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 61, choice_text: 'C. Menggunakan alat penelitian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 61, choice_text: 'D. Mencatat hasil penelitian', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 62, choice_text: 'A. Mengumpulkan data secara sistematis', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 62, choice_text: 'B. Mencatat semua hasil pengamatan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 62, choice_text: 'C. Menciptakan data palsu yang tidak pernah ada', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 62, choice_text: 'D. Melakukan eksperimen berulang', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 63, choice_text: 'A. Mendapat penghargaan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 63, choice_text: 'B. Hasil penelitian tidak valid dan sanksi akademik', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 63, choice_text: 'C. Dipuji oleh pembimbing', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 63, choice_text: 'D. Penelitian lebih cepat selesai', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 64, choice_text: 'A. Karena menggunakan teknologi', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 64, choice_text: 'B. Karena melibatkan banyak orang', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 64, choice_text: 'C. Karena merusak integritas ilmiah dan kepercayaan', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 64, choice_text: 'D. Karena menggunakan laboratorium', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 65, choice_text: 'A. Meningkatkan kemampuan penelitian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 65, choice_text: 'B. Lemahnya kemampuan scientific thinking dan kredibilitas', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 65, choice_text: 'C. Mempercepat penyelesaian penelitian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 65, choice_text: 'D. Menghemat waktu penelitian', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // mini test research fraud
      { question_id: 66, choice_text: 'A. Melakukan eksperimen dengan benar', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 66, choice_text: 'B. Memanipulasi data karena eksperimen gagal', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 66, choice_text: 'C. Mencatat hasil dengan teliti', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 66, choice_text: 'D. Konsultasi dengan guru', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 67, choice_text: 'A. Menggunakan AI untuk membuat data palsu', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 67, choice_text: 'B. Menggunakan AI untuk analisis data valid dan literature review', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 67, choice_text: 'C. Menggunakan AI untuk menggantikan penelitian', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 67, choice_text: 'D. Menyembunyikan penggunaan AI', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 68, choice_text: 'A. Manipulasi data agar terlihat berhasil', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 68, choice_text: 'B. Dokumentasikan masalah dan konsultasi dengan pembimbing', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 68, choice_text: 'C. Menghilangkan data yang tidak diinginkan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 68, choice_text: 'D. Membuat data baru', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 69, choice_text: 'A. Hasil selalu sempurna', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 69, choice_text: 'B. Dokumentasi lengkap dan jujur meski ada kegagalan', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 69, choice_text: 'C. Data selalu sesuai hipotesis', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 69, choice_text: 'D. Tidak ada kendala', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 70, choice_text: 'A. Memanipulasi data', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 70, choice_text: 'B. Revisi metodologi dan konsultasi dengan pembimbing', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 70, choice_text: 'C. Menghilangkan data yang tidak sesuai', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 70, choice_text: 'D. Mencontek hasil kelompok lain', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // post test research fraud
      { question_id: 71, choice_text: 'A. Mempercepat penemuan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 71, choice_text: 'B. Menghambat kemajuan ilmu pengetahuan dan merusak kepercayaan', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 71, choice_text: 'C. Tidak ada dampak', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 71, choice_text: 'D. Menghemat biaya penelitian', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 72, choice_text: 'A. Focus pada hasil sempurna', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 72, choice_text: 'B. Dokumentasi jujur dan pembelajaran dari kegagalan', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 72, choice_text: 'C. Memanipulasi data yang tidak sesuai', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 72, choice_text: 'D. Menghindari eksperimen sulit', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 73, choice_text: 'A. Untuk memanipulasi data', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 73, choice_text: 'B. Sebagai alat bantu analisis dan dokumentasi yang valid', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 73, choice_text: 'C. Untuk membuat data palsu', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 73, choice_text: 'D. Untuk menghindari proses penelitian', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 74, choice_text: 'A. Mengutamakan hasil sempurna', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 74, choice_text: 'B. Jujur dalam proses dan pelaporan hasil', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 74, choice_text: 'C. Menghindari kegagalan', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 74, choice_text: 'D. Mengikuti hasil kelompok lain', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 75, choice_text: 'A. Hasil selalu sempurna', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 75, choice_text: 'B. Integritas proses dan pembelajaran dari pengalaman', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 75, choice_text: 'C. Manipulasi data yang baik', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 75, choice_text: 'D. Menghindari kendala', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // pre test AI-based Cheating
      { question_id: 76, choice_text: 'A. Mainan robot yang bisa bergerak', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 76, choice_text: 'B. Teknologi yang membantu mengerjakan tugas dan menjawab pertanyaan', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 76, choice_text: 'C. Komputer biasa', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 76, choice_text: 'D. Mesin kalkulator', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 77, choice_text: 'A. Bertanya pada guru sebelum menggunakan AI', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 77, choice_text: 'B. Menggunakan AI untuk memahami pelajaran', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 77, choice_text: 'C. Menyalin langsung jawaban dari AI tanpa belajar', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 77, choice_text: 'D. Berlatih mengerjakan soal sendiri', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 78, choice_text: 'A. Menjadi lebih pintar', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 78, choice_text: 'B. Mendapat pujian guru', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 78, choice_text: 'C. Tidak memahami pelajaran dengan baik', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 78, choice_text: 'D. Menang lomba', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 79, choice_text: 'A. Karena AI selalu salah', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 79, choice_text: 'B. Karena membuat kita malas belajar dan tidak paham', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 79, choice_text: 'C. Karena AI terlalu mahal', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 79, choice_text: 'D. Karena dilarang menggunakan komputer', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 80, choice_text: 'A. Menyembunyikannya dari guru', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 80, choice_text: 'B. Menggunakannya untuk semua tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 80, choice_text: 'C. Memberitahu guru dan menggunakannya untuk belajar', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 80, choice_text: 'D. Berbagi jawaban dengan teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // mini test AI-based Cheating
      { question_id: 81, choice_text: 'A. Belajar terlalu rajin', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 81, choice_text: 'B. Menggunakan robot pintar untuk mengerjakan tugas tanpa belajar', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 81, choice_text: 'C. Membantu Pierce', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 81, choice_text: 'D. Tidak ikut lomba', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 82, choice_text: 'A. Karena nilainya bagus', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 82, choice_text: 'B. Karena Ruka curang menggunakan AI dan mendapat nilai lebih baik', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 82, choice_text: 'C. Karena tidak suka sains', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 82, choice_text: 'D. Karena gurunya galak', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 83, choice_text: 'A. Menjadi juara', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 83, choice_text: 'B. Tidak bisa menang karena tidak paham materi', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 83, choice_text: 'C. Tidak ikut lomba', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 83, choice_text: 'D. Mendapat hadiah', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 84, choice_text: 'A. Menyontek dari Ruka', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 84, choice_text: 'B. Menggunakan AI', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 84, choice_text: 'C. Mengerjakan dengan jujur meski nilainya lebih rendah', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 84, choice_text: 'D. Tidak mengerjakan tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 85, choice_text: 'A. Gunakan AI untuk semua tugas', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 85, choice_text: 'B. Nilai tinggi lebih penting dari pemahaman', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 85, choice_text: 'C. Lebih baik nilai biasa tapi paham daripada nilai bagus tapi tidak mengerti', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 85, choice_text: 'D. Jangan ikut lomba sains', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      // post test AI-based Cheating
      { question_id: 86, choice_text: 'A. Menyalin semua jawaban', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 86, choice_text: 'B. Menggunakannya untuk memahami dan belajar dengan izin guru', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 86, choice_text: 'C. Berbohong pada guru', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 86, choice_text: 'D. Memberikan jawaban pada teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 87, choice_text: 'A. Nilai tinggi dengan cara apapun', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 87, choice_text: 'B. Pemahaman materi dan kejujuran', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 87, choice_text: 'C. Juara lomba', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 87, choice_text: 'D. Pujian guru', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 88, choice_text: 'A. Agar tidak ketahuan guru', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 88, choice_text: 'B. Agar bisa menang lomba', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 88, choice_text: 'C. Agar benar-benar belajar dan mengerti', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 88, choice_text: 'D. Agar dapat nilai tinggi', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 89, choice_text: 'A. Selalu dapat nilai sempurna', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 89, choice_text: 'B. Benar-benar memahami pelajaran', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 89, choice_text: 'C. Disukai teman-teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 89, choice_text: 'D. Tidak perlu belajar', is_correct: false, created_at: new Date(), updated_at: new Date(), },

      { question_id: 90, choice_text: 'A. Langsung menyalin dari AI', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 90, choice_text: 'B. Bertanya pada guru dan berusaha memahami', is_correct: false, created_at: new Date(), updated_at: new Date(), },
      { question_id: 90, choice_text: 'C. Menyerah tidak mengerjakan', is_correct: true, created_at: new Date(), updated_at: new Date(), },
      { question_id: 90, choice_text: 'D. Mencontek teman', is_correct: false, created_at: new Date(), updated_at: new Date(), },
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
