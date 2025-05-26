export default class RegisterModel {
  async register({ username, email, password }) {
    if (username && email && password) {
      return { success: true, message: 'Register berhasil! Silakan login.' };
    }
    return { success: false, message: 'Semua field harus diisi!' };
  }
}
