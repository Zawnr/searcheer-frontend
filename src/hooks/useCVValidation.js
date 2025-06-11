import { useCallback } from 'react';

const indoWords = [
  'pekerjaan',
  'melamar',
  'perusahaan',
  'bekerja',
  'posisi',
  'lulusan',
  'pengalaman',
  'pendidikan',
  'keahlian',
  'kualifikasi',
  'syarat',
  'minimal',
  'gaji',
  'tugas',
  'tanggung jawab',
  'tim',
  'industri',
  'jurusan',
  'sertifikat',
  'berpengalaman',
  'fresh graduate',
  'magang',
  'honor',
  'kontrak',
  'tetap',
  'paruh waktu',
  'penempatan',
  'lokasi',
  'penghasilan',
  'benefit',
  'bpjs',
  'asuransi',
  'karir',
  'jenjang',
  'sosok',
  'profil',
  'rekrutmen',
  'wawancara',
  'hasil',
  'tes',
  'psikotes',
  'daftar riwayat hidup',
  'ijazah',
  'nilai',
  'transkrip',
  'referensi',
  'lamaran',
  'pengumuman',
  'dipanggil',
  'pengalaman kerja',
  'divisi',
  'staf',
  'administrasi',
  'pelamar',
  'dilampirkan',
  'persyaratan',
  'disabilitas',
  'dokumen',
  'berkas',
  'kantor',
  'operasional',
  'absen',
  'cuti',
  'bonus',
  'tunjangan',
  'kompensasi',
  'lembur',
  'insentif',
  'pengembangan',
  'pelatihan',
  'kerja sama',
  'kerjasama',
  'tim',
  'target',
  'penjualan',
  'pemasaran',
  'keuangan',
  'akuntansi',
  'logistik',
  'produksi',
  'pabrik',
  'laporan',
  'pembukuan',
  'pengiriman',
  'pengadaan',
  'pembelian',
  'stok',
  'inventaris',
  'karyawan',
  'pegawai',
  'atasan',
  'bawahan',
  'atasan langsung',
  'bawahan langsung',
  'atensi',
  'pengalaman organisasi',
  'ekstrakurikuler',
  'organisasi',
  'kompetensi',
  'sukses',
  'pencapaian',
  'penghargaan',
  'kemampuan',
  'kompeten',
  'saya',
  'kamu',
  'dia',
  'mereka',
  'kami',
  'kita',
  'anda',
  'ingin',
  'adalah',
  'dan',
  'atau',
  'dengan',
  'untuk',
  'yang',
  'di',
  'pada',
  'dari',
  'ke',
  'oleh',
  'akan',
  'terhadap',
  'dalam',
  'sebagai',
  'juga',
  'bisa',
  'tidak',
  'harus',
  'akan',
  'dapat',
  'apabila',
  'bila',
  'karena',
  'sehingga',
  'selain',
  'sebelum',
  'setelah',
  'selama',
  'hingga',
  'supaya',
  'agar',
  'jadi',
  'itu',
  'ini',
  'tersebut',
  'pada',
  'merupakan',
  'bagi',
  'serta',
  'misalnya',
  'contohnya',
  'misal',
  'jika',
  'maka',
  'meskipun',
  'walaupun',
  'tetapi',
  'namun',
  'sebab',
  'oleh karena itu',
  'jadi',
  'apa',
  'siapa',
  'dimana',
  'kapan',
  'mengapa',
  'bagaimana',
  'berapa',
  'apakah',
  'siapakah',
  'dimanakah',
  'kenapa',
  'adakah',
  'apapun',
  'siapapun',
  'manapun',
  'bagaimanapun',
  'harap',
  'mohon',
  'diharapkan',
  'silakan',
  'tolong',
  'segera',
  'wajib',
  'perlu',
  'penting',
  'diisi',
  'lengkapi',
  'isi',
  'kirim',
  'unggah',
  'unduh',
  'pilih',
  'cek',
  'centang',
  'konfirmasi',
  'verifikasi',
  'validasi',
  'selesaikan',
  'lanjutkan',
  'tulis',
  'jelaskan',
  'sebutkan',
];

export function useCVValidation() {
  // Fungsi cek Bahasa Indonesia: minimal 1 kata Indo, case-insensitive
  const containsIndonesian = useCallback((text) => {
    if (!text) return false;
    const lower = text.toLowerCase();
    for (const w of indoWords) {
      const pattern = new RegExp(`\\b${w}\\b`, 'gi');
      if (pattern.test(lower)) return true;
    }
    return false;
  }, []);

  const validate = ({
    selectedFile,
    jobTitle,
    jobDescription,
    setCvError,
    setJobTitleError,
    setJobDescError,
  }) => {
    let valid = true;
    let foundIndo = false;
    let foundCvError = false;

    // Reset error field
    setCvError('');
    setJobTitleError('');
    setJobDescError('');

    // CV validation
    if (!selectedFile) {
      setCvError(
        'Please upload your CV in PDF format (max 10MB, English, ATS-friendly).'
      );
      valid = false;
      foundCvError = true;
    } else if (selectedFile.type !== 'application/pdf') {
      setCvError('Only PDF files are allowed for your CV.');
      valid = false;
      foundCvError = true;
    }

    // Job title validation
    if (!jobTitle.trim()) {
      setJobTitleError('Job title is required.');
      valid = false;
    } else if (jobTitle.trim().length < 5) {
      setJobTitleError('Job title must be at least 5 characters & English.');
      valid = false;
    } else if (containsIndonesian(jobTitle)) {
      foundIndo = true;
      setJobTitleError('Please use English for the job title.');
      valid = false;
    }

    // Job desc validation
    if (!jobDescription.trim()) {
      setJobDescError('Job description is required.');
      valid = false;
    } else if (jobDescription.trim().length < 20) {
      setJobDescError(
        'Job description must be at least 20 characters & English.'
      );
      valid = false;
    } else if (containsIndonesian(jobDescription)) {
      foundIndo = true;
      setJobDescError('Please use English for the job description.');
      valid = false;
    }

    return { valid, foundIndo, foundCvError };
  };

  return { validate };
}
