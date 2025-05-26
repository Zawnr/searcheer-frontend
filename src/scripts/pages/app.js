import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';

class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;

  constructor({ navigationDrawer, drawerButton, content }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;
    this._setupDrawer();
  }

  _setupDrawer() {
    this.#drawerButton.addEventListener('click', () => {
      this.#navigationDrawer.classList.toggle('open');
    });

    document.body.addEventListener('click', (event) => {
      if (!this.#navigationDrawer.contains(event.target) && !this.#drawerButton.contains(event.target)) {
        this.#navigationDrawer.classList.remove('open');
      }
      this.#navigationDrawer.querySelectorAll('a').forEach((link) => {
        if (link.contains(event.target)) {
          this.#navigationDrawer.classList.remove('open');
        }
      });
    });
  }

  async renderPage() {
    const url = getActiveRoute();
    const page = routes[url];

    const header = document.querySelector('header');
    const hash = window.location.hash;


    if (hash === '#/login' || hash === '#/register') {
      if (header) header.style.display = 'none';
    } else {
      if (header) header.style.display = '';
    }


    document.body.classList.remove('home-page-bg', 'about-page-bg');
    if (hash === '#/about' || url === '/about') {
      document.body.classList.add('about-page-bg');
    } else if (hash === '' || hash === '#/' || url === '/') {
      document.body.classList.add('home-page-bg');
    }
  

  
    this.#content.style.opacity = 0;
    await new Promise((resolve) => setTimeout(resolve, 150));

    if (!page) {
      this.#content.innerHTML = `
        <section class="container">
          <div class="card">
            <h1>404 - Page Not Found</h1>
            <p>Halaman tidak ditemukan!</p>
          </div>
        </section>
      `;
    } else {
      this.#content.innerHTML = await page.render();
      if (typeof page.afterRender === 'function') {
        await page.afterRender();
      }
    }

    this.#content.style.transition = 'opacity 0.5s';
    this.#content.style.opacity = 1;
  }
}

export default App;
