// src/scripts/pages/login/login-presenter.js
import LoginModel from './login-model.js';
import LoginView  from './login-view.js';

export default class LoginPresenter {
  constructor() {
    this.model = new LoginModel();
    this.view  = new LoginView();
  }

  async render() {
    return this.view.render();
  }

  async afterRender() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email    = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();


      if (!email || !password) {
        alert('Semua field harus diisi!');
        return;
      }

      const result = await this.model.login({ email, password });
      alert(result.message);
      if (result.success) {
        window.location.hash = '/';
      }
    });
  }
}
