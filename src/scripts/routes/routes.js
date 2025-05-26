import HomePage from '../pages/home/home-page.js';
import AboutPage from '../pages/about/about-page.js';
import LoginPresenter from '../pages/login/login-presenter.js';
import RegisterPresenter from '../pages/register/register-presenter.js';

const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
  '/login': new LoginPresenter(),
  '/register': new RegisterPresenter(),
};

export default routes;
