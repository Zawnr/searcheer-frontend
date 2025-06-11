# Searcheer Frontend

Ini adalah proyek frontend untuk aplikasi pencarian dan analisis pekerjaan **Searcheer**, dikembangkan menggunakan React, Webpack, Babel, dan Tailwind CSS. Kini mendukung Progressive Web App (PWA) lengkap dengan manifest, service worker, dan screenshot untuk install prompt.

## Table of Contents

- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [PWA Support](#pwa-support)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (disarankan versi 16 atau lebih tinggi)
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. **Clone repository:**

   ```shell
   git clone https://github.com/Zawnr/searcheer-frontend.git
   cd searcheer-frontend
   ```

2. **Install dependencies:**
   ```shell
   npm install
   ```

---

## Scripts

- **Build for Production**

  ```shell
  npm run build
  ```

  Menjalankan Webpack dalam mode production dan menghasilkan file build ke direktori `dist`.

- **Start Development Server**

  ```shell
  npm run start-dev
  ```

  Menjalankan server pengembangan Webpack dengan live reload sesuai konfigurasi di `webpack.dev.js`.

- **Serve Production Build**
  ```shell
  npm run serve
  ```
  Menyajikan konten dari direktori `dist` menggunakan [`http-server`](https://www.npmjs.com/package/http-server).

---

## Project Structure

```text
searcheer-frontend/
├── dist/                    # Hasil build/produksi (output Webpack)
├── public/                  # Public files (HTML utama, manifest, icon, screenshot, service worker)
│   ├── index.html           # HTML template utama
│   ├── manifest.json        # Web App Manifest (PWA)
│   ├── service-worker.js    # Service Worker (PWA)
│   ├── logo2_192x192.png    # Icon PWA 192x192
│   ├── logo2_512x512.png    # Icon PWA 512x512
│   ├── screenshot-desktop-1200x700.png   # Screenshot desktop untuk PWA
│   └── screenshot-mobile-473x833.png     # Screenshot mobile untuk PWA
├── src/                     # Semua source code aplikasi
│   ├── assets/              # Asset statis (logo, gambar, icon, dll)
│   │   ├── Icons/           # Icon aplikasi
│   │   │   ├── IconHSW/     # Icon How it Works
│   │   │   └── IconRSA/     # Icon lainnya
│   │   └── images/          # Gambar aplikasi
│   │       ├── Bg/          # Background images
│   │       ├── Logo/        # Logo aplikasi
│   │       └── Team/        # Foto tim
│   ├── components/          # Komponen React (modular, reusable)
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Halaman utama aplikasi (routing)
│   ├── utils/               # Utility/helper function (API, dsb)
│   ├── App.jsx              # Root React component
│   ├── App.css              # Style utama
│   ├── index.jsx            # Entry point React
│   └── index.css            # Style global
├── .babelrc                 # Babel configuration
├── .gitignore               # Git ignore rules
├── .prettierrc              # Prettier configuration
├── babel.config.js          # Additional Babel configuration
├── package.json             # NPM project metadata
├── package-lock.json        # Dependency lock file
├── postcss.config.js        # PostCSS configuration
├── README.md                # Dokumentasi proyek ini
├── tailwind.config.js       # Tailwind CSS config
├── webpack.common.js        # Webpack konfigurasi (shared)
├── webpack.dev.js           # Webpack dev config
└── webpack.prod.js          # Webpack prod config
```

---

## PWA Support

- **Manifest (`public/manifest.json`)**: berisi konfigurasi PWA, icon, dan screenshot untuk install prompt di browser.
- **Service Worker (`public/service-worker.js`)**: caching asset agar aplikasi bisa diakses offline.
- **Icon PWA**: `logo2_192x192.png` dan `logo2_512x512.png` (ukuran sesuai standar PWA).
- **Screenshot PWA**: `screenshot-desktop-1200x700.png` dan `screenshot-mobile-473x833.png` untuk tampilan install prompt di desktop dan mobile.

Aplikasi ini sudah siap diinstall sebagai PWA di browser modern (Chrome, Edge, dsb). Untuk pengujian, buka DevTools > Application > Manifest.
