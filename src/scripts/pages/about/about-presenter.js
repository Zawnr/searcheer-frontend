import AboutModel from './about-model.js';
import AboutView from './about-view.js';

export default class AboutPresenter {
  constructor() {
    this.model = new AboutModel();
    this.view = new AboutView();
  }
  async render() {
    return this.view.render();
  }
  async afterRender() {
    await this.view.afterRender();
  }
}
