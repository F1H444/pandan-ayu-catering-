# 🍚 Pandan Ayu Catering

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

**Pandan Ayu Catering** adalah sebuah website profil bisnis (Company Profile / Landing Page) modern yang dibangun khusus untuk layanan katering yang berbasis di Sidoarjo, Jawa. Website ini dirancang untuk mempermudah calon pelanggan melihat daftar menu, keunggulan, serta langsung melakukan pemesanan melalui integrasi WhatsApp.

🔗 **Live Demo:** [pandanayucatering.vercel.app](https://pandanayucatering.vercel.app)

---

## ✨ Fitur Utama

- **Modern & Responsive Design:** Tampilan website yang memanjakan mata, sangat responsif di perangkat Mobile, Tablet (iPad), maupun Desktop. Menggunakan pendekatan desain yang dinamis dan berkelas.
- **WhatsApp Integration:** Calon pelanggan dapat langsung berinteraksi dan memesan melalui tombol *Call-to-Action* yang terhubung ke nomor WhatsApp admin dengan format pesan yang sudah disesuaikan.
- **Menu Brosur Digital:** Menampilkan brosur dan paket katering dalam bentuk galeri gambar yang ringan dan interaktif.
- **SEO Optimized:** Telah dilengkapi dengan *Technical SEO* tingkat tinggi termasuk Schema Markup (JSON-LD), Semantic HTML, Metadata lengkap, `robots.txt`, dan Sitemap otomatis.
- **Enterprise-Grade Security Headers:** Dilindungi dari serangan XSS, Clickjacking, dan MIME sniffing berkat konfigurasi *Content Security Policy (CSP)* yang ketat di `next.config.ts`.
- **Smooth Animations:** Memanfaatkan teknik *Scroll Reveal* dan micro-animations menggunakan CSS murni (Vanilla CSS & styled-jsx) untuk pengalaman pengguna yang interaktif namun tetap ringan.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library UI:** [React 19](https://react.dev/)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS murni dengan integrasi bawaan `styled-jsx` untuk *scoped styling* tingkat komponen.
- **Tipografi:** Google Fonts (`next/font/google`) menggunakan *Lora* dan *Outfit*.
- **Hosting / Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Cara Menjalankan Secara Lokal (Local Development)

Jika Anda ingin menjalankan atau memodifikasi kode dari website ini secara lokal, ikuti langkah-langkah berikut:

1. **Clone repository ini**
   ```bash
   git clone https://github.com/F1H444/pandan-ayu-catering-.git
   cd pandan-ayu-catering-
   ```

2. **Install dependensi**
   Anda bisa menggunakan `npm`, `yarn`, atau `pnpm`:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```

4. **Buka di Browser**
   Buka [http://localhost:3000](http://localhost:3000) di *browser* Anda untuk melihat hasilnya. Setiap perubahan pada *file* di direktori `app/` akan langsung diperbarui secara otomatis (Auto-reload).

---

## 📁 Struktur Direktori Utama

```text
├── app/
│   ├── components/      # Komponen UI yang dapat digunakan kembali (Navbar, Footer)
│   ├── menu/            # Halaman Daftar Menu (Brosur Digital)
│   ├── layout.tsx       # Root layout, konfigurasi font, dan SEO base
│   ├── page.tsx         # Halaman utama (Beranda)
│   ├── globals.css      # Variabel tema warna, reset CSS, dan utilitas global
│   └── sitemap.ts       # Generator sitemap otomatis
├── public/              # Aset statis seperti Logo, Favicon, dan Gambar Brosur
└── next.config.ts       # Konfigurasi Next.js termasuk Security Headers
```

---

## 📄 Lisensi

Hak cipta © Pandan Ayu Catering. Seluruh desain, konten, dan kode yang ada di dalam repositori ini dilindungi undang-undang. Dibuat dengan ♥ dari Sidoarjo.
