export default class LoginModel {
  async login({ email, password }) {
    if (email && password) {
    
      return { success: true, message: 'Login berhasil! Selamat datang.' };
    }
    return { success: false, message: 'Semua field harus diisi!' };
  }
}
