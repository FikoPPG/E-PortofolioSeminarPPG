/**
 * ============================================================================
 * THE CREATIVE EDUCATOR ARCHIVE - DATA STORE
 * ============================================================================
 * File ini adalah pusat konfigurasi data portofolio.
 * Pemilik dapat mengubah informasi profil, proyek, perjalanan, refleksi,
 * serta dokumen di satu tempat ini tanpa perlu mengubah kode HTML lainnya.
 * 
 * CATATAN PENTING:
 * Bagian bertanda [GANTI ...] merupakan contoh yang disiapkan agar Anda
 * dapat menggantinya dengan informasi dan artefak nyata Anda sendiri.
 * ============================================================================
 */

export const PORTFOLIO_DATA = {
  // Informasi Utama Pemilik
  profile: {
    fullName: "Fiko Kurnia Putra",
    formalName: "Fiko Kurnia Putra, S.Sn.",
    role: "Calon Pendidik Seni | Kreativitas, Budaya, dan Inovasi Pembelajaran",
    headlineLead: "Menghidupkan Seni dalam Pembelajaran.",
    headlineHighlight: "Menumbuhkan Potensi dalam Setiap Murid.",
    tagline: "Calon pendidik seni berlatar belakang Seni Karawitan (ISI Surakarta) dan mahasiswa PPG Prajabatan (UNNES). Menghadirkan ruang belajar seni yang inklusif, kolaboratif, kontekstual, dan berakar pada nilai-nilai budaya.",
    motto: "Menghidupkan seni dalam pembelajaran, menumbuhkan potensi dalam setiap murid.",
    status: "MAHASISWA PPG PRAJABATAN GEL. 1 // PENDIDIKAN SENI BUDAYA UNNES",
    location: "Kediri, Jawa Timur • Semarang, Jawa Tengah",
    edition: "E-PORTOFOLIO // PENDIDIKAN SENI BUDAYA 2026",
    avatar: "assets/images/fiko-portrait.jpg",
    email: "fikokurniaputra.edu@gmail.com",
    cvUrl: "#",
    socials: {
      instagram: "https://www.instagram.com/fikokurnia_/",
      instagramHandle: "@fikokurnia_",
      tiktok: "https://www.tiktok.com/@fikokurnia7",
      tiktokHandle: "@FikoKP"
    },
    aboutNarrative: [
      "Perkenalkan, saya Fiko Kurnia Putra, seorang calon pendidik seni yang berasal dari Kediri, Jawa Timur, dengan latar belakang akademik di bidang Seni Karawitan. Perjalanan pendidikan dan pengalaman praktik mengajar telah membentuk pandangan saya bahwa seni bukan sekadar ruang untuk mempelajari teknik dan menghasilkan karya, melainkan juga sarana untuk menumbuhkan kepekaan, kreativitas, karakter, dan kemampuan menghargai keberagaman.",
      "Saat ini, saya sedang menempuh Pendidikan Profesi Guru (PPG) Prajabatan di Universitas Negeri Semarang, Program Studi Pendidikan Seni Budaya. Melalui proses ini, saya terus mengembangkan kompetensi pedagogis, profesional, sosial, dan kepribadian untuk mempersiapkan diri menjadi pendidik yang reflektif, adaptif, dan mampu memberikan kontribusi nyata bagi pendidikan.",
      "Bagi saya, menjadi guru bukan hanya tentang menyampaikan pengetahuan, tetapi juga tentang memahami kebutuhan murid, menemukan potensi dalam setiap individu, dan menciptakan pengalaman belajar yang bermakna."
    ],
    vision: "Saya bercita-cita menjadi guru profesional yang inspiratif, kreatif, dan inklusif dalam menciptakan pembelajaran yang menyenangkan serta mendorong murid berpikir kritis, berkarakter, dan berani meraih cita-cita. Saya meyakini bahwa setiap murid memiliki potensi, minat, karakter, dan cara belajar yang berbeda. Karena itu, pendidikan harus memberikan kesempatan yang adil bagi setiap murid untuk berkembang, berekspresi, membangun kepercayaan diri, dan menemukan makna dalam proses belajarnya.",
    commitment: "Menjadi pendidik berarti bersedia terus bertumbuh, mendengarkan, dan memberikan ruang bagi orang lain untuk berkembang. Saya berkomitmen untuk menghadirkan pendidikan seni yang kreatif, bermakna, inklusif, dan berakar pada nilai-nilai budaya.",
    commitmentHighlight: "Bagi saya, keberhasilan seorang guru bukan hanya terlihat dari apa yang berhasil diajarkan, tetapi juga dari potensi yang berhasil dibangkitkan dalam diri setiap murid.",
    quickFacts: [
      { label: "Nama Lengkap", value: "Fiko Kurnia Putra, S.Sn." },
      { label: "Asal Daerah", value: "Kediri, Jawa Timur" },
      { label: "Pendidikan S1", value: "S1 Seni Karawitan — ISI Surakarta (2020–2025)" },
      { label: "Pendidikan Profesi", value: "PPG Prajabatan Gel. 1 — UNNES (Pendidikan Seni Budaya)" },
      { label: "Praktik Mengajar", value: "PPL Terbimbing & Mandiri di SMAN 4 Semarang" },
      { label: "Fokus Inovasi", value: "TPS Audiovisual Teater & Diferensiasi Seni" }
    ],
    principles: [
      {
        number: "01",
        title: "Seni Sebagai Pembentuk Karakter",
        desc: "Seni bukan sekadar ruang untuk mempelajari teknik dan menghasilkan karya, melainkan sarana menumbuhkan kepekaan batin, karakter luhur, dan kemampuan menghargai keberagaman."
      },
      {
        number: "02",
        title: "Keadilan & Inklusivitas Belajar",
        desc: "Setiap murid memiliki potensi, minat, dan cara belajar yang unik. Pendidikan harus memberikan kesempatan yang adil bagi setiap anak untuk berkembang dan berani berekspresi."
      },
      {
        number: "03",
        title: "Berakar Budaya, Relevan Zaman",
        desc: "Menghubungkan estetika seni tradisi nusantara (Karawitan) dengan media digital dan pendekatan kontekstual yang dekat dengan kehidupan murid masa kini."
      },
      {
        number: "04",
        title: "Pendidik Pembelajar Abadi",
        desc: "Menjadi guru berarti bersedia terus bertumbuh melalui refleksi kritis, evaluasi berkelanjutan, dan keterbukaan mengadopsi inovasi demi kebutuhan murid."
      }
    ]
  },

  // Perjalanan Akademik & Profesional Fiko Kurnia Putra
  journey: [
    {
      id: "j-1",
      period: "2026 — Sekarang",
      category: "Pendidikan Profesi Guru",
      title: "PPG Prajabatan Gelombang 1 — Pendidikan Seni Budaya",
      institution: "Universitas Negeri Semarang (UNNES)",
      desc: "Menempuh program profesi guru untuk mengembangkan kompetensi pedagogis, kepribadian, sosial, dan profesional. Mendalami kurikulum merdeka, pendekatan TaRL, CRT, dan asesmen autentik.",
      outcome: "Mempersiapkan diri secara matang menjadi pendidik seni yang reflektif, adaptif, dan mampu memberikan kontribusi nyata bagi ekosistem pendidikan."
    },
    {
      id: "j-2",
      period: "2026",
      category: "Praktik Pengalaman Lapangan",
      title: "PPL Terbimbing & Mandiri — Inovasi TPS Audiovisual Teater",
      institution: "SMA Negeri 4 Semarang (Kelas X)",
      desc: "Merancang dan mempraktikkan model pembelajaran kooperatif Think Pair Share (TPS) berbantuan media audiovisual pada materi Dasar Teater.",
      outcome: "Mendorong murid berpikir mandiri, berdiskusi aktif berpasangan, berani menyampaikan pendapat di depan umum, dan membangun pemahaman teater melalui kolaborasi."
    },
    {
      id: "j-3",
      period: "2020 — 2025",
      category: "Pendidikan Sarjana (S1)",
      title: "Sarjana Seni (S.Sn.) — Program Studi Seni Karawitan",
      institution: "Institut Seni Indonesia (ISI) Surakarta",
      desc: "Menempuh pendidikan sarjana dengan fokus pada musik tradisi nusantara, keahlian instrumen karawitan, teori estetika, serta manajemen pergelaran seni pertunjukan.",
      outcome: "Keterlibatan aktif dalam konser karawitan memperkaya musikalitas, kedisiplinan tinggi, pemahaman budaya mendalam, serta kemampuan kerja sama tim."
    },
    {
      id: "j-4",
      period: "2017 — 2020",
      category: "Pendidikan Menengah Atas",
      title: "Sekolah Menengah Atas — Jurusan IPS & Organisasi Seni",
      institution: "SMA Negeri 1 Kota Kediri",
      desc: "Menempuh pendidikan menengah peminatan IPS serta berpartisipasi aktif dalam kegiatan organisasi seni musik tradisi sekolah.",
      outcome: "Pijakan awal yang kokoh dalam membangun minat, kepekaan artistik, dan dedikasi terhadap dunia seni dan pendidikan."
    }
  ],

  // Kompetensi & Keahlian Seni & Pedagogi
  skills: [
    {
      category: "Pedagogi Seni & Desain Pembelajaran",
      icon: "🎭",
      items: [
        {
          name: "Pembelajaran Kooperatif TPS (Think Pair Share)",
          desc: "Merancang sintaks pembelajaran yang memfasilitasi murid berpikir mandiri, berdiskusi intensif berpasangan, dan berbagi gagasan kelompok."
        },
        {
          name: "Pembelajaran Berdiferensiasi Seni",
          desc: "Menyesuaikan konten eksplorasi, proses apresiasi, dan produk karya seni berdasarkan kesiapan serta minat estetik murid."
        },
        {
          name: "Understanding by Design (UbD) Seni",
          desc: "Menyusun modul ajar seni mundur: menetapkan tujuan ekspresi, bukti pemahaman karya, lalu langkah apresiasi bertahap."
        }
      ]
    },
    {
      category: "Keahlian Seni Karawitan & Musik Tradisi",
      icon: "🎵",
      items: [
        {
          name: "Penguasaan Instrumen Gamelan Jawa",
          desc: "Keterampilan memainkan ricikan gamelan (kendhang, gender, bonang, demung) dengan penguasaan laras dan estetika musikal."
        },
        {
          name: "Apresiasi & Etnomusikologi Nusantara",
          desc: "Kemampuan membedah konteks sosial-budaya di balik seni tradisi dan mentransmisikannya secara kontekstual kepada generasi muda."
        },
        {
          name: "Manajemen Ansambel & Kerja Sama Musikal",
          desc: "Melatih kepekaan mendengar, sinkronisasi tempo, kedisiplinan estetis, dan harmoni kerja sama antar pemusik."
        }
      ]
    },
    {
      category: "Seni Drama, Teater & Olah Peran",
      icon: "🎬",
      items: [
        {
          name: "Dasar Teater & Olah Tubuh/Vokal",
          desc: "Memfasilitasi murid melatih artikulasi, proyeksi suara, gestur tubuh, konsentrasi, dan ekspresi emosi karakter panggung."
        },
        {
          name: "Analisis Naskah & Karakterisasi",
          desc: "Membimbing murid mendekonstruksi alur cerita, konflik, dan penokohan untuk menemukan pesan moral yang bermakna."
        },
        {
          name: "Pentas Kolaboratif & Tata Panggung Sederhana",
          desc: "Mengorkestrasi pertunjukan kelas sederhana yang memadukan akting, musik pengiring, dan tata artistik."
        }
      ]
    },
    {
      category: "Media Audiovisual & Asesmen Pembelajaran",
      icon: "⚡",
      items: [
        {
          name: "Media Audiovisual Interaktif",
          desc: "Mengembangkan materi pengantar teater dan musik berbasis video inspiratif untuk memantik daya imajinasi awal murid."
        },
        {
          name: "Asesmen Kinerja & Rubrik Autentik Seni",
          desc: "Menyusun rubrik penilaian proses berkarya, keberanian berekspresi, sikap kolaboratif, serta presentasi apresiasi."
        },
        {
          name: "Refleksi Terpandu & Jurnal Apresiasi Murid",
          desc: "Menyediakan lembar refleksi diri bagi murid untuk mengevaluasi pengalaman estetis dan capaian personal mereka."
        }
      ]
    }
  ],

  // Portofolio Proyek (Lengkap & Terstruktur)
  projects: [
    {
      id: "prj-01",
      number: "PRJ-01",
      title: "Inovasi Pembelajaran Kooperatif TPS Berbantuan Audiovisual",
      category: "Digital Innovation",
      year: "2026",
      isFlagship: true,
      thumbnail: "assets/images/project-edtech.jpg",
      summary: "Rancangan pembelajaran kooperatif Think Pair Share (TPS) berbantuan media audiovisual pada materi Dasar Teater di kelas X SMAN 4 Semarang.",
      problem: "Murid kerap merasa canggung, takut salah berekspresi di depan kelas, dan kesulitan memahami unsur-unsur seni peran jika hanya diberikan materi ceramah konvensional.",
      learningGoal: "Mendorong murid berpikir mandiri, aktif berdiskusi berpasangan, berani menyampaikan pendapat, dan membangun pemahaman teater melalui kolaborasi.",
      role: "Praktikan PPL PPG Prajabatan & Perancang Pembelajaran",
      process: "Observasi kelas heterogen -> Perancangan stimulus video teater -> Penyusunan lembar kerja TPS -> Praktik terbimbing di kelas X SMAN 4 Semarang -> Asesmen autentik.",
      solution: "Mengintegrasikan media audiovisual pemantik imajinasi dengan sintaks Think (berpikir mandiri), Pair (berdiskusi pasangan), dan Share (apresiasi bersama).",
      outcomes: "Keterlibatan aktif murid meningkat signifikan, murid yang sebelumnya pasif berani mempraktikkan ekspresi vokal dan gestur peran di depan kelas.",
      reflection: "Keberanian murid berekspresi seni tumbuh subur ketika diberikan tahapan ruang aman untuk berdialog dengan teman sebaya sebelum tampil di muka umum.",
      tags: ["Think Pair Share", "Dasar Teater", "Media Audiovisual", "SMAN 4 Semarang", "Kolaboratif"],
      artifactLink: "#",
      artifactNote: "Perangkat ajar dan instrumen asesmen tersimpan dalam arsip dokumen."
    },
    {
      id: "prj-02",
      number: "PRJ-02",
      title: "LKPD Kontekstual: Ekspedisi Isu Sampah & Keberlanjutan",
      category: "Teaching Media",
      year: "2024",
      isFlagship: false,
      thumbnail: "assets/images/project-lkpd.jpg",
      summary: "Perangkat lembar kerja peserta didik (LKPD) berbasis proyek nyata di lingkungan sekitar sekolah dengan tata letak editorial modern.",
      problem: "Lembar kerja konvensional seringkali hanya berupa lembar soal pilihan ganda yang tidak merangsang investigasi kritis murid.",
      learningGoal: "Melatih keterampilan pemecahan masalah autentik, observasi lapangan, serta komunikasi solusi berbasis data.",
      role: "Penyusun Modul & Visual Scaffolder",
      process: "Survei lingkungan sekolah -> Identifikasi masalah aktual -> Perancangan instruksi bertahap -> Penyusunan kartu tugas tim.",
      solution: "Menyusun lembar kerja visual dengan peta investigasi, format wawancara narasumber lokal, dan panduan presentasi poster.",
      outcomes: "Terciptanya 8 proposal aksi nyata penanganan sampah kelas yang dirancang dan dipresentasikan secara mandiri oleh tim murid.",
      reflection: "Ketika tugas belajar berpijak pada lingkungan yang mereka lihat setiap hari, murid merasa memiliki kontribusi yang nyata.",
      tags: ["LKPD Kontekstual", "Project-Based Learning", "Editorial Layout", "Scaffolding"],
      artifactLink: "#",
      artifactNote: "[CONTOH — BERKAS LKPD PDF DAPAT DILIHAT PADA SECTION DOKUMEN]"
    },
    {
      id: "prj-03",
      number: "PRJ-03",
      title: "Sistem Rubrik Asesmen Diagnostik & Holistik",
      category: "Assessment",
      year: "2024",
      isFlagship: false,
      thumbnail: "assets/images/project-assessment.jpg",
      summary: "Instrumen penilaian formatif dan diagnostik multi-aspek yang memudahkan guru memetakan kesiapan murid dan memberikan umpan balik tepat sasaran.",
      problem: "Penilaian sering tereduksi menjadi angka tunggal di akhir bab tanpa memberikan petunjuk konkret apa yang perlu diperbaiki murid.",
      learningGoal: "Menyediakan data diagnostik yang jelas untuk penyesuaian strategi mengajar dan umpan balik perkembangan personal.",
      role: "Perancang Instrumen Asesmen",
      process: "Pembedahan indikator capaian -> Perumusan deskriptor performa 4 tingkat -> Uji reliabilitas kriteria -> Integrasi lembar umpan balik.",
      solution: "Rubrik analitik dengan bahasa yang mudah dipahami murid disertai kartu lencana keterampilan berpikir kritis.",
      outcomes: "Guru mitra lebih mudah memetakan diferensiasi kelompok murid dan murid lebih memahami kriteria keberhasilan belajarnya.",
      reflection: "Asesmen yang baik tidak menakuti, melainkan memberikan cahaya yang menunjukkan langkah selanjutnya bagi murid.",
      tags: ["Asesmen Diagnostik", "Rubrik Holistik", "Umpan Balik Autentik", "Data-Driven"],
      artifactLink: "#",
      artifactNote: "[CONTOH — DOKUMEN INSTRUMEN DAPAT DIUNDUH DI SECTION ARSIP]"
    },
    {
      id: "prj-04",
      number: "PRJ-04",
      title: "Modul Ajar Berdiferensiasi: Menjelajah Ekosistem Lokal",
      category: "Learning Design",
      year: "2023",
      isFlagship: false,
      thumbnail: "assets/images/project-lkpd.jpg",
      summary: "Perangkat pembelajaran terstruktur lengkap dengan diferensiasi konten, proses, dan produk untuk jenjang sekolah menengah.",
      problem: "Tantangan keberagaman kesiapan belajar di dalam satu kelas seringkali membuat sebagian murid tertinggal dan sebagian lain bosan.",
      learningGoal: "Mengakomodasi gaya belajar dan kesiapan beragam tanpa menurunkan standar kompetensi esensial.",
      role: "Kurikulum & Modul Developer",
      process: "Pemetaan profil murid -> Penyusunan alur tujuan pembelajaran (ATP) -> Modulasi opsi tugas mandiri dan kelompok.",
      solution: "Tersedianya 3 jalur aktivitas: visual-investigatif, analitis-tekstual, dan praktik-kinestetik.",
      outcomes: "Terdokumentasikannya variasi karya akhir murid mulai dari komik sains, video penjelasan singkat, hingga maket miniatur.",
      reflection: "Diferensiasi bukan tentang membuat tugas terpisah untuk tiap anak, melainkan menyediakan pintu masuk yang ramah bagi semua.",
      tags: ["Modul Ajar", "Diferensiasi", "Kurikulum Merdeka", "Inklusif"],
      artifactLink: "#",
      artifactNote: "[CONTOH — GANTI DENGAN PROYEK MODUL ANDA]"
    },
    {
      id: "prj-05",
      number: "PRJ-05",
      title: "Media Kartu Belajar & Visual Scaffolding Fisika Keseharian",
      category: "Teaching Media",
      year: "2023",
      isFlagship: false,
      thumbnail: "assets/images/project-edtech.jpg",
      summary: "Paket kartu belajar fisik-digital dengan ilustrasi minimalis dan pertanyaan tantangan untuk membedah hukum Newton dalam kehidupan sehari-hari.",
      problem: "Rumus matematis seringkali menghalangi pemahaman intuitif murid terhadap hukum fisika dasar.",
      learningGoal: "Menanamkan intuisi konsep fisik melalui situasi familiar sebelum masuk ke perhitungan formal.",
      role: "Desainer Grafis & Konseptor Pedagogis",
      process: "Brainstorming fenomena harian -> Pembuatan sketsa ilustrasi -> Review ahli materi -> Playtest di ruang kelas.",
      solution: "Set kartu berukuran saku dengan teka-teki visual dan QR code menuju demonstrasi video interaktif.",
      outcomes: "Peningkatan keaktifan sesi tanya-jawab kelas dan pemahaman konsep gerak pada tes formatif awal.",
      reflection: "Representasi visual yang ramah meruntuhkan kecemasan awal murid terhadap mata pelajaran eksakta.",
      tags: ["Visual Thinking", "Physical Media", "Physics Concepts", "Scaffolding"],
      artifactLink: "#",
      artifactNote: "[CONTOH — GANTI DENGAN KARYA ASLI]"
    },
    {
      id: "prj-06",
      number: "PRJ-06",
      title: "Bank Sumber Belajar Terbuka (OER) Guru Kolaboratif",
      category: "Digital Innovation",
      year: "2024",
      isFlagship: false,
      thumbnail: "assets/images/project-assessment.jpg",
      summary: "Repositori tematik berbasis web yang mengumpulkan media ajar bebas pakai dan panduan fasilitasi untuk pendidik di daerah berkembang.",
      problem: "Sulitnya akses materi berkualitas dan bervariasi bagi guru yang memiliki keterbatasan waktu perancangan dari nol.",
      learningGoal: "Mendistribusikan materi ajar yang modular, adaptif, dan siap cetak untuk rekan pendidik se-nusantara.",
      role: "Kurator Konten & Inisiator Proyek",
      process: "Kurasi materi terbuka -> Lisensi Creative Commons -> Penataan katalog terindeks -> Sosialisasi komunitas.",
      solution: "Portal ringan yang dapat diakses bahkan dengan koneksi internet terbatas dan materi yang hemat tinta cetak.",
      outcomes: "Telah diunduh dan diadaptasi oleh puluhan pendidik lintas jenjang dalam komunitas pembelajaran daring.",
      reflection: "Berbagi sumber daya adalah cara tercepat untuk mempercepat pemerataan kualitas pendidikan bersama.",
      tags: ["Open Educational Resources", "Community", "Accessibility", "Open Source"],
      artifactLink: "#",
      artifactNote: "[CONTOH — GANTI DENGAN PROYEK DIGITAL ANDA]"
    }
  ],

  // Flagship Project Deep Dive
  featuredProject: {
    badge: "FLAGSHIP CASE STUDY // PPL SMAN 4 SEMARANG",
    title: "Model Think Pair Share (TPS) Berbantuan Media Audiovisual pada Materi Dasar Teater",
    tagline: "Studi kasus inovasi pembelajaran seni peran kelas X di SMA Negeri 4 Semarang untuk membangun kemandirian berpikir, keberanian berekspresi, dan kerja sama tim.",
    heroImage: "assets/images/project-edtech.jpg",
    problemStatement: "Pada pembelajaran seni teater konvensional, banyak murid merasa canggung, ragu berekspresi di depan kelas, dan kesulitan mengidentifikasi unsur-unsur dasar seni peran jika hanya diberikan teori ceramah.",
    studentNeeds: "Murid memerlukan pemantik visual yang memicu imajinasi, ruang aman untuk berpikir mandiri (Think), ruang dialog tanpa tekanan bersama teman sebaya (Pair), serta panggung suportif untuk saling mengapresiasi (Share).",
    pedagogicalDecisions: [
      {
        phase: "Tahap 01: Hook & Stimulus Audiovisual",
        title: "Pemantik Visual Inspiratif",
        desc: "Menayangkan cuplikan video pertunjukan teater pendek untuk merangsang daya pengamatan murid terhadap ekspresi wajah, dinamika vokal, dan bahasa tubuh karakter."
      },
      {
        phase: "Tahap 02: Think (Penyelidikan Mandiri)",
        title: "Pencatatan Refleksi Personal",
        desc: "Setiap murid diberikan waktu hening untuk menganalisis unsur peran dan merumuskan gagasan penokohan mereka sendiri pada lembar kerja terstruktur."
      },
      {
        phase: "Tahap 03: Pair (Diskusi Berpasangan)",
        title: "Eksplorasi Dialog Tanpa Tekanan",
        desc: "Murid berpasangan mendiskusikan temuan, saling memberi masukan karakter, dan melatih potongan dialog adegan dalam suasana yang nyaman dan suportif."
      },
      {
        phase: "Tahap 04: Share (Presentasi & Apresiasi)",
        title: "Unjuk Kerja & Umpan Balik Kolaboratif",
        desc: "Setiap pasangan menampilkan eksplorasi peran di depan kelas, diikuti sesi apresiasi konstruktif menggunakan rubrik kriteria transparan."
      }
    ],
    evaluationDataNote: "Catatan observasi kelas dan lembar refleksi murid menunjukkan peningkatan drastis dalam keaktifan berpendapat dan keberanian berbicara di muka umum.",
    reflection: "Inovasi ini menegaskan bahwa keberanian berekspresi seni tidak lahir dari instruksi yang kaku, melainkan dari rasa aman yang dibangun melalui langkah-langkah kolaboratif bertahap."
  },

  // Filosofi Mengajar Fiko Kurnia Putra
  philosophy: {
    quote: "Setiap murid memiliki potensi untuk berkembang ketika diberikan kesempatan, pendampingan, dan ruang belajar yang tepat.",
    author: "— Fiko Kurnia Putra, S.Sn.",
    pillars: [
      {
        icon: "🌱",
        title: "Guru Sebagai Fasilitator",
        desc: "Membantu murid membangun pemahaman sendiri, mengeksplorasi kreativitas, dan belajar dari proses maupun kegagalan secara aman."
      },
      {
        icon: "🎵",
        title: "Keterampilan Musikal & Budaya",
        desc: "Menghadirkan pengalaman seni yang mengasah keterampilan musikal, ekspresi drama, serta kecintaan mendalam pada budaya bangsa."
      },
      {
        icon: "🤝",
        title: "Empati, Keberanian & Kerja Sama",
        desc: "Melalui proses berkesenian bersama, murid dilatih berempati, mandiri, berani berbicara di muka umum, dan harmonis bekerja sama."
      },
      {
        icon: "🔄",
        title: "Guru Pembelajar Sepanjang Hayat",
        desc: "Guru harus terus belajar melalui refleksi berkala, evaluasi kelas, dan keterbukaan mengadopsi inovasi teknologi pembelajaran."
      }
    ]
  },

  // ==========================================================================
  // SUB BAB 2: REFLEKSI MATA KULIAH PPG (SEMESTER 1 & SEMESTER 2 - 14 MATA KULIAH LENGKAP)
  // ==========================================================================
  ppgCourses: [
    // --- SEMESTER 1 ---
    {
      id: "mk-s1-01",
      code: "MK-S1-01",
      name: "Pemahaman tentang Peserta Didik dan Pembelajaran",
      category: "sem1",
      categoryLabel: "Semester 1 // Inti",
      semester: "Semester 1",
      credits: "3 SKS",
      summary: "Tidak ada dua murid yang persis sama. Pelajaran seni butuh ruang lapang untuk berekspresi, berkreasi, dan menumbuhkan rasa percaya diri.",
      fullNarrative: "Dari mata kuliah ini saya belajar bahwa tidak ada dua murid yang persis sama. Karakter, kemampuan, minat, kebutuhan, dan cara belajar mereka berbeda-beda. Sebagai calon guru Seni Budaya yang berlatar belakang Seni Karawitan, saya merasa pelajaran seni butuh ruang yang lapang untuk berekspresi, berkreasi, bekerja sama, dan menumbuhkan percaya diri. Saat mengajar Dasar Teater di kelas X SMAN 4 Semarang, saya baru benar-benar sadar bahwa guru perlu mengenali murid dulu sebelum memilih strategi. Murid yang pasif ternyata tidak selalu tidak paham. Bisa jadi ia hanya perlu waktu berpikir, ditemani, atau berada di suasana belajar yang lebih nyaman. Pengalaman itu membuat saya lebih berhati-hati sebelum menilai seorang murid dari seberapa sering ia bersuara, dan lebih ingin mengamati mereka dari dekat.",
      artifacts: [
        { title: "Laporan Profiling Karakteristik Peserta Didik", type: "Laporan Riset", link: "#" },
        { title: "Panduan Pemetaan Minat & Gaya Belajar Seni", type: "Modul", link: "#" }
      ],
      reflection4C: {
        connection: "Menghubungkan karakteristik dan keberagaman gaya belajar murid dengan kebutuhan ruang ekspresi yang aman dalam pelajaran Seni Budaya.",
        challenge: "Menghadapi murid yang pasif di kelas dan menghindari penilaian tergesa-gesa terhadap kemampuan murid hanya dari keaktifan berbicara.",
        concept: "Tiap murid memiliki latar belakang, kesiapan, dan tempo belajar unik; guru harus mengenali kebutuhan individual sebelum menetapkan strategi.",
        change: "Mengamati murid dari dekat, memberikan waktu berpikir yang leluasa, dan menciptakan iklim kelas yang nyaman agar setiap murid berani berekspresi."
      }
    },
    {
      id: "mk-s1-02",
      code: "MK-S1-02",
      name: "Filosofi Pendidikan dan Pendidikan Nilai",
      category: "sem1",
      categoryLabel: "Semester 1 // Inti",
      semester: "Semester 1",
      credits: "2 SKS",
      summary: "Mengajar tidak sebatas memindahkan pengetahuan, tetapi menemani murid tumbuh menjadi pribadi berkarakter lewat teladan dan sistem among.",
      fullNarrative: "Mata kuliah ini mengubah cara saya memandang pendidikan. Bagi saya sekarang, mengajar tidak sebatas memindahkan pengetahuan, tetapi juga menemani murid tumbuh menjadi pribadi yang berkarakter. Saya belajar tentang kodrat alam, kodrat zaman, dan semboyan Tut Wuri Handayani, dan semuanya terasa dekat dengan peran seorang guru. Di pelajaran Seni Budaya, nilai seperti gotong royong, tanggung jawab, kreativitas, dan menghargai perbedaan bisa tumbuh lewat diskusi, kerja kelompok, dan praktik seni. Saya juga makin sadar bahwa murid lebih sering meniru daripada sekadar mendengar, sehingga sikap guru sehari-hari ikut menjadi pelajaran. Tugas saya adalah memberi arahan sekaligus ruang agar tiap murid berkembang sesuai potensinya.",
      artifacts: [
        { title: "Kajian Kritis Filosofi Ki Hadjar Dewantara", type: "Makalah", link: "#" },
        { title: "Konsep Integrasi Budi Pekerti dalam Seni", type: "Infografis", link: "#" }
      ],
      reflection4C: {
        connection: "Menghubungkan filosofi Ki Hadjar Dewantara (kodrat alam, kodrat zaman, Tut Wuri Handayani) dengan penanaman nilai budi pekerti dalam seni.",
        challenge: "Mengubah kebiasaan mengajar yang instruktif satu arah menjadi fasilitasi yang memberi keteladanan nyata bagi murid.",
        concept: "Pendidikan adalah proses menuntun tumbuhnya budi pekerti, gotong royong, dan kreativitas melalui ruang praktik seni kolaboratif.",
        change: "Menjadikan keteladanan sikap guru sebagai media edukasi utama serta memberi ruang agar tiap murid berkembang sesuai kodrat potensinya."
      }
    },
    {
      id: "mk-s1-03",
      code: "MK-S1-03",
      name: "Pembelajaran Mendalam dan Asesmen (PMA) Dasar",
      category: "sem1",
      categoryLabel: "Semester 1 // Inti",
      semester: "Semester 1",
      credits: "3 SKS",
      summary: "Pembelajaran bermakna tidak cukup diukur dari nilai bagus. Asesmen diposisikan sebagai bagian dari proses belajar untuk mendeteksi pemahaman nyata.",
      fullNarrative: "Lewat mata kuliah ini saya memahami bahwa pembelajaran yang bermakna tidak cukup diukur dari materi yang selesai atau nilai yang bagus. Murid perlu mengamati, menjelajah, berdiskusi, berlatih, dan memikirkan kembali apa yang telah mereka alami. Dalam Dasar Teater, unsur teater dan dramaturgi jadi lebih mudah dipahami ketika murid menghubungkannya dengan pertunjukan yang benar-benar mereka lihat. Saya juga belajar melihat asesmen sebagai bagian dari proses belajar, bukan sekadar penutup. Asesmen bisa menunjukkan sejauh mana pemahaman murid berkembang dan langkah apa yang perlu saya ambil selanjutnya. Cara pandang ini membuat saya ingin lebih sering bertanya pada diri sendiri, apakah murid benar-benar mengerti atau hanya hafal.",
      artifacts: [
        { title: "Desain Alur Pembelajaran Berbasis Understanding by Design", type: "Modul Ajar", link: "#" },
        { title: "Rubrik Asesmen Autentik Unsur Dasar Teater", type: "Rubrik PDF", link: "#" }
      ],
      reflection4C: {
        connection: "Mengintegrasikan materi Dasar Teater dan dramaturgi dengan tontonan pertunjukan autentik agar konsep teater dipahami secara hidup.",
        challenge: "Memastikan asesmen tidak berhenti sebagai tes hafalan di akhir bab, melainkan cermin pemahaman bermakna selama proses belajar.",
        concept: "Asesmen sebagai bagian terpadu dari proses belajar (assessment for/as learning) untuk mendeteksi perkembangan pemahaman murid.",
        change: "Merancang aktivitas eksplorasi berbasis pengamatan langsung dan rutin mengevaluasi apakah strategi mengajar sudah efektif dipahami murid."
      }
    },
    {
      id: "mk-s1-04",
      code: "MK-S1-04",
      name: "Pendidikan Berkelanjutan Berbasis Teknologi dan Konservasi",
      category: "sem1",
      categoryLabel: "Semester 1 // Pilihan",
      semester: "Semester 1",
      credits: "2 SKS",
      summary: "Teknologi sebagai jembatan yang mendekatkan murid pada kekayaan seni dan pelestarian tradisi, tanpa menggantikan pengalaman berlatih langsung.",
      fullNarrative: "Mata kuliah ini mengajarkan bahwa teknologi bisa membuat pembelajaran lebih menarik dan mudah dipahami, asalkan dipakai sesuai kebutuhan murid. Di Seni Budaya, saya bisa menghadirkan video pertunjukan, ilustrasi, presentasi, dan sumber belajar lain yang memperkaya pengalaman mereka. Sebagai calon guru berlatar Seni Karawitan, saya juga memandang pelestarian budaya sebagai bagian dari pendidikan. Saya ingin teknologi menjadi jembatan yang mendekatkan murid pada seni dan budaya, bukan pengganti pengalaman berlatih langsung. Nilai dan penghargaan pada tradisi harus tetap terasa, meski medianya berubah. Dengan begitu murid tidak hanya melihat seni di layar, tetapi juga mau mengenal, mencoba, dan menjaganya.",
      artifacts: [
        { title: "Media Audiovisual Pembelajaran Karawitan & Teater", type: "Video Media", link: "#" },
        { title: "Modul Integrasi Nilai Konservasi Budaya Lokal", type: "Modul", link: "#" }
      ],
      reflection4C: {
        connection: "Menghubungkan pelestarian seni tradisi (karawitan & teater) dengan pemanfaatan media digital modern dalam pembelajaran di sekolah.",
        challenge: "Menjaga esensi dan kehangatan pengalaman praktik berkesenian langsung agar tidak tergerus oleh konsumsi layar digital pasif.",
        concept: "Teknologi adalah jembatan dan akselerator apresiasi budaya yang memperluas akses murid terhadap pertunjukan seni bernilai tinggi.",
        change: "Menggunakan media video dan presentasi interaktif sebagai pemantik, lalu mengarahkan murid untuk mencoba, berlatih, dan menjaga seni tradisi secara langsung."
      }
    },
    {
      id: "mk-s1-05",
      code: "MK-S1-05",
      name: "Pola Pikir Bertumbuh (Growth Mindset) dalam Pembelajaran",
      category: "sem1",
      categoryLabel: "Semester 1 // Inti",
      semester: "Semester 1",
      credits: "2 SKS",
      summary: "Kemampuan murid tumbuh lewat latihan dan pendampingan tepat. Menghargai proses dan melihat kesalahan sebagai bagian tak terpisahkan dari belajar.",
      fullNarrative: "Di mata kuliah ini saya belajar bahwa kemampuan murid bisa tumbuh lewat latihan, pendampingan, kesempatan, dan umpan balik yang tepat. Karena itu saya tidak boleh cepat memberi cap 'tidak mampu' hanya karena seorang murid belum berhasil pada percobaan pertama. Dalam pelajaran seni, ada murid yang cepat menangkap materi, ada pula yang butuh waktu lebih lama untuk membangun keterampilan atau keberanian. Hal ini mengingatkan saya untuk menghargai proses, mendorong murid berani mencoba, dan membantu mereka melihat kesalahan sebagai bagian dari belajar. Saya juga ingin menerapkannya pada diri sendiri, yaitu terbuka pada kritik dan mau terus memperbaiki cara mengajar. Saya sadar semangat saja tidak cukup, murid tetap butuh strategi dan latihan yang jelas.",
      artifacts: [
        { title: "Panduan Umpan Balik Afirmatif & Konstruktif Seni", type: "Lembar Panduan", link: "#" },
        { title: "Rancangan Scaffolding Pembentukan Keberanian Tampil", type: "Rancangan", link: "#" }
      ],
      reflection4C: {
        connection: "Mengaitkan konsep growth mindset dengan proses pembentukan keberanian berekspresi dan olah rasa seni pada diri setiap murid.",
        challenge: "Menghapus stigma 'tidak berbakat seni' yang kerap membuat murid minder dan enggan mencoba di kelas.",
        concept: "Keterampilan artistik dan keberanian tampil dapat terus diasah melalui latihan berulang, lingkungan suportif, dan umpan balik konstruktif.",
        change: "Membangun kultur kelas yang aman dari ejekan, merayakan proses belajar dari kesalahan, serta senantiasa terbuka menerima evaluasi cara mengajar."
      }
    },
    {
      id: "mk-s1-06",
      code: "MK-S1-06",
      name: "Praktik Pengalaman Lapangan (PPL) Terbimbing di SMAN 4 Semarang",
      category: "practice",
      categoryLabel: "Semester 1 // Praktik Lapangan",
      semester: "Semester 1",
      credits: "6 SKS",
      summary: "Mempertemukan teori kuliah dengan kelas nyata di kelas X SMAN 4 Semarang. Menguasai materi belum cukup tanpa kepekaan membaca suasana kelas.",
      fullNarrative: "PPL Terbimbing adalah pertama kalinya saya mempertemukan teori kuliah dengan kelas yang sebenarnya. Saya belajar menyusun perangkat pembelajaran, menyampaikan Dasar Teater kepada murid kelas X, mengelola kelas, membangun komunikasi, dan mengevaluasi apa yang sudah saya lakukan. Dari situ saya sadar bahwa menguasai materi memang penting, tetapi belum menjamin pembelajaran berhasil. Guru juga perlu membaca suasana kelas, memilih metode yang cocok, dan memberi murid kesempatan untuk ikut terlibat. Ada kalanya rencana yang sudah saya siapkan tidak berjalan semulus bayangan, dan dari situlah saya banyak belajar. Pengalaman ini menjadi bekal saya menghadapi PPL Mandiri dengan lebih siap.",
      artifacts: [
        { title: "Laporan Observasi Lingkungan Belajar SMAN 4 Semarang", type: "Laporan PPL", link: "#" },
        { title: "Perangkat Ajar Terbimbing Materi Dasar Teater", type: "Perangkat Ajar", link: "#" }
      ],
      reflection4C: {
        connection: "Menguji langsung perangkat pembelajaran dan modul ajar di hadapan murid kelas X SMAN 4 Semarang di bawah bimbingan Guru Pamong.",
        challenge: "Menghadapi situasi kelas yang tidak selalu berjalan sesuai skenario rencana awal di atas kertas.",
        concept: "Mengajar adalah perpaduan penguasaan konten, kepekaan membaca dinamika psikologis kelas, dan keluwesan adaptasi metode.",
        change: "Lebih aktif melibatkan murid dalam interaksi dua arah dan mengevaluasi setiap sesi mengajar untuk persiapan praktik mandiri."
      }
    },

    // --- SEMESTER 2 ---
    {
      id: "mk-s2-07",
      code: "MK-S2-07",
      name: "Pembelajaran Mendalam dan Asesmen Lanjut",
      category: "sem2",
      categoryLabel: "Semester 2 // Inti",
      semester: "Semester 2",
      credits: "3 SKS",
      summary: "Penyelarasan tujuan, aktivitas, dan asesmen berbasis stimulus audiovisual. Hasil asesmen diposisikan sebagai petunjuk diagnosis, bukan vonis.",
      fullNarrative: "Di semester kedua, pemahaman saya tentang pembelajaran mendalam dan asesmen jadi lebih matang. Saya belajar bahwa tujuan, kegiatan, dan asesmen harus saling selaras supaya murid tidak sekadar mengingat informasi, tetapi memahami, menghubungkan, dan memakainya dalam konteks yang bermakna. Di Dasar Teater, saya mengajak murid menganalisis unsur pertunjukan lewat tayangan audiovisual, diskusi, dan pertanyaan pemantik. Dari situ saya melihat bahwa asesmen punya fungsi lebih dari sekadar memberi nilai. Asesmen juga membantu saya menemukan bagian yang masih sulit bagi murid, lalu memperbaiki cara saya mengajar. Saya jadi lebih terbiasa melihat hasil murid sebagai petunjuk, bukan vonis.",
      artifacts: [
        { title: "Matriks Keselarasan Tujuan, Aktivitas, & Asesmen Lanjut", type: "Dokumen", link: "#" },
        { title: "Instrumen Evaluasi Diagnostik Pertunjukan Siswa", type: "Instrumen", link: "#" }
      ],
      reflection4C: {
        connection: "Menyelaraskan tujuan pembelajaran, kegiatan eksplorasi visual, dan rubrik asesmen agar bermakna bagi murid.",
        challenge: "Merumuskan pertanyaan pemantik yang merangsang daya analitis mendalam, bukan sekadar jawaban deskriptif singkat.",
        concept: "Asesmen diagnostik dan formatif berkelanjutan berfungsi sebagai kompas navigasi guru dalam menyempurnakan strategi mengajar.",
        change: "Memperlakukan data capaian murid sebagai masukan evaluasi metode mengajar sendiri daripada menghakimi hasil murid."
      }
    },
    {
      id: "mk-s2-08",
      code: "MK-S2-08",
      name: "Pendidikan Inklusif",
      category: "sem2",
      categoryLabel: "Semester 2 // Inti",
      semester: "Semester 2",
      credits: "2 SKS",
      summary: "Keadilan belajar yang sejati: memberikan dukungan yang pas sesuai kebutuhan tiap murid lewat beberapa kanal partisipasi berkesenian.",
      fullNarrative: "Pendidikan Inklusif memperkuat keyakinan saya bahwa setiap murid berhak mendapat kesempatan belajar yang adil sesuai kebutuhan dan potensinya. Adil bukan berarti semua diperlakukan sama, melainkan setiap murid mendapat dukungan yang pas agar bisa mencapai tujuan belajar. Di pelajaran seni, ada murid yang berani tampil dan berbicara, sementara yang lain lebih nyaman mengamati, menulis, atau berlatih dulu. Saya belajar bahwa guru bisa menyediakan beberapa jalan untuk berpartisipasi tanpa menghilangkan kompetensi inti yang harus dicapai. Saya ingin murid merasa dihargai dan aman di kelas, sebab dari rasa aman itulah mereka berani berkembang. Tantangan saya ke depan adalah menemukan bentuk dukungan yang tepat untuk tiap murid.",
      artifacts: [
        { title: "Desain Pembelajaran Seni Inklusif & Ramah Ragam Murid", type: "Modul Ajar", link: "#" },
        { title: "Peta Pilihan Kanal Partisipasi Seni Pertunjukan", type: "Bagan PDF", link: "#" }
      ],
      reflection4C: {
        connection: "Menerapkan prinsip keadilan inklusif dalam pembelajaran seni dengan membuka kanal ekspresi yang bervariasi.",
        challenge: "Menemukan bentuk diferensiasi dukungan yang proporsional bagi tiap murid tanpa menurunkan standar kompetensi esensial.",
        concept: "Kesetaraan kesempatan belajar tercapai ketika murid difasilitasi dengan rute partisipasi yang adaptif terhadap karakternya.",
        change: "Menyediakan opsi peran (tampil di depan panggung, menyusun dialog, tata artistik, observasi analitis) agar semua murid berkontribusi bermakna."
      }
    },
    {
      id: "mk-s2-09",
      code: "MK-S2-09",
      name: "Pembelajaran Sosial dan Emosional",
      category: "sem2",
      categoryLabel: "Semester 2 // Inti",
      semester: "Semester 2",
      credits: "2 SKS",
      summary: "Kesiapan belajar murid didukung regulasi emosi, empati, dan relasi positif. Suasana kelas yang aman menumbuhkan keberanian berbicara tanpa takut salah.",
      fullNarrative: "Dari Pembelajaran Sosial dan Emosional, saya memahami bahwa kesiapan belajar murid tidak hanya ditentukan kemampuan akademik. Kemampuan mengenali emosi, mengelola diri, memahami orang lain, membangun hubungan, dan mengambil keputusan yang bertanggung jawab juga berperan besar. Selama PPL, saya melihat murid membutuhkan suasana kelas yang aman agar berani menyampaikan pikiran dan tidak takut salah. Diskusi berpasangan dalam TPS bisa menjadi tempat melatih komunikasi, kerja sama, sikap saling menghargai, dan tanggung jawab. Tetapi saya juga sadar bahwa murid yang makin aktif belum tentu berarti kompetensi sosial emosionalnya ikut berkembang. Untuk menilainya, saya perlu pengamatan dan instrumen yang memang dirancang untuk itu.",
      artifacts: [
        { title: "Integrasi PSE dalam Sintaks Model Think Pair Share", type: "Modul Ajar", link: "#" },
        { title: "Lembar Observasi Kompetensi Sosial Emosional Murid", type: "Instrumen", link: "#" }
      ],
      reflection4C: {
        connection: "Mengintegrasikan 5 kompetensi sosial emosional (CASEL) ke dalam alur kerja kelompok Think Pair Share di kelas seni teater.",
        challenge: "Mengukur perkembangan kompetensi afektif dan sosial murid secara objektif dengan instrumen observasi yang tepat.",
        concept: "Kesejahteraan psikologis dan rasa aman di kelas merupakan pintu gerbang utama sebelum murid mampu mencerna materi akademis.",
        change: "Merancang instrumen lembar observasi sosial-emosional dan rutin membimbing etika kerja sama serta empati antar pasangan diskusi."
      }
    },
    {
      id: "mk-s2-10",
      code: "MK-S2-10",
      name: "Literasi dalam Lintas Mata Pelajaran",
      category: "sem2",
      categoryLabel: "Semester 2 // Inti",
      semester: "Semester 2",
      credits: "2 SKS",
      summary: "Literasi melampaui baca-tulis teks konvensional; dilatih lewat membaca sejarah teater, analisis naskah, dan penyampaian gagasan kritis.",
      fullNarrative: "Mata kuliah ini membuat saya melihat literasi lebih luas dari sekadar membaca dan menulis. Literasi juga berarti memahami informasi, menafsirkan sumber, membandingkan gagasan, dan menyampaikan pikiran secara kritis. Di Seni Budaya, hal itu bisa dilatih lewat membaca sejarah teater, mengenali jenis pertunjukan, memahami naskah, lalu menganalisis unsur dan maknanya. Murid kemudian dapat menyampaikan pemahamannya lewat tulisan atau diskusi. Saya belajar bahwa literasi bisa berjalan bersama pembelajaran seni tanpa menghilangkan pengalaman artistik yang menjadi inti mata pelajaran ini. Yang perlu saya jaga adalah porsinya, supaya murid tetap punya banyak waktu untuk berpraktik.",
      artifacts: [
        { title: "Panduan Literasi Kritis Membedah Naskah Lakon Teater", type: "LKPD Literasi", link: "#" },
        { title: "Strategi Integrasi Literasi Visual dalam Seni Tradisi", type: "Artikel", link: "#" }
      ],
      reflection4C: {
        connection: "Menghubungkan literasi kritis dengan apresiasi seni pertunjukan, pembacaan konteks budaya, dan pembedahan dramaturgi naskah.",
        challenge: "Menjaga proporsi waktu belajar agar pendalaman literasi teori tidak menyita porsi eksplorasi praktik berkesenian murid.",
        concept: "Literasi seni adalah kemampuan menafsirkan simbol estetis, pesan moral pementasan, dan menuangkannya ke dalam argumen lisan/tertulis.",
        change: "Mengembangkan lembar telaah naskah ringkas dan memicu diskusi berbasis bukti dari pertunjukan yang diamati murid."
      }
    },
    {
      id: "mk-s2-11",
      code: "MK-S2-11",
      name: "Literasi Kesehatan Mental",
      category: "sem2",
      categoryLabel: "Semester 2 // Pilihan",
      semester: "Semester 2",
      credits: "2 SKS",
      summary: "Menciptakan lingkungan belajar yang suportif secara psikologis, berempati, menjaga privasi, dan memahami batas koordinasi profesional.",
      fullNarrative: "Mata kuliah ini menyadarkan saya bahwa lingkungan belajar ikut menentukan kesejahteraan psikologis murid. Perubahan perilaku, rasa kurang percaya diri, tekanan belajar, atau kesulitan bergaul perlu disikapi dengan peduli dan hati-hati. Sebagai calon guru, saya ingin berkomunikasi dengan empati, menjaga privasi murid, dan tidak menempelkan label atau diagnosis tanpa dasar yang tepat. Saya juga belajar bahwa peran guru ada batasnya. Kalau murid memerlukan dukungan yang lebih khusus, guru perlu mengikuti prosedur sekolah dan berkoordinasi dengan pihak yang berwenang. Mengetahui batas ini justru membuat saya lebih tenang, karena saya tahu kapan harus mendampingi dan kapan harus meminta bantuan.",
      artifacts: [
        { title: "Protokol Komunikasi Empatik & Kerahasiaan Murid", type: "Pedoman", link: "#" },
        { title: "Panduan Kolaborasi Guru Mata Pelajaran dengan Guru BK", type: "SOP Sekolah", link: "#" }
      ],
      reflection4C: {
        connection: "Mengaitkan iklim psikologis kelas seni yang terbuka dengan kesehatan mental dan keberanian berekspresi peserta didik.",
        challenge: "Menghindari godaan melabeli murid atau bertindak di luar wewenang ketika murid menghadapi masalah psikologis yang kompleks.",
        concept: "Guru berperan sebagai pendengar empatik lini pertama, penjaga privasi murid, dan mitra kolaboratif guru Bimbingan Konseling (BK).",
        change: "Mengedepankan pendekatan personal tanpa penghakiman dan sigap berkoordinasi dengan konselor sekolah sesuai SOP bila diperlukan."
      }
    },
    {
      id: "mk-s2-12",
      code: "MK-S2-12",
      name: "Projek Kepemimpinan",
      category: "sem2",
      categoryLabel: "Semester 2 // Kolaborasi",
      semester: "Semester 2",
      credits: "2 SKS",
      summary: "Kepemimpinan melalui tanggung jawab nyata: mengelola divisi dokumentasi dan publikasi media sosial dalam kerja tim kolaboratif.",
      fullNarrative: "Lewat Projek Kepemimpinan, saya belajar bahwa memimpin tidak selalu berarti menjadi yang paling menonjol. Memimpin juga berarti menjalankan tanggung jawab, berkoordinasi, bekerja sama, dan membantu kelompok mencapai tujuannya. Dalam kelompok, saya kebagian dokumentasi dan pengelolaan media sosial. Tugas itu melatih saya mengatur informasi, merekam proses kegiatan, dan berkomunikasi dengan anggota lain. Saya belajar bahwa projek berjalan baik kalau pembagian tugasnya jelas, koordinasi dimulai sejak awal, dan setiap anggota sadar bahwa perannya, sekecil apa pun, berarti bagi hasil bersama. Saya pikir kebiasaan ini akan berguna ketika nanti bekerja bersama rekan guru.",
      artifacts: [
        { title: "Dokumentasi & Portofolio Manajemen Media Projek", type: "Laporan Projek", link: "#" },
        { title: "Evaluasi Koordinasi Tim & Manajemen Alur Kerja", type: "Refleksi Tim", link: "#" }
      ],
      reflection4C: {
        connection: "Menghubungkan kepemimpinan edukatif dengan manajemen kerja tim, koordinasi peran, dan komunikasi publik melalui media sosial.",
        challenge: "Menyelaraskan ritme kerja anggota kelompok dan menjaga konsistensi alur informasi dokumentasi kegiatan di lapangan.",
        concept: "Kepemimpinan sejati adalah melayani dan memastikan tiap anggota berkontribusi maksimal sesuai peran tanggung jawabnya.",
        change: "Membiasakan komunikasi terstruktur sejak awal proyek, transparansi arsip kerja, dan menghargai setiap kontribusi tim kerja."
      }
    },
    {
      id: "mk-s2-13",
      code: "MK-S2-13",
      name: "Seminar Pendidikan Profesi Guru",
      category: "sem2",
      categoryLabel: "Semester 2 // Inti Penutup",
      semester: "Semester 2",
      credits: "2 SKS",
      summary: "Menghubungkan perkuliahan dengan praktik sekolah; menyusun portofolio digital sebagai cetak biru rencana pengembangan diri berkelanjutan.",
      fullNarrative: "Seminar Pendidikan Profesi Guru memberi saya kesempatan menengok kembali perkembangan diri dan menghubungkan perkuliahan dengan praktik di sekolah. Saya makin paham bahwa profesionalisme guru terlihat dari tanggung jawab, etika, kemampuan berkolaborasi, dan kesediaan menerima masukan, selain dari penguasaan materi. Menyusun dan menyajikan portofolio melatih saya mengumpulkan bukti pembelajaran, menjelaskan proses refleksi, dan menyampaikan alasan di balik keputusan mengajar yang saya ambil. Dari sini saya belajar bahwa refleksi tidak boleh berhenti sebagai tulisan. Refleksi perlu berubah menjadi rencana pengembangan diri yang benar-benar saya jalani.",
      artifacts: [
        { title: "E-Portofolio Guru Profesional Fiko Kurnia Putra, S.Sn.", type: "Digital Archive", link: "#" },
        { title: "Naskah Sintesis Kritis Perjalanan Akademik PPG", type: "Naskah Seminar", link: "#" }
      ],
      reflection4C: {
        connection: "Merajut seluruh bukti artefak pembelajaran, data PPL, dan jurnal reflektif ke dalam E-Portofolio profesional yang bermakna.",
        challenge: "Melakukan sintesis kritis terhadap kelemahan diri selama praktik mengajar tanpa bersikap defensif terhadap masukan dosen & pamong.",
        concept: "Guru profesional adalah praktisi reflektif (reflective practitioner) yang menjadikan pengalaman mengajar sebagai laboratorium belajar.",
        change: "Berkomitmen menjadikan E-Portofolio sebagai dokumen hidup dan menindaklanjuti poin refleksi menjadi program aksi nyata di kelas."
      }
    },
    {
      id: "mk-s2-14",
      code: "MK-S2-14",
      name: "PPL Mandiri di SMAN 4 Semarang",
      category: "practice",
      categoryLabel: "Semester 2 // Praktik Mandiri",
      semester: "Semester 2",
      credits: "8 SKS",
      summary: "Penerapan model kooperatif Think Pair Share (TPS) berbantuan media audiovisual materi Dasar Teater di kelas X-2 SMAN 4 Semarang. Ketuntasan naik dari 40% ke 100%.",
      fullNarrative: "PPL Mandiri memberi saya peran yang lebih besar: merancang, melaksanakan, mengamati, lalu memperbaiki pembelajaran sendiri. Di kelas X-2 SMAN 4 Semarang, pada materi Dasar Teater, saya mendapati bahwa pembelajaran yang didominasi ceramah dan tanya jawab klasikal belum bisa melibatkan seluruh murid. Karena itu saya mencoba model kooperatif Think Pair Share (TPS) dengan bantuan media audiovisual. Murid menonton video pertunjukan, berpikir sendiri, berdiskusi dengan pasangan, lalu menyampaikan hasilnya kepada kelas. Ini pertama kalinya saya mengangkat masalah yang saya lihat sendiri di kelas, lalu mencoba menjawabnya dengan tindakan nyata.\n\nPada Siklus I, masih ada murid yang belum tuntas, beberapa pasangan belum berdiskusi dengan baik, dan pertanyaan di LKPD perlu dibuat lebih analitis. Maka di Siklus II saya memakai contoh visual yang lebih konkret, menyusun pertanyaan yang lebih terarah, menata ulang pasangan secara heterogen, mengatur waktu, dan memperkuat umpan balik dari guru. Perbaikan itu lahir dari apa yang saya lihat di kelas, bukan dari tebakan.\n\nDalam PTK yang saya susun, rata-rata nilai kelas naik dari 70,60 pada prasiklus menjadi 84,29 di Siklus I dan 94,60 di Siklus II. Ketuntasan belajar meningkat dari 40% menjadi 94,29%, lalu 100%. Keaktifan klasikal dalam kategori Aktif dan Sangat Aktif juga naik dari 14,29% menjadi 82,86%, kemudian 100%. Angka-angka ini menunjukkan perkembangan yang baik di kelas yang saya teliti. Meski begitu, saya sadar hasil ini harus dibaca sesuai konteks penelitiannya, dan belum tentu sama bila diterapkan di kelas lain.",
      artifacts: [
        { title: "Laporan Riset Tindakan Kelas (PTK) Think Pair Share", type: "Laporan PTK", link: "#" },
        { title: "Dokumentasi Siklus I & II Pembelajaran Dasar Teater", type: "Video & Foto", link: "#" }
      ],
      reflection4C: {
        connection: "Mengimplementasikan siklus PTK utuh berbasis model TPS berbantuan audiovisual untuk menyelesaikan masalah pasivitas kelas seni teater.",
        challenge: "Melakukan penataan ulang diferensiasi pasangan dan merestrukturisasi lembar kerja pada Siklus II berdasarkan hasil observasi Siklus I.",
        concept: "Riset tindakan kelas adalah instrumen saintifik guru untuk memvalidasi efektivitas perbaikan pedagogis berbasis bukti empiris kelas.",
        change: "Menguasai alur manajemen waktu diskusi berpasangan, penyusunan rubrik unjuk kerja, dan pembimbingan diferensiasi secara terukur."
      }
    }
  ],

  // ==========================================================================
  // SUB BAB 3: REFLEKSI PPG (PERJALANAN TRANSFORMATIF, PTK PPL, EVALUASI DIRI, & KOMITMEN)
  // ==========================================================================
  ppgHolisticReflection: {
    title: "Perjalanan Transformatif Calon Guru Profesional",
    quote: "PPG bukan sekadar sertifikasi formalitas kelayakan mengajar; ini adalah proses dekonstruksi dan rekonstruksi total atas cara saya memandang seorang anak manusia di dalam ruang kelas.",
    quoteAuthor: "Fiko Kurnia Putra, S.Sn. — Calon Guru Profesional",
    
    // 1. Pergeseran Paradigma Mengajar
    paradigmShift: [
      {
        aspect: "Fokus & Orientasi Mengajar",
        before: "Berorientasi pada ketuntasan materi kurikulum dan buku teks semata, memandang guru sebagai satu-satunya pusat informasi di depan kelas.",
        after: "Berpusat sepenuhnya pada peserta didik (Student-Centered). Guru bertindak sebagai fasilitator yang menemani dan menuntun potensi kodrat alam serta zaman murid.",
        badge: "PARADIGMA UTAMA"
      },
      {
        aspect: "Pendekatan Perancangan Ajar",
        before: "Menyusun skenario aktivitas yang ramai di awal tanpa kejelasan indikator capaian bukti pemahaman murid.",
        after: "Menerapkan Understanding by Design (UbD): menetapkan tujuan esensial, merumuskan bukti asesmen autentik, lalu merancang langkah eksplorasi.",
        badge: "METODOLOGI UBD"
      },
      {
        aspect: "Memandang Keberagaman Murid",
        before: "Memperlakukan seluruh murid dengan instruksi, kecepatan, dan lembar kerja seragam tanpa mempertimbangkan kesiapan.",
        after: "Menerapkan Pembelajaran Inklusif & Berdiferensiasi. Membuka ragam jalur partisipasi (ekspresi tampil, menulis naskah, tata panggung) secara adil.",
        badge: "INKLUSIF & DIFERENSIASI"
      },
      {
        aspect: "Fungsi & Makna Asesmen",
        before: "Asesmen hanya diposisikan sebagai penutup bab untuk memberi label nilai angka kuantitatif pada rapor murid.",
        after: "Asesmen sebagai bagian dari proses belajar. Menempatkan hasil penilaian sebagai petunjuk diagnosis untuk memperbaiki metode mengajar guru.",
        badge: "ASESMEN DIAGNOSTIK"
      }
    ],

    // 2. Riset Tindakan Kelas (PTK) PPL Mandiri SMAN 4 Semarang
    ptkCaseStudy: {
      school: "SMA Negeri 4 Semarang",
      targetClass: "Kelas X-2 (Materi Dasar Teater)",
      model: "Pembelajaran Kooperatif Think Pair Share (TPS) Berbantuan Media Audiovisual",
      problem: "Pembelajaran seni yang didominasi ceramah dan tanya jawab klasikal belum mampu melibatkan seluruh murid. Banyak murid pasif, ragu berekspresi, dan canggung berpendapat.",
      solution: "Mengintegrasikan media audiovisual pertunjukan teater sebagai stimulus pengamatan mandiri (Think), diskusi berpasangan heterogen (Pair), dan unjuk apresiasi bersama (Share).",
      cycleImprovement: "Pada Siklus I masih ada pasangan yang belum berdiskusi optimal dan soal LKPD kurang analitis. Pada Siklus II diperbaiki dengan contoh visual lebih konkret, pertanyaan terarah, penataan pasangan heterogen, manajemen waktu ketat, dan penguatan umpan balik guru.",
      metrics: [
        {
          label: "Rata-rata Nilai Kelas",
          prasiklus: "70,60",
          siklus1: "84,29",
          siklus2: "94,60",
          growth: "+24,00 Poin",
          status: "Peningkatan Signifikan"
        },
        {
          label: "Ketuntasan Belajar",
          prasiklus: "40,00%",
          siklus1: "94,29%",
          siklus2: "100%",
          growth: "+60,00%",
          status: "Tuntas Sempurna"
        },
        {
          label: "Keaktifan Klasikal (Aktif & Sangat Aktif)",
          prasiklus: "14,29%",
          siklus1: "82,86%",
          siklus2: "100%",
          growth: "+85,71%",
          status: "Partisipasi Total"
        }
      ]
    },

    // 3. Evaluasi Diri PPG Semester 2
    selfEvaluation: {
      strengths: {
        title: "Hal yang Sudah Berkembang",
        points: [
          "Pemahaman mendalam mengenai pembelajaran bermakna dan asesmen yang selaras dengan tujuan capaian pembelajaran.",
          "Kemampuan menerapkan pembelajaran inklusif yang menghargai keberagaman gaya berekspresi seni peserta didik.",
          "Kepekaan membaca kondisi sosial-emosional murid dan menciptakan ruang kelas yang aman tanpa rasa takut salah.",
          "Pemanfaatan media teknologi dan literasi sebagai jembatan apresiasi budaya tanpa menghilangkan pengalaman praktik langsung.",
          "Keterampilan menghubungkan konsep pedagogis dengan masalah riil kelas melalui riset tindakan berbasis bukti nyata (PTK PPL Mandiri)."
        ]
      },
      areasForGrowth: {
        title: "Hal yang Masih Perlu Saya Latih",
        points: [
          "Menyesuaikan fleksibilitas alur kegiatan dengan ritme kebutuhan murid yang dinamis di setiap pertemuan.",
          "Manajemen waktu dan pengendalian dinamika kelas agar seluruh fase pembelajaran terlaksana proporsional.",
          "Memberikan kesempatan berpartisipasi secara merata bagi murid yang cenderung pendiam atau lambat beradaptasi.",
          "Konsistensi memanfaatkan umpan balik dari guru pamong, dosen pembimbing, dan murid untuk langsung diterjemahkan ke tindakan kelas berikutnya."
        ]
      }
    },

    // 4. Refleksi Akhir Perjalanan & Komitmen Tindak Lanjut
    finalReflection: {
      headline: "Refleksi Akhir Perjalanan Dua Semester PPG",
      narrative: "Setelah dua semester PPG, saya melihat peran guru dengan lebih utuh: sebagai pendidik, fasilitator, pembimbing, sekaligus orang yang terus belajar. Semester 1 memberi saya fondasi tentang karakter murid, filosofi pendidikan, pembelajaran mendalam, teknologi, dan pola pikir bertumbuh. Semester 2 mematangkannya lewat pembelajaran inklusif, sosial emosional, literasi, kesehatan mental, kepemimpinan, dan pengalaman PPL Mandiri.\n\nPengalaman yang paling berkesan bagi saya adalah ketika menghadapi masalah nyata di pembelajaran Dasar Teater di SMAN 4 Semarang, lalu mencoba mengatasinya dengan TPS berbantuan media audiovisual. Dari situ saya belajar bahwa guru perlu berani mengubah cara mengajar, memperhatikan respons murid, mengevaluasi hasilnya, dan memperbaiki strategi berdasarkan bukti, bukan perasaan semata.\n\nSebagai calon guru Seni Budaya berlatar Seni Karawitan, saya ingin pembelajaran yang saya hadirkan tidak hanya menumbuhkan pengetahuan dan keterampilan seni, tetapi juga kepekaan, kreativitas, karakter, kerja sama, dan penghargaan pada keberagaman budaya. Saya ingin menjadi guru yang bisa mempertemukan kekayaan seni dan tradisi dengan kebutuhan pendidikan hari ini lewat cara yang inovatif, inklusif, dan bermakna.",
      commitments: [
        {
          number: "01",
          title: "Pembelajaran yang Berpihak pada Murid",
          desc: "Merancang pembelajaran Seni Budaya dengan perencanaan matang yang memberi ruang luas bagi murid untuk berpikir kritis, berekspresi bebas, dan bekerja sama."
        },
        {
          number: "02",
          title: "Inovasi Pembelajaran yang Adaptif & Reusable",
          desc: "Mengembangkan media dan model ajar seni yang dapat dipakai ulang, disesuaikan dengan karakter unik setiap kelas, serta dievaluasi dengan bukti relevan."
        },
        {
          number: "03",
          title: "Praktisi Reflektif Sepanjang Hayat",
          desc: "Menjadikan kebiasaan refleksi berkala bukan sekadar dokumen administratif, melainkan pijakan pengembangan diri profesional yang terus tumbuh."
        },
        {
          number: "04",
          title: "Pelebur Tradisi Karawitan & Pedagogi Modern",
          desc: "Menghubungkan kekayaan seni tradisi dengan pendekatan pedagogi mutakhir agar generasi muda mencintai dan melestarikan warisan budaya bangsanya."
        }
      ]
    },

    // 5. Kalimat Penutup Estetik (Special Aesthetic Quote)
    aestheticQuote: {
      text: "Menjadi guru, bagi saya, bukan soal sempurna sejak hari pertama. Yang terpenting adalah mau terus belajar, merenungkan pengalaman, memperbaiki kekurangan, dan memberi setiap murid kesempatan untuk bertumbuh. Saya ingin menjadi guru Seni Budaya yang kreatif merancang pembelajaran, inklusif dalam menghargai keberagaman, dan reflektif dalam membenahi diri, supaya ilmu, seni, dan budaya yang saya ajarkan sungguh bermakna bagi kehidupan murid.",
      author: "Fiko Kurnia Putra, S.Sn.",
      role: "Calon Pendidik Seni Budaya | PPG Prajabatan Universitas Negeri Semarang (SMAN 4 Semarang)"
    }
  },

  // Jurnal Refleksi Profesional
  reflections: [
    {
      id: "ref-01",
      date: "14 Maret 2025",
      category: "Diferensiasi Pembelajaran",
      title: "Ketika Rencana Pelajaran Sempurna Menemui Realitas Kelas",
      situation: "Menguji modul ajar berdiferensiasi pertama kali di kelas dengan kesiapan belajar yang sangat kontras.",
      findings: "Sebagian murid cepat merasa jenuh dengan materi dasar, sementara beberapa murid lain membutuhkan instruksi berulang pada terminologi dasar.",
      challenges: "Mengelola waktu fasilitasi secara seimbang agar tidak ada kelompok yang merasa diabaikan atau dianaktirikan.",
      actionPlan: "Menyediakan kartu panduan mandiri (visual scaffold) untuk kelompok lanjutan sehingga guru dapat fokus membimbing kelompok yang memerlukan scaffolding intensif."
    },
    {
      id: "ref-02",
      date: "28 November 2024",
      category: "Asesmen Autentik",
      title: "Membongkar Mitos: Mengapa Nilai 100 Tidak Selalu Berarti Paham",
      situation: "Menemukan murid yang meraih nilai sempurna pada tes pilihan ganda tetapi kesulitan saat diminta menjelaskan fenomena pada objek nyata.",
      findings: "Penilaian berbasis pilihan ganda seringkali mengukur daya ingat kata kunci (recall), bukan pemahaman konseptual yang mendalam.",
      challenges: "Menyusun instrumen penilaian autentik yang praktis diperiksa namun mampu menangkap kedalaman berpikir murid.",
      actionPlan: "Mengalihkan sebagian porsi ujian akhir menjadi mini-portofolio dan presentasi lisan singkat menggunakan rubrik kriteria terbuka."
    },
    {
      id: "ref-03",
      date: "10 Agustus 2024",
      category: "Teknologi & Kemanusiaan",
      title: "Teknologi di Kelas: Mempermudah Guru atau Mengalihkan Murid?",
      situation: "Menerapkan platform kuis digital di awal pembelajaran untuk mengecek pemahaman awal materi.",
      findings: "Murid sangat antusias dengan skor dan kecepatan, tetapi seringkali melewatkan esensi penjelasan di balik jawaban yang salah.",
      challenges: "Menghindari efek 'gamifikasi dangkal' yang hanya memicu lonjakan dopamin sesaat tanpa refleksi pemahaman.",
      actionPlan: "Memasukkan jeda diskusi wajib 3 menit setelah setiap 3 pertanyaan kuis untuk mendiskusikan mengapa jawaban tersebut logis."
    },
    {
      id: "ref-04",
      date: "20 Mei 2024",
      category: "Relasi Guru & Murid",
      title: "Mendengarkan Pertanyaan yang Tidak Pernah Berani Diucapkan",
      situation: "Mengadakan kotak pertanyaan anonim di akhir pekan pembelajaran untuk menampung uneg-uneg belajar murid.",
      findings: "Banyak murid memendam kebingungan karena takut dianggap lambat oleh teman sekelasnya.",
      challenges: "Membangun atmosfer kelas yang suportif di mana murid saling merayakan pertanyaan yang diajukan temannya.",
      actionPlan: "Mengawali setiap sesi dengan mengapresiasi 'pertanyaan terbaik minggu ini' dan membedahnya bersama secara terbuka."
    }
  ],

  // Bukti & Dokumen Pendukung (Evidence Archive)
  documents: [
    {
      id: "doc-01",
      number: "DOC-01",
      title: "Modul Ajar Terpadu: Desain Pembelajaran Berdiferensiasi",
      category: "Modul & RPP",
      fileType: "PDF",
      fileSize: "2.4 MB",
      desc: "Dokumen rancangan modul ajar lengkap dengan pemetaan capaian, asesmen diagnostik, lembar kerja, dan rubrik asesmen autentik.",
      actionLabel: "Lihat Ringkasan",
      previewData: {
        author: "Fiko, S.Pd.",
        date: "2024",
        scope: "Kurikulum Merdeka / Fase D",
        highlights: "Alur Pembelajaran Mundur (UbD), Diferensiasi Konten & Produk, Rubrik Holistik"
      }
    },
    {
      id: "doc-02",
      number: "DOC-02",
      title: "Perangkat LKPD Kontekstual Berbasis Masalah Nyata",
      category: "LKPD",
      fileType: "PDF",
      fileSize: "3.1 MB",
      desc: "Lembar Kerja Peserta Didik dengan tata letak editorial, panduan investigasi terstruktur, dan instruksi berbasis penyelidikan kelompok.",
      actionLabel: "Lihat Ringkasan",
      previewData: {
        author: "Fiko, S.Pd.",
        date: "2024",
        scope: "Pembelajaran Berbasis Proyek (PjBL)",
        highlights: "Desain Berwarna Ramah Cetak, Panduan Kolaborasi Tim, Lembar Refleksi Diri"
      }
    },
    {
      id: "doc-03",
      number: "DOC-03",
      title: "Panduan & Matriks Rubrik Asesmen Diagnostik",
      category: "Asesmen",
      fileType: "PDF",
      fileSize: "1.2 MB",
      desc: "Panduan praktis perancangan instrumen penilaian awal untuk mendeteksi kesiapan kognitif serta profil minat belajar murid.",
      actionLabel: "Lihat Ringkasan",
      previewData: {
        author: "Fiko, S.Pd.",
        date: "2024",
        scope: "Pedoman Evaluasi Formatif",
        highlights: "Format Kuesioner Diagnostik, Matriks Skor 4 Tingkat, Panduan Tindak Lanjut"
      }
    },
    {
      id: "doc-04",
      number: "DOC-04",
      title: "Sertifikat Pelatihan Nasional: Desain Media & EdTech",
      category: "Sertifikasi",
      fileType: "Sertifikat",
      fileSize: "Verifikasi Tersedia",
      desc: "Sertifikat kompetensi pelatihan perancangan media digital interaktif dan manajemen kurikulum inovatif.",
      actionLabel: "Lihat Bukti",
      previewData: {
        issuer: "Lembaga Pelatihan Pendidik Profesional [GANTI DENGAN PENERBIT ASLI]",
        year: "2024",
        credentialId: "CERT-EDU-2024-0891 [CONTOH]",
        status: "Tervalidasi"
      }
    },
    {
      id: "doc-05",
      number: "DOC-05",
      title: "Kompilasi Laporan Refleksi & Riset Kelas Mandiri",
      category: "Laporan Riset",
      fileType: "PDF",
      fileSize: "1.8 MB",
      desc: "Kumpulan catatan observasi terstruktur, evaluasi keterlaksanaan modul, dan rekomendasi perbaikan berkala.",
      actionLabel: "Lihat Ringkasan",
      previewData: {
        author: "Fiko, S.Pd.",
        date: "2025",
        scope: "Classroom Action Notes",
        highlights: "Studi Kasus Kelas Heterogen, Evaluasi Keterlibatan Murid, Rencana Tindak Lanjut"
      }
    },
    {
      id: "doc-06",
      number: "DOC-06",
      title: "Presentasi Konsep: Membangun Ekosistem Kelas Eksploratif",
      category: "Presentasi",
      fileType: "Slide",
      fileSize: "4.5 MB",
      desc: "Dek materi presentasi lokakarya pendidik mengenai teknik scaffolding visual dan pemanfaatan media kontekstual.",
      actionLabel: "Lihat Ringkasan",
      previewData: {
        presenter: "Fiko",
        event: "Lokakarya Pendidik Kreatif 2024",
        slidesCount: "24 Slides",
        highlights: "Visual Storytelling, Studi Kasus Kelas, Panduan Desain Lembar Kerja"
      }
    }
  ]
};
