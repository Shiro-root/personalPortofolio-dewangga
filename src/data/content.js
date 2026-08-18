// ─────────────────────────────────────────────────────────────
// SATU-SATUNYA FILE YANG PERLU DIEDIT UNTUK GANTI ISI PORTOFOLIO
// ─────────────────────────────────────────────────────────────

import kpmGroupImg from "../assets/img/kpm-group.png";
import lppmDarmajayaImg from "../assets/img/lppm-darmajaya.png";
import helpdeskTicketingImg from "../assets/img/ss-helpdesk.png";
// Tambahkan import gambar project lain di sini


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
    id: "kpm-group",
    name: "KPM Group — Company Profile",
    category: "Website Bisnis",
    shortDesc:
      "Website company profile untuk PT. Kurniawan Power Mandiri, lengkap dengan admin panel untuk mengelola konten sendiri.",
    layout: "full",
    seed: "kpm-group-site",
    image: kpmGroupImg,
    challenge:
      "PT. Kurniawan Power Mandiri belum punya kehadiran digital yang mencerminkan skala bisnisnya di bidang konstruksi dan engineering. Konten seperti hero, layanan, dan logo divisi juga perlu bisa diperbarui sendiri oleh tim internal tanpa bergantung pada developer.",
    solution:
      "Dibangun website company profile dengan Laravel dan admin panel Filament, sehingga tim internal bisa mengelola hero slider, layanan, dan logo divisi sendiri dari dashboard tanpa menyentuh kode.",
    features: [
      "Hero slider yang dikelola lewat admin panel",
      "Kartu layanan dengan tampilan modal",
      "Integrasi logo divisi dari admin panel ke halaman utama",
      "Bento grid untuk bagian \"Why Us\"",
      "Admin panel berbahasa Indonesia (Filament)",
    ],
    result:
      "Perusahaan kini punya website profesional yang mencerminkan skala bisnisnya, dengan konten yang bisa diperbarui sendiri oleh tim internal kapan saja.",
    tech: ["Laravel", "Filament", "Tailwind CSS", "Alpine.js", "Vite"],
    demo: "https://kpmgroupofficial.co.id/",
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
    image: helpdeskTicketingImg,
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
    demo: "https://ticketingdesk.freedev.app",
  },
  {
    id: "lppm-darmajaya",
    name: "Sistem Pengelolaan Proposal LPPM Darmajaya",
    category: "Sistem Internal",
    shortDesc:
      "Platform untuk LPPM IIB Darmajaya dalam mengelola proposal penelitian dan pengabdian masyarakat dari pengajuan sampai disetujui.",
    layout: "split",
    seed: "lppm-darmajaya-app",
    image: lppmDarmajayaImg,
    challenge:
      "Proses pengajuan proposal penelitian dan pengabdian di IIB Darmajaya masih sulit dipantau — dosen dan pihak LPPM tidak punya cara terpusat untuk melihat status proposal, skema pendanaan, atau panduan yang berlaku sesuai Panduan LPPM 2025.",
    solution:
      "Dibangun sistem terintegrasi berbasis Laravel dengan validasi multi-level, sehingga pengajuan, skema pendanaan, alur kerja, dan template dokumen bisa diakses transparan lewat satu portal.",
    features: [
      "Portal pengajuan proposal penelitian dan pengabdian",
      "Validasi status berjenjang (multi-level)",
      "Informasi skema pendanaan dan alur kerja",
      "Panduan dan template dokumen yang bisa diunduh",
      "Portal login untuk dosen dan pengelola LPPM",
    ],
    result:
      "LPPM dan dosen kini punya satu sistem terpusat untuk mengelola proposal secara transparan dan efisien, sesuai Panduan LPPM IIB Darmajaya 2025.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    demo: "https://lp2m.darmajaya.ac.id/",
  },
];
