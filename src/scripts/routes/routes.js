import HomePresenter from '../pages/home/home-presenter.js';
import AboutPresenter from '../pages/about/about-presenter.js';
import LoginPresenter from '../pages/login/login-presenter.js';
import RegisterPresenter from '../pages/register/register-presenter.js';

const routes = {
  '/': new HomePresenter(),
  '/about': new AboutPresenter(),
  '/login': new LoginPresenter(),
  '/register': new RegisterPresenter(),
};

export default routes;
