// Kalau nanti dah terhubung ke backend, logic register API bisa dipanggil di sini
// import { registerAPI } from '../../data/api.js';

export default class RegisterModel {
  async register({ username, email, password }) {
    // Contoh register mock
    if (username && email && password) {
      // Untuk logic backend bisa: return await registerAPI({ username, email, password });
      return { success: true, message: 'Register berhasil! Silakan login.' };
    }
    return { success: false, message: 'Semua field harus diisi!' };
  }
}
