import LoginModel from './login-model.js';
import LoginView from './login-view.js';
import { showNotification } from '../../../components/notification.js';
export default class LoginPresenter {
  constructor() {
    this.model = new LoginModel();
    this.view = new LoginView();
  }

  async render() {
    return this.view.render();
  }

  async afterRender() {
    await this.view.afterRender();

    const form = document.getElementById('loginForm');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const result = await this.model.login({ email, password });
        showNotification(result.message, result.success ? 'success' : 'error');

        if (result.success) {
          // Navigasi ke halaman home
          window.location.hash = '/';
        }
      });
    }
  }
}
