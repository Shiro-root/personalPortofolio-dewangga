// ─────────────────────────────────────────────────────────────
// SATU-SATUNYA FILE YANG PERLU DIEDIT UNTUK GANTI ISI PORTOFOLIO
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Dewangga",
  fullName: "Dewangga Tirta Kencana",
  heroHeading: "Website dan sistem digital yang membantu bisnis bekerja lebih baik.",
  heroSubheading:
    "Saya membantu bisnis dan organisasi membangun website profesional dan sistem yang sederhana, cepat, dan mudah digunakan.",
  credibility: "Website • Sistem Informasi • Digital Solutions",
  aboutIntro:
    "Saya adalah web developer yang berfokus pada pembuatan website dan sistem digital yang sederhana, cepat, dan mudah digunakan.",
  aboutBody:
    "Latar belakang saya di bidang Sistem Informasi, dan sejak itu saya lebih tertarik menyelesaikan masalah operasional nyata dibanding sekadar membangun fitur. Cara kerja saya dimulai dari memahami proses bisnis klien terlebih dahulu, baru menerjemahkannya menjadi struktur, tampilan, dan sistem yang benar-benar dipakai sehari-hari.",
  email: "halo@dewangga.dev",
  whatsapp: "https://wa.me/6289652546202",
  whatsappDisplay: "+62 896-5254-6202",
  socials: [
    { label: "GitHub", href: "https://github.com/Shiro-root" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dewangga-tirta-kencana-9746433a9/" },
  ],
};

export const stack = [
  "React", "Next.js", "Node.js", "Express","Laravel",
  "PostgreSQL", "Mysql", "Tailwind CSS",
];

export const services = [
  {
    id: "website-bisnis",
    title: "Website Bisnis",
    desc: "Website profesional untuk memperkenalkan bisnis, layanan, produk, dan kontak.",
  },
  {
    id: "sistem-manajemen",
    title: "Sistem Manajemen",
    desc: "Sistem untuk membantu mengelola stok, data, transaksi, atau operasional.",
  },
  {
    id: "sistem-internal",
    title: "Sistem Internal",
    desc: "Aplikasi internal untuk membantu organisasi mengelola pekerjaan dan informasi.",
  },
  {
    id: "custom-website",
    title: "Custom Website",
    desc: "Website atau sistem yang disesuaikan dengan kebutuhan bisnis.",
  },
];

export const process = [
  {
    step: "01",
    title: "Diskusi",
    desc: "Memahami kebutuhan dan masalah bisnis.",
  },
  {
    step: "02",
    title: "Perencanaan",
    desc: "Menentukan struktur, fitur, dan tampilan.",
  },
  {
    step: "03",
    title: "Pengembangan",
    desc: "Membangun dan menguji sistem.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Website/sistem siap digunakan.",
  },
];

export const trust = [
  {
    title: "Simple",
    desc: "Tidak membuat fitur yang tidak diperlukan.",
  },
  {
    title: "Reliable",
    desc: "Sistem dibuat agar stabil dan mudah digunakan.",
  },
  {
    title: "Practical",
    desc: "Fokus pada solusi yang benar-benar berguna untuk bisnis.",
  },
];

// layout: "full" = full-width visual, "split" = large visual + text side by side
export const projects = [
  {
    id: "company-profile",
    name: "Company Profile",
    category: "Website Bisnis",
    shortDesc:
      "Website perusahaan untuk memperkenalkan profil, layanan, dan portofolio kerja secara profesional.",
    layout: "full",
    seed: "company-profile-site",
    challenge:
      "Perusahaan belum punya kehadiran digital yang mencerminkan skala bisnisnya. Calon klien sering ragu sebelum menghubungi karena tidak ada referensi profil yang jelas.",
    solution:
      "Dibangun website company profile dengan struktur yang jelas — profil, layanan, portofolio, dan kontak — supaya calon klien bisa memahami bisnis dalam hitungan detik.",
    features: [
      "Halaman profil perusahaan",
      "Daftar layanan",
      "Galeri portofolio kerja",
      "Formulir kontak",
      "Optimasi untuk pencarian Google",
    ],
    result:
      "Calon klien kini bisa mengenal bisnis lebih cepat sebelum menghubungi, sehingga percakapan awal jadi lebih terarah.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: "inventory-management",
    name: "Inventory Management System",
    category: "Sistem Manajemen",
    shortDesc:
      "Sistem untuk membantu bisnis mengelola stok, transaksi, dan laporan secara terpusat.",
    layout: "split",
    seed: "inventory-management-app",
    challenge:
      "Pencatatan stok masih dilakukan manual lewat buku dan spreadsheet terpisah, membuat data sering tidak sinkron antara gudang dan bagian penjualan.",
    solution:
      "Dibangun sistem terpusat yang mencatat stok masuk-keluar secara real-time, sehingga seluruh tim melihat data yang sama tanpa perlu rekonsiliasi manual.",
    features: [
      "Manajemen stok masuk dan keluar",
      "Pencatatan transaksi",
      "Dashboard ringkasan",
      "Laporan otomatis",
      "Manajemen pengguna dan hak akses",
    ],
    result:
      "Waktu penyusunan laporan bulanan berkurang signifikan, dan selisih stok jadi lebih mudah dilacak.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: "helpdesk-ticketing",
    name: "Helpdesk Ticketing System",
    category: "Sistem Internal",
    shortDesc:
      "Sistem tiket untuk membantu tim internal mencatat, melacak, dan menyelesaikan permintaan dukungan.",
    layout: "full",
    seed: "helpdesk-ticketing-app",
    challenge:
      "Permintaan bantuan dari berbagai divisi masuk lewat chat pribadi dan email, sehingga sering terlewat atau tidak jelas siapa yang menangani.",
    solution:
      "Dibangun sistem tiket sederhana di mana setiap permintaan tercatat, diberi status, dan ditugaskan ke penanggung jawab yang jelas.",
    features: [
      "Pembuatan dan pelacakan tiket",
      "Status dan prioritas permintaan",
      "Penugasan ke tim terkait",
      "Riwayat percakapan per tiket",
      "Dashboard status keseluruhan",
    ],
    result:
      "Permintaan dukungan lebih jarang terlewat, dan setiap tim tahu prioritas kerja mereka setiap hari.",
    tech: ["Laravel", "Tailwind", "MySQL"],
  },
  {
    id: "proposal-monitoring",
    name: "Proposal Monitoring System",
    category: "Sistem Internal",
    shortDesc:
      "Sistem untuk memantau status pengajuan proposal dari draf sampai disetujui.",
    layout: "split",
    seed: "proposal-monitoring-app",
    challenge:
      "Status proposal — mulai dari diajukan, direvisi, sampai disetujui — hanya diketahui lewat tanya langsung ke penanggung jawab, sehingga sulit dipantau atasan.",
    solution:
      "Dibangun sistem pemantauan yang menampilkan status tiap proposal secara transparan, lengkap dengan riwayat revisi dan pihak yang bertanggung jawab.",
    features: [
      "Pengajuan dan revisi proposal",
      "Status berjenjang (draf, revisi, disetujui)",
      "Riwayat perubahan",
      "Notifikasi status",
      "Dashboard ringkasan untuk atasan",
    ],
    result:
      "Atasan bisa memantau progres proposal tanpa harus menanyakan satu per satu, mempercepat proses persetujuan.",
    tech: ["React", "Express", "PostgreSQL"],
  },
];
