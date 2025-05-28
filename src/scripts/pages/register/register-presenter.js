import RegisterModel from './register-model.js';
import RegisterView from './register-view.js';
import { showNotification } from '../../../components/notification.js';

export default class RegisterPresenter {
  constructor() {
    this.model = new RegisterModel();
    this.view = new RegisterView();
  }

  async render() {
    return this.view.render();
  }

  async afterRender() {
    await this.view.afterRender();

    const form = document.getElementById('registerForm');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;

        // Validasi konfirmasi password
        if (password !== confirmPassword) {
          showNotification('Konfirmasi password tidak sesuai!', 'error');
          return;
        }

        const result = await this.model.register({ username, email, password });
        showNotification(result.message, result.success ? 'success' : 'error');

        if (result.success) {
          window.location.hash = '/login';
        }
      });
    }
  }
}
