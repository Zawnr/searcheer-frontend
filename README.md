# Searcheer Frontend

Ini adalah proyek frontend untuk aplikasi pencarian dan analisis pekerjaan **Searcheer**, dikembangkan menggunakan React, Webpack, Babel, dan Tailwind CSS.

## Table of Contents

- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)

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
├── public/                  # Public files (HTML utama, favicon, dsb)
│   └── index.html           # HTML template utama
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
│   │   ├── About/           # Komponen halaman About
│   │   ├── Home/            # Komponen halaman Home
│   │   │   ├── HeroSection/ # Section hero (HeroSection.jsx, StatSection.jsx, dll)
│   │   │   ├── AlertPopup.jsx
│   │   │   ├── AnalysisCard.jsx
│   │   │   ├── AnalysisResult.jsx
│   │   │   ├── AnalyzingView.jsx
│   │   │   ├── AnimatedLoadingText.jsx
│   │   │   ├── BookmarkPlusIcon.jsx
│   │   │   ├── BrowseCategory.jsx
│   │   │   ├── GoodLifeCV.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── JobDescription.jsx
│   │   │   ├── RecentJobs.jsx
│   │   │   ├── StatsSection.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── UploadCV.jsx
│   │   ├── JobDetails/      # Komponen detail pekerjaan
│   │   ├── Jobs/            # Komponen daftar pekerjaan
│   │   ├── Notification/    # Komponen notifikasi
│   │   ├── OurTeam/         # Komponen halaman tim
│   │   ├── Profile/         # Komponen profil pengguna
│   │   └── Shared/          # Komponen yang digunakan di berbagai halaman
│   ├── hooks/               # Custom React hooks (misal: useCVValidation.js)
│   │   └── useCVValidation.js
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
