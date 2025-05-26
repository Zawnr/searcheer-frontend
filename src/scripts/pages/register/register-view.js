export default class RegisterView {
  render() {
    return `
      <section class="container auth-container">
        <div class="card auth-card">
          <h1>Grow your career with us</h1>
          <p class="subtitle">Discover endless job opportunities</p>
          <p class="desc">Find your dream job and take a new step toward a brighter future with Searcheers.</p>
          <form id="registerForm" class="form">
            <input type="email" id="registerEmail" placeholder="Enter your email address" required />
            <input type="text" id="registerUsername" placeholder="Create your username" required />
            <div class="input-row">
              <input type="password" id="registerPassword" placeholder="Create password" required />
              <input type="password" id="registerConfirmPassword" placeholder="Confirm password" required />
            </div>
            <div class="password-desc">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
            <button type="submit" class="btn-auth">Sign up</button>
          </form>
          <div class="switch-auth">
            Already have an account? <a href="#/login">Sign in</a>
          </div>
        </div>
        <div class="graphic-shape">
          <img src="images/abstract.png" alt="Register Illustration" />
        </div>
      </section>
    `;
  }

  async afterRender() {
   
  }
}
