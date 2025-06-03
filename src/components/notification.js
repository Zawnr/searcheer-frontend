export function showNotification(message, type = 'info') {
  let notif = document.getElementById('notification');
  if (!notif) {
    notif = document.createElement('div');
    notif.id = 'notification';
    notif.className = 'notification';
    document.body.appendChild(notif);
  }
  notif.textContent = message;
  notif.className = `notification ${type}`;
  notif.style.display = 'block';
  setTimeout(() => {
    notif.style.display = 'none';
  }, 2500);
}
