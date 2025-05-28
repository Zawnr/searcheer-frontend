import HomeModel from './home-model.js';
import HomeView from './home-view.js';

export default class HomePresenter {
  constructor() {
    this.model = new HomeModel();
    this.view = new HomeView();
  }
  async render() {
    return this.view.render();
  }
  async afterRender() {
    await this.view.afterRender();
  }
}
