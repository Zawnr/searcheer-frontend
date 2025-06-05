export function setupTogglePassword() {
  document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const input = this.parentElement.querySelector('input');
      const img = this.querySelector('img');
      if (input.type === 'password') {
        input.type = 'text';
        img.src = 'images/eye-buka.png';
        img.alt = 'Hide Password';
      } else {
        input.type = 'password';
        img.src = 'images/eye-tutup.png';
        img.alt = 'Show Password';
      }
    });
  });
}
