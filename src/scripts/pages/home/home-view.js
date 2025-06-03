export default class HomeView {
  render() {
    return `
      <section class="container">
        <h1>Home Page</h1>
        <p>Welcome to Searcheers! Temukan pekerjaan impianmu di sini.</p>
      </section>
    `;
  }
  async afterRender() {
  }
}
