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

Struktur folder sudah modular dan sesuai best practice React modern:

```text
searcheer-frontend/
├── dist/                   # Hasil build/produksi (output Webpack)
├── public/                 # Public files (HTML utama, favicon, dsb)
│   └── index.html         # HTML template utama
├── src/                    # Semua source code aplikasi
│   ├── assets/            # Asset statis (logo, gambar, icon, dll)
│   │   ├── Icons/        # Icon-icon aplikasi
│   │   │   ├── IconHSW/  # Icon How it Works
│   │   │   └── IconRSA/  # Icon lainnya
│   │   └── images/       # Gambar-gambar aplikasi
│   │       ├── Bg/       # Background images
│   │       ├── Logo/     # Logo aplikasi
│   │       └── Team/     # Foto tim
│   ├── components/        # Component React (modular, reusable)
│   │   ├── About/        # Komponen halaman About
│   │   │   ├── CardFeature.jsx
│   │   │   └── FaqAccordion.jsx
│   │   ├── Home/         # Komponen halaman Home
│   │   │   ├── HeroSection/     # Section hero
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── StatSection.jsx
│   │   │   │   └── useCVValidation.js
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
│   │   ├── JobDetails/   # Komponen detail pekerjaan
│   │   │   └── JobOverviewCard.jsx
│   │   ├── Jobs/         # Komponen daftar pekerjaan
│   │   │   ├── JobCard.jsx
│   │   │   ├── JobList.jsx
│   │   │   ├── JobPagination.jsx
│   │   │   ├── JobSidebar.jsx
│   │   │   └── JobSortSelect.jsx
│   │   ├── Notification/ # Komponen notifikasi
│   │   │   ├── LoginNotification.jsx
│   │   │   └── RegisterNotification.jsx
│   │   ├── OurTeam/      # Komponen halaman tim
│   │   │   ├── ContactInfo.jsx
│   │   │   └── TeamMemberCard.jsx
│   │   ├── Profile/      # Komponen profil pengguna
│   │   │   └── ChangePasswordForm.jsx
│   │   └── Shared/       # Komponen yang digunakan di berbagai halaman
│   │       ├── Footer.jsx
│   │       ├── Navbar.jsx
│   │       └── ScrollToTop.jsx
│   ├── pages/            # Halaman utama aplikasi (routing)
│   │   ├── AboutUs.jsx
│   │   ├── HomePage.jsx
│   │   ├── JobDetails.jsx
│   │   ├── Jobs.jsx
│   │   ├── Login.jsx
│   │   ├── OurTeam.jsx
│   │   ├── Profile.jsx
│   │   └── Register.jsx
│   ├── utils/            # Utility/helper function (API, dsb)
│   │   └── api.js
│   ├── App.jsx           # Root React component
│   ├── App.css           # Style utama
│   ├── index.jsx         # Entry point React
│   └── index.css         # Style global
├── .babelrc              # Babel configuration
├── .gitignore           # Git ignore rules
├── .prettierrc          # Prettier configuration
├── babel.config.js      # Additional Babel configuration
├── package.json         # NPM project metadata
├── package-lock.json    # Dependency lock file
├── postcss.config.js    # PostCSS configuration
├── README.md            # Dokumentasi proyek ini
├── tailwind.config.js   # Tailwind CSS config
├── webpack.common.js    # Webpack konfigurasi (shared)
├── webpack.dev.js       # Webpack dev config
└── webpack.prod.js      # Webpack prod config
```
