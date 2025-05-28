// Kalau nanti dah terhubung ke backend, logic login API bisa dipanggil di sini
// import { loginAPI } from '../../data/api.js';

export default class LoginModel {
  async login({ email, password }) {
    // Contoh login mock
    if (email && password) {
      // Untuk logic backend bisa: return await loginAPI({ email, password });
      return { success: true, message: 'Login berhasil!' };
    }
    return { success: false, message: 'Semua field harus diisi!' };
  }
}
