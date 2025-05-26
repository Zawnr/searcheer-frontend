import RegisterModel from './register-model.js';
import RegisterView from './register-view.js';

export default class RegisterPresenter {
  constructor() {
    this.model = new RegisterModel();
    this.view = new RegisterView();
  }

  async render() {
    return this.view.render();
  }

  async afterRender() {
    const form = document.getElementById('registerForm');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        const result = await this.model.register({ username, email, password });
        alert(result.message);

        if (result.success) {
          window.location.hash = '/login';
        }
      });
    }
  }
}
