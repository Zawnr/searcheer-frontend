// src/scripts/pages/login/login-view.js
export default class LoginView {
  render() {
    return `
      <section class="container auth-container">
        <div class="card auth-card">
          <h1>Welcome Back</h1>
          <p class="subtitle">Login to your account</p>
          <p class="desc">Discover the best job opportunities and continue your journey with Searcheers.</p>

          <form id="loginForm" class="form">
            <input
              type="text"
              id="loginEmail"
              placeholder="Enter your email address or username"
              required
              autocomplete="username"
            />
            <input
              type="password"
              id="loginPassword"
              placeholder="Enter your password"
              required
              autocomplete="current-password"
            />

            <div class="form-checkbox" style="margin-bottom:0.8rem;">
              <input type="checkbox" id="rememberMe" />
              <label for="rememberMe">Remember me</label>
            </div>

            <button type="submit" class="btn-auth">Log in</button>
          </form>

          <div class="switch-auth">
            Don’t have an account? <a href="#/register">Sign up</a>
          </div>
        </div>

        <div class="graphic-shape">
          <img src="images/abstract2.png" alt="Login Illustration" />
        </div>
      </section>
    `;
  }
}
