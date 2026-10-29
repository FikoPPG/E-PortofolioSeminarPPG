# THE CREATIVE EDUCATOR ARCHIVE — PERSONAL E-PORTFOLIO 2026
**Konsep Visual:** *Digital Editorial × Creative Portfolio × Modern Academic × Playful Brutalism*

Website e-Portfolio personal premium, interaktif, responsif, dan fleksibel untuk **Fiko, S.Pd. (Learning Experience Designer & Creative Educator)**.

---

## 🌟 FITUR UTAMA

1. **Editorial Brutalist Design System:**
   - Palet warna konsisten: *Warm Paper (`#F6F3EC`)*, *Ink Black (`#191919`)*, *Electric Lime (`#D7FF64`)*, *Cobalt Blue (`#3457F1`)*, dan *Soft Gray (`#E7E5DF`)*.
   - Tipografi berkarakter editorial: **Space Grotesk** (display), **Plus Jakarta Sans** (konten utama), dan **JetBrains Mono** (arsip/metadata).
   - Mode Terang / Gelap (*Dark Mode*) dengan toggle instan dan persistensi di `localStorage`.

2. **Interaktivitas Nyata (Zero Broken Features):**
   - **Continuous Ticker / Marquee Banner:** Banner tipografi bergerak dinamis.
   - **Filter Kategori Proyek:** Filter instan (*Digital Innovation, Teaching Media, Assessment, Learning Design*).
   - **Pencarian Real-Time:** Filter proyek berdasarkan kata kunci atau tag.
   - **Modal Detail Proyek:** Dialog dapat diakses via keyboard (tombol Escape, focus management, backdrop click).
   - **Jurnal Refleksi:** Catatan pembelajaran profesional dengan modal ringkasan lengkap.
   - **Arsip Dokumen:** Penampil berkas modul ajar, LKPD, sertifikat, dan laporan riset.
   - **Salin Surel ke Clipboard:** Tombol salin email dengan notifikasi toast visual yang halus.
   - **Jam Digital Real-Time:** Jam digital WIB (Asia/Jakarta) dinamis pada bagian footer.
   - **Tombol Kembali ke Atas:** Muncul otomatis ketika halaman digulir melebihi 400px.
   - **Menu Mobile Responsif:** Drawer navigasi mobile dengan animasi transisi mulus.

---

## 📁 STRUKTUR FOLDER PROYEK

```
d:\E-Portofolio Fiko\
├── index.html              # Markup semantik HTML5, ARIA labels, meta tags SEO
├── start-server.ps1        # Server lokal mandiri (Powershell HttpListener, 0 dependensi)
├── README.md               # Dokumentasi panduan proyek
├── css/
│   ├── variables.css       # Token desain, variabel warna, tipografi, dark mode
│   ├── base.css            # Reset, hierarki teks, noise texture, container
│   ├── components.css      # Navbar, tombol brutalist, filter, modal, toast
│   ├── sections.css        # Tata letak tiap section (Hero, About, Projects, dll)
│   └── responsive.css      # Breakpoints layar HP (360-480px), tablet, laptop
├── js/
│   ├── data.js             # PUSAT DATA: Ganti seluruh profil, proyek & dokumen di sini!
│   ├── theme.js            # Pengontrol dark/light mode
│   ├── navigation.js       # Sticky navbar, ScrollSpy active indicator, mobile drawer
│   ├── projects.js         # Logika filter kategori, pencarian, dan modal proyek
│   ├── reflections.js      # Logika kartu jurnal refleksi dan modal baca
│   ├── documents.js        # Logika arsip dokumen dan preview berkas
│   ├── interactions.js     # Toast, salin email, jam WIB, formulir kontak
│   └── main.js             # Inisialisasi utama aplikasi
└── assets/
    └── images/
        ├── fiko-portrait.jpg       # Foto profil editorial resolusi tinggi
        ├── project-edtech.jpg      # Mockup proyek EduVenture
        ├── project-lkpd.jpg        # Mockup proyek LKPD kontekstual
        └── project-assessment.jpg  # Mockup instrumen asesmen diagnostik
```

---

## 🚀 CARA MENJALANKAN WEBSITE

### Opsi 1: Menggunakan Script Server Lokal (Rekomendasi)
Buka PowerShell di dalam folder proyek, lalu jalankan:
```powershell
powershell -ExecutionPolicy Bypass -File .\start-server.ps1
```
Buka browser pada alamat: **`http://localhost:5173/`**

### Opsi 2: Membuka Langsung Berkas HTML
Karena menggunakan teknologi web standar modern (*zero-build architecture*), Anda juga dapat langsung mengklik dua kali berkas **`index.html`** pada Windows Explorer.

---

## ✏️ CARA MEMPERBARUI KONTEN ANDA

Seluruh konten website dipisahkan secara rapi di dalam berkas **[`js/data.js`](file:///d:/E-Portofolio%20Fiko/js/data.js)**:

1. **Biodata & Gelar:** Buka `js/data.js` dan ubah bagian `PORTFOLIO_DATA.profile` (Nama lengkap, peran, lokasi, email aktif, tautan sosial).
2. **Karya & Proyek:** Tambah atau ubah data di array `PORTFOLIO_DATA.projects`.
3. **Rekam Jejak & Riwayat:** Sesuaikan tahun dan pencapaian pada array `PORTFOLIO_DATA.journey`.
4. **Jurnal Refleksi:** Tambahkan refleksi baru pada array `PORTFOLIO_DATA.reflections`.
5. **Dokumen & Sertifikat:** Tambahkan berkas pendukung pada array `PORTFOLIO_DATA.documents`.

---

## 🌐 DEPLOY KE INTERNET (GRATIS)

Website ini 100% siap diunggah ke:
- **GitHub Pages:** Dorong folder ini ke repositori GitHub, aktifkan GitHub Pages pada tab Settings.
- **Vercel / Netlify:** Drag & drop folder ini langsung pada dashboard Netlify / Vercel.
