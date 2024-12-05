'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('module_content_junior', [
      {
        module_id: 10,
        content_type: 'text',
        content_url: null,
        content_text: `<h1>Memahami Kecurangan Akademik: Contract Cheating</h1><h2>Apa itu Contract Cheating?</h2><p>Contract cheating adalah ketika seseorang meminta orang lain mengerjakan tugasnya dengan memberikan imbalan tertentu. Ini seperti "membeli jawaban" atau "menyewa orang" untuk mengerjakan tugas kita. Ini adalah bentuk kecurangan yang serius dalam pendidikan.</p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/j6AO8EcVTus?showinfo=0"></iframe><p><br></p><h2>Studi Kasus: "Tugas Mewarnai"</h2><p>Mari kita lihat contoh dari video:</p><h3>Karakter dalam Video:</h3><ul><li>Mosi: Siswa yang meminta orang lain mengerjakan tugasnya</li><li>Ruka: Siswa yang menerima tawaran mengerjakan tugas Mosi</li><li>Guru: Yang memberikan tugas dan mengetahui kecurangan</li></ul><h3>Apa yang Terjadi?</h3><ol><li>Guru memberikan tugas mewarnai pemandangan</li><li>Mosi tidak mau mengerjakan sendiri</li><li>Mosi menawarkan permen ke Ruka untuk mengerjakan tugasnya</li><li>Ruka setuju dan mengerjakan tugas Mosi</li><li>Akibatnya:</li></ol><ul><li class="ql-indent-1">Guru mencurigai karena hasil mirip</li><li class="ql-indent-1">Ruka mengaku</li><li class="ql-indent-1">Keduanya mendapat hukuman</li></ul><h2>Mengapa Contract Cheating itu Salah?</h2><h3>Bagi yang Meminta:</h3><ol><li>Tidak belajar apa-apa</li><li>Kehilangan kesempatan mengembangkan kemampuan</li><li>Bergantung pada orang lain</li><li>Bisa mendapat hukuman</li><li>Membangun kebiasaan buruk</li></ol><h3>Bagi yang Mengerjakan:</h3><ol><li>Ikut melakukan kecurangan</li><li>Membantu orang lain berbuat curang</li><li>Bisa mendapat hukuman</li><li>Menghabiskan waktu untuk hal yang salah</li><li>Merusak integritas akademik</li></ol><h2>Cara Menghindari Contract Cheating</h2><h3>Untuk Siswa yang Kesulitan:</h3><ol><li>Akui keterbatasan dan minta bantuan guru</li><li>Belajar manajemen waktu yang baik</li><li>Mulai dari yang mudah dulu</li><li>Percaya pada kemampuan sendiri</li><li>Ingat bahwa proses lebih penting dari hasil</li></ol><h3>Untuk Siswa yang Diminta Membantu:</h3><ol><li>Berani menolak dengan sopan</li><li>Tawarkan untuk belajar bersama sebagai gantinya</li><li>Laporkan ke guru jika terus dipaksa</li><li>Ingat bahwa membantu curang juga salah</li><li>Jadilah teman yang mendukung pembelajaran positif</li></ol><h2>Contract Cheating di Era Digital dan AI</h2><h3>Bentuk Modern:</h3><ol><li>Membayar orang online untuk mengerjakan tugas</li><li>Menyewa jasa pengerjaan tugas</li><li>Menggunakan AI tanpa pengakuan</li><li>Membeli jawaban online</li></ol><h3>Penggunaan AI yang Benar:</h3><ol><li>Gunakan AI sebagai alat bantu pembelajaran</li><li>Selalu cantumkan sumber jika menggunakan AI</li><li>Pahami dan modifikasi hasil AI dengan pemahaman sendiri</li><li>Diskusikan penggunaan AI dengan guru</li></ol><h2>Rekomendasi untuk Pembelajaran Jujur</h2><h3>Tips Praktis:</h3><ol><li>Buat jadwal belajar teratur</li><li>Pecah tugas besar menjadi bagian kecil</li><li>Minta bantuan guru jika kesulitan</li><li>Bentuk kelompok belajar yang sehat</li><li>Kembangkan minat pada mata pelajaran</li></ol><h3>Penggunaan Teknologi yang Tepat:</h3><ol><li>Manfaatkan sumber belajar online</li><li>Gunakan aplikasi manajemen waktu</li><li>Ikuti tutorial pembelajaran</li><li>Catat sumber referensi</li><li>Gunakan AI dengan bijak dan jujur</li></ol><h2>Kesimpulan</h2><ul><li>Contract cheating merugikan semua pihak</li><li>Kejujuran lebih berharga dari nilai tinggi</li><li>Proses belajar lebih penting dari hasil akhir</li><li>Bantuan boleh diminta, tapi kerjakan sendiri</li><li>Teknologi adalah alat bantu, bukan pengganti usaha sendiri</li></ul><h2>Pesan Akhir</h2><p>"Lebih baik mendapat nilai biasa dengan usaha sendiri daripada nilai sempurna hasil membeli jawaban. Yang pertama mengajarkan kita berkembang, yang kedua mengajarkan kita bergantung."</p>`,
        created_at: new Date(),
      },
      {
        module_id: 14,
        content_type: 'text',
        content_url: null,
        content_text: `<h1>Memahami Kecurangan dalam Ujian</h1><h2>Apa itu Kecurangan dalam Ujian?</h2><p>Kecurangan dalam ujian adalah tindakan tidak jujur saat mengerjakan ujian, seperti membawa contekan, melihat jawaban teman, atau menggunakan alat bantu yang tidak diizinkan. Ini sama seperti berbohong pada diri sendiri dan orang lain.</p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/hs5VOn1OkJ0?showinfo=0"></iframe><p><br></p><h2>Studi Kasus: "Contekan Pierce"</h2><p>Mari kita lihat contoh dari video:</p><h3>Karakter dalam Video:</h3><ul><li>Pierce: Siswa yang melakukan kecurangan</li><li>Guru: Yang akhirnya mengetahui kecurangan Pierce</li></ul><h3>Kronologi Kejadian:</h3><ol><li>Pierce membawa contekan kertas kecil saat ujian</li><li>Dua ujian pertama berhasil mendapat nilai bagus dengan mencontek</li><li>Pada ujian ketiga, Pierce ketahuan dan dihukum</li><li>Akibat tidak memahami materi awal:</li></ol><ul><li class="ql-indent-1">Pierce kesulitan memahami materi lanjutan</li><li class="ql-indent-1">Hampir tidak lulus karena materi saling berkaitan</li><li class="ql-indent-1">Tidak dapat mengikuti pembelajaran dengan baik</li></ul><h2>Mengapa Mencontek itu Merugikan?</h2><h3>Dampak Jangka Pendek:</h3><ol><li>Risiko ketahuan dan dihukum</li><li>Nilai tidak mencerminkan kemampuan sebenarnya</li><li>Rasa bersalah dan cemas</li></ol><h3>Dampak Jangka Panjang:</h3><ol><li>Tidak memahami materi dasar</li><li>Kesulitan memahami materi lanjutan</li><li>Membentuk kebiasaan buruk</li><li>Kehilangan kepercayaan guru dan teman</li><li>Bisa mempengaruhi masa depan akademik</li></ol><h2>Cara Menghindari Kecurangan dalam Ujian</h2><h3>Persiapan Sebelum Ujian:</h3><ol><li>Buat jadwal belajar teratur</li><li>Pahami materi secara bertahap</li><li>Buat catatan ringkas</li><li>Latih soal-soal sejenis</li><li>Tidur cukup sebelum ujian</li></ol><h3>Saat Ujian:</h3><ol><li>Baca soal dengan teliti</li><li>Kerjakan yang mudah dulu</li><li>Manfaatkan waktu dengan baik</li><li>Percaya pada kemampuan sendiri</li><li>Tenang dan fokus</li></ol><h2>Kecurangan di Era Digital dan AI</h2><h3>Bentuk Kecurangan Modern:</h3><ol><li>Menggunakan smartphone saat ujian</li><li>Memakai earpiece wireless</li><li>Memanfaatkan AI untuk jawaban instan</li><li>Sharing jawaban via aplikasi chat</li></ol><h3>Penggunaan AI yang Benar:</h3><ol><li>Gunakan AI untuk:</li></ol><ul><li class="ql-indent-1">Memahami konsep saat belajar</li><li class="ql-indent-1">Latihan soal</li><li class="ql-indent-1">Penjelasan materi yang sulit</li></ul><ol><li>Jangan gunakan AI untuk:</li></ol><ul><li class="ql-indent-1">Menjawab soal ujian</li><li class="ql-indent-1">Menggantikan proses belajar</li><li class="ql-indent-1">Mencari jalan pintas</li></ul><h2>Rekomendasi untuk Ujian yang Jujur</h2><h3>Tips Belajar Efektif:</h3><ol><li>Buat kelompok belajar</li><li>Tanyakan yang tidak dipahami</li><li>Praktikkan soal secara rutin</li><li>Buat mind mapping materi</li><li>Gunakan metode belajar yang sesuai</li></ol><h3>Persiapan Mental:</h3><ol><li>Bangun kepercayaan diri</li><li>Kelola kecemasan</li><li>Tetap tenang saat ujian</li><li>Ingat tujuan belajar</li><li>Jaga kesehatan</li></ol><h2>Kesimpulan</h2><ul><li>Kecurangan dalam ujian hanya memberikan keberhasilan sementara</li><li>Pemahaman materi lebih penting dari nilai tinggi</li><li>Kejujuran adalah investasi untuk masa depan</li><li>Teknologi harus digunakan dengan bijak</li><li>Proses belajar lebih berharga dari hasil instan</li></ul><h2>Pesan Penting</h2><p>"Lebih baik mendapat nilai sesuai kemampuan daripada nilai tinggi hasil mencontek. Karena pengetahuan yang kita dapat dari belajar akan bertahan seumur hidup, sementara contekan hanya bertahan selama ujian."</p><h2>Tips Tambahan</h2><ol><li>Buat target belajar realistis</li><li>Pahami gaya belajar sendiri</li><li>Jaga motivasi belajar</li><li>Komunikasikan kesulitan dengan guru</li><li>Ingat bahwa setiap orang punya kecepatan belajar berbeda</li></ol><p><br></p>`,
        created_at: new Date(),
      },
      {
        module_id: 2,
        content_type: 'text',
        content_url: null,
        content_text: `<h1>Memahami Plagiarisme</h1><h2>Apa itu Plagiarisme?</h2><p>Plagiarisme adalah menggunakan atau mengambil karya orang lain dan mengakuinya sebagai karya sendiri. Ini seperti "meminjam" PR teman tanpa izin dan menulis nama kita sendiri di atasnya. Plagiarisme bukan hanya tentang menyalin tulisan, tapi juga bisa berupa:</p><ul><li>Gambar atau foto</li><li>Musik atau lagu</li><li>Puisi atau cerita</li><li>Ide atau gagasan</li></ul><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/BI0hp4bd4CY?showinfo=0"></iframe><h2>Studi Kasus: "Puisi yang Sama"</h2><p>Mari kita lihat contoh kasus plagiarisme di sekolah:</p><p>Dalam video yang kita tonton, ada dua siswa:</p><ul><li>Ruka: Siswa yang rajin dan mengerjakan tugas tepat waktu</li><li>Foxy: Siswa yang kesulitan membuat puisi</li></ul><h2>Apa yang Terjadi?</h2><ol><li>Guru memberikan tugas individu membuat puisi</li><li>Ruka sudah menyelesaikan tugasnya dan menyimpan di laci</li><li>Foxy melihat kesempatan dan diam-diam menyalin puisi Ruka</li><li>Guru menemukan dua puisi yang sama</li><li>Akibatnya:</li><li class="ql-indent-1">Foxy ketahuan berbuat curang</li><li class="ql-indent-1">Ruka merasa sedih dan kehilangan kepercayaan</li><li class="ql-indent-1">Keduanya harus menghadap guru</li></ol><h2>Mengapa Plagiarisme itu Salah?</h2><ol><li>Tidak jujur dan curang</li><li>Merugikan orang yang karyanya diambil</li><li>Kita tidak belajar dan berkembang</li><li>Bisa mendapat hukuman</li><li>Merusak kepercayaan orang lain</li></ol><h2>Cara Menghindari Plagiarisme</h2><ol><li>Mulai mengerjakan tugas lebih awal</li><li>Percaya pada kemampuan sendiri</li><li>Minta bantuan guru jika kesulitan</li><li>Belajar dan berlatih dengan tekun</li><li>Selalu mencantumkan sumber jika menggunakan karya orang lain</li></ol><h2>Plagiarisme di Era Digital dan AI</h2><p>Sekarang ada banyak alat AI seperti ChatGPT yang bisa membantu membuat konten. Tapi ingat:</p><ul><li>Jangan menggunakan hasil AI tanpa mencantumkan sumber</li><li>Lebih baik gunakan AI sebagai alat bantu belajar</li><li>Tetap tulis dengan kata-kata sendiri</li><li>Jika mengutip, selalu sebutkan sumbernya</li></ul><h2>Tips Menggunakan AI dengan Benar</h2><ol><li>Gunakan AI untuk memahami konsep</li><li>Jadikan sebagai inspirasi, bukan untuk disalin</li><li>Selalu cantumkan "Dibantu oleh [nama AI]" jika menggunakan</li><li>Tanyakan pada guru apakah boleh menggunakan AI</li><li>Tetap utamakan hasil pemikiran sendiri</li></ol><h2>Kesimpulan</h2><p>Plagiarisme merugikan semua pihak. Mari jadi pelajar yang jujur dan kreatif! Lebih baik mendapat nilai biasa dengan hasil sendiri daripada nilai bagus hasil menyontek.</p>`,
        created_at: new Date(),
      },
      {
        module_id: 6,
        content_type: 'text',
        content_url: null,
        content_text: `<h1>Memahami Kolusi dalam Pembelajaran</h1><h2>Apa itu Kolusi?</h2><p>Kolusi dalam pembelajaran adalah ketika dua atau lebih siswa bekerja sama untuk mengerjakan tugas yang seharusnya dikerjakan secara individual. Ini seperti "berbagi tugas" padahal setiap orang seharusnya mengerjakan bagiannya sendiri-sendiri.</p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/RDBI2AYyd-A?showinfo=0"></iframe><p><br></p><h2>Studi Kasus: "Tugas Akhir Semester"</h2><p>Mari kita lihat contoh kasus kolusi dari video:</p><h3>Karakter dalam Video:</h3><ul><li>Foxy: Siswa yang mengerjakan tugas Bahasa Indonesia</li><li>Mosi: Siswa yang berkolusi dengan Foxy</li><li>Pierce: Siswa yang melaporkan kejadian</li><li>Guru: Yang memberikan konsekuensi atas tindakan mereka</li></ul><h3>Kronologi Kejadian:</h3><ol><li>Guru memberikan tugas individual Bahasa Indonesia</li><li>Foxy dan Mosi membuat kesepakatan:</li></ol><ul><li class="ql-indent-1">Foxy mengerjakan tugas Bahasa Indonesia untuk keduanya</li><li class="ql-indent-1">Mosi mengerjakan mata pelajaran lain</li></ul><ol><li>Foxy membuat dua versi tugas yang berbeda</li><li>Pierce mengetahui dan melaporkan ke guru</li><li>Akibatnya:</li></ol><ul><li class="ql-indent-1">Foxy dan Mosi dipanggil guru</li><li class="ql-indent-1">Mereka mengakui perbuatannya</li><li class="ql-indent-1">Nilai mereka dikurangi setengah</li></ul><h2>Mengapa Kolusi itu Salah?</h2><ol><li>Melanggar prinsip kejujuran akademik</li><li>Menghambat proses pembelajaran individual</li><li>Tidak adil bagi siswa lain yang mengerjakan sendiri</li><li>Kehilangan kesempatan belajar</li><li>Berisiko mendapat sanksi akademik</li></ol><h2>Cara Menghindari Kolusi</h2><ol><li>Manajemen Waktu yang Baik:</li></ol><ul><li class="ql-indent-1">Buat jadwal belajar</li><li class="ql-indent-1">Kerjakan tugas secara bertahap</li><li class="ql-indent-1">Hindari menunda-nunda</li></ul><ol><li>Komunikasi dengan Guru:</li></ol><ul><li class="ql-indent-1">Sampaikan kesulitan yang dihadapi</li><li class="ql-indent-1">Minta penjelasan tambahan jika tidak paham</li><li class="ql-indent-1">Diskusikan opsi alternatif jika kesulitan</li></ul><ol><li>Belajar Kelompok yang Benar:</li></ol><ul><li class="ql-indent-1">Diskusikan untuk memahami materi</li><li class="ql-indent-1">Tetap kerjakan tugas individual sendiri</li><li class="ql-indent-1">Saling membantu dalam pemahaman, bukan pengerjaan</li></ul><h2>Kolusi di Era Digital dan AI</h2><h3>Bentuk Kolusi Modern:</h3><ol><li>Berbagi jawaban melalui grup chat</li><li>Menggunakan AI bersama untuk tugas individual</li><li>Membagi akses ke jawaban online</li></ol><h3>Penggunaan AI yang Tepat:</h3><ol><li>Gunakan AI sebagai alat bantu belajar:</li></ol><ul><li class="ql-indent-1">Untuk memahami konsep</li><li class="ql-indent-1">Mencari penjelasan tambahan</li><li class="ql-indent-1">Melatih kemampuan</li></ul><ol><li>Hindari:</li></ol><ul><li class="ql-indent-1">Menyalin langsung hasil AI</li><li class="ql-indent-1">Berbagi hasil AI untuk tugas individual</li><li class="ql-indent-1">Menggunakan AI tanpa mencantumkan sumber</li></ul><h2>Rekomendasi untuk Pembelajaran yang Jujur</h2><h3>Untuk Siswa:</h3><ol><li>Percaya pada kemampuan sendiri</li><li>Mulai mengerjakan tugas lebih awal</li><li>Buat catatan pembelajaran pribadi</li><li>Tanyakan pada guru jika kesulitan</li><li>Gunakan sumber daya dengan bijak</li></ol><h3>Untuk Pembelajaran dengan AI:</h3><ol><li>Pahami batasan penggunaan AI</li><li>Selalu cantumkan sumber</li><li>Gunakan sebagai alat bantu, bukan pengganti</li><li>Diskusikan penggunaan AI dengan guru</li></ol><h2>Kesimpulan</h2><ul><li>Kolusi mungkin terlihat sebagai solusi mudah, tapi dampaknya merugikan</li><li>Kejujuran akademik adalah kunci kesuksesan jangka panjang</li><li>Manfaatkan teknologi dengan bijak dan bertanggung jawab</li><li>Ingat: "Lebih baik nilai rendah hasil kerja sendiri daripada nilai tinggi hasil kerja sama yang curang"</li></ul><h2>Tips Tambahan</h2><ol><li>Buat grup belajar yang sehat</li><li>Saling mendukung dalam pemahaman</li><li>Bangun kepercayaan diri akademik</li><li>Jadikan kesulitan sebagai kesempatan belajar</li><li>Tetap jujur dalam situasi apapun</li></ol><p><br></p>`,
        created_at: new Date(),
      },
      {
        module_id: 18,
        content_type: 'text',
        content_url: null,
        content_text: `<h1>Memahami Kecurangan Riset</h1><h2>Apa itu Kecurangan Riset?</h2><p>Kecurangan riset adalah ketika seseorang memanipulasi atau memalsukan data penelitian/pengamatan. Ini seperti "berbohong tentang hasil" atau "mengarang data" yang seharusnya didapat dari pengamatan nyata.</p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/DKu-OZYV4fs?showinfo=0"></iframe><p><br></p><h2>Studi Kasus: "Proyek Kecambah"</h2><p>Mari kita lihat contoh dari video:</p><h3>Karakter dalam Video:</h3><ul><li>Foxy: Memanipulasi data pertumbuhan kecambah</li><li>Mosi: Mengarang data karena kecambahnya mati</li><li>Ruka: Jujur dan mencari penyebab masalah</li><li>Pierce: Jujur dan memulai ulang pengamatan</li><li>Guru: Mengevaluasi laporan siswa</li></ul><h3>Apa yang Terjadi?</h3><ol><li>Semua siswa diberi tugas menumbuhkan kecambah</li><li>Masalah yang muncul:</li></ol><ul><li class="ql-indent-1">Kecambah Foxy berhenti tumbuh</li><li class="ql-indent-1">Kecambah Mosi mati</li><li class="ql-indent-1">Kecambah Ruka juga berhenti tumbuh</li><li class="ql-indent-1">Kecambah Pierce mati</li></ul><ol><li>Reaksi berbeda dari siswa:</li></ol><ul><li class="ql-indent-1">Foxy: Memalsukan data (+1cm/hari)</li><li class="ql-indent-1">Mosi: Mengarang seluruh data</li><li class="ql-indent-1">Ruka: Melaporkan masalah &amp; mencari penyebab</li><li class="ql-indent-1">Pierce: Memulai ulang dengan kecambah baru</li></ul><ol><li>Hasilnya:</li></ol><ul><li class="ql-indent-1">Foxy &amp; Mosi: Nilai buruk karena data tidak masuk akal</li><li class="ql-indent-1">Ruka &amp; Pierce: Dipuji guru karena kejujuran &amp; usaha</li></ul><h2>Mengapa Kecurangan Riset itu Salah?</h2><h3>Dampak Langsung:</h3><ol><li>Data tidak bisa dipercaya</li><li>Tidak belajar dari kegagalan</li><li>Kehilangan kesempatan belajar</li><li>Risiko ketahuan dan nilai buruk</li></ol><h3>Dampak Jangka Panjang:</h3><ol><li>Tidak memahami proses ilmiah</li><li>Kebiasaan berbohong</li><li>Sulit dipercaya di masa depan</li><li>Tidak berkembangnya kemampuan analisis</li></ol><h2>Cara Menghindari Kecurangan Riset</h2><h3>Saat Menghadapi Masalah:</h3><ol><li>Catat data sebenarnya</li><li>Dokumentasikan masalah</li><li>Cari penyebab kegagalan</li><li>Diskusikan dengan guru</li><li>Siap memulai ulang jika perlu</li></ol><h3>Tips Penelitian yang Baik:</h3><ol><li>Buat rencana detail</li><li>Catat semua pengamatan</li><li>Ambil foto sebagai bukti</li><li>Simpan semua data mentah</li><li>Jujur dalam pelaporan</li></ol><h2>Kecurangan Riset di Era Digital dan AI</h2><h3>Bentuk Modern:</h3><ol><li>Copy-paste data online</li><li>Menggunakan AI untuk membuat data palsu</li><li>Memanipulasi foto digital</li><li>Mengambil hasil penelitian orang lain</li></ol><h3>Penggunaan AI yang Benar:</h3><ol><li>Untuk memahami metode penelitian</li><li>Menganalisis data yang valid</li><li>Mencari referensi</li><li>Selalu cantumkan sumber</li></ol><h2>Rekomendasi untuk Penelitian Jujur</h2><h3>Persiapan:</h3><ol><li>Pahami tugas dengan baik</li><li>Siapkan alat dan bahan</li><li>Buat jadwal pengamatan</li><li>Siapkan cara dokumentasi</li><li>Antisipasi masalah</li></ol><h3>Saat Penelitian:</h3><ol><li>Catat tepat waktu</li><li>Foto setiap tahap</li><li>Simpan bukti penelitian</li><li>Diskusikan masalah</li><li>Jaga kejujuran</li></ol><h2>Kesimpulan</h2><ul><li>Kegagalan adalah bagian dari pembelajaran</li><li>Kejujuran lebih penting dari hasil sempurna</li><li>Data asli lebih berharga dari data palsu</li><li>Solusi selalu ada jika mau berusaha</li><li>Integritas adalah kunci sukses penelitian</li></ul><h2>Pesan Penting</h2><p>"Lebih baik gagal dengan jujur daripada berhasil dengan berbohong. Kegagalan mengajarkan kita berkembang, kebohongan hanya mengajarkan kita bersembunyi."</p><h2>Tips Tambahan</h2><ol><li>Dokumentasikan proses</li><li>Buat catatan detail</li><li>Diskusikan kesulitan</li><li>Terima kegagalan sebagai pembelajaran</li><li>Fokus pada proses, bukan hanya hasil</li></ol><p><br></p>`,
        created_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('module_content_junior', null, {});
  }
};