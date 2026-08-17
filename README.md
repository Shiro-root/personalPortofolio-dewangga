# Portofolio — Dewangga

Website portofolio developer, gaya studio digital premium (terinspirasi prinsip desain Apple/Linear/Stripe/Vercel — bukan meniru tampilannya): whitespace luas, tipografi besar, layout editorial, tanpa elemen "techy" seperti terminal atau code snippet dekoratif.

Dibangun dengan **React + Vite + Tailwind CSS v4 + React Router**.

## Jalankan di lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Edit isi konten

Semua teks dan data proyek ada di **satu file**:

```
src/data/content.js
```

Termasuk: profil & hero copy, layanan, tahapan proses, prinsip trust, dan **data lengkap tiap proyek** (nama, kategori, deskripsi singkat, tantangan, solusi, fitur, hasil, teknologi). Halaman detail proyek (`/proyek/:slug`) otomatis terisi dari data ini — tidak perlu bikin halaman baru untuk tiap proyek.

Untuk ganti screenshot proyek: ganti nilai `seed` pada tiap project di `content.js` (saat ini pakai `picsum.photos` sebagai placeholder), atau ganti langsung `src` gambar di `src/components/BrowserFrame.jsx` dengan screenshot asli (taruh file di `public/` lalu arahkan `src="/nama-file.png"`).

## Struktur

```
src/
  data/content.js         ← edit di sini untuk ganti isi & proyek
  layouts/Layout.jsx      ← navbar + footer + scroll-to-hash
  pages/
    Home.jsx              ← merangkai semua section halaman utama
    ProjectDetail.jsx      ← halaman studi kasus tiap proyek (/proyek/:slug)
  components/
    Navbar.jsx             ← sticky, transparan-blur, CTA "Diskusi Proyek"
    Hero.jsx                ← headline besar, tanpa ilustrasi
    FeaturedWork.jsx        ← galeri proyek, layout editorial (full-width / split)
    BrowserFrame.jsx        ← mockup browser untuk screenshot
    Services.jsx            ← daftar layanan minimal (divided list)
    Process.jsx              ← 4 langkah kerja
    About.jsx                 ← intro singkat + tech stack kecil
    Trust.jsx                  ← 3 prinsip (Simple / Reliable / Practical)
    CTA.jsx                     ← ajakan diskusi via WhatsApp
    Footer.jsx
```

## Build untuk produksi

```bash
npm run build
```

Hasil build ada di folder `dist/`.

## Deploy ke Vercel

1. Push folder ini ke repo GitHub.
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → import repo tersebut.
3. Build Command: `npm run build`, Output Directory: `dist`.
4. Klik **Deploy**.

`vercel.json` sudah menyediakan rewrite SPA supaya halaman `/proyek/...` tidak 404 saat diakses langsung atau di-refresh.

## Deploy ke Netlify

1. Push ke GitHub, lalu import di Netlify — atau drag-drop folder `dist/` (setelah `npm run build`) ke [app.netlify.com/drop](https://app.netlify.com/drop).
2. Jika deploy dari Git: Build command `npm run build`, publish directory `dist`.

`netlify.toml` sudah menyediakan redirect SPA yang sama.

## Catatan design

- Warna: latar off-white hangat (`#FBFAF8`), teks nyaris hitam (`#15140F`), abu-abu netral untuk teks sekunder, satu warna accent (`#0F6B5C`) dipakai hemat — hanya untuk label kecil, tag kategori, dan underline hover.
- Tipografi: Inter, jadi elemen desain utama (heading besar, hierarchy jelas).
- Tidak ada terminal animation, code snippet dekoratif, gradient, atau badge teknologi berlebihan — teknologi hanya muncul kecil di bagian bawah tiap halaman proyek.
- Semua token warna & radius diatur di `src/index.css` (`@theme`) — ubah `--color-*` di sana untuk reskin global.
