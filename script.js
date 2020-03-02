const navBtn = document.getElementById('mobile-nav');
const navMenu = document.getElementById('mobile-nav-menu');

// Drop down menu
function toggleMenu() {
  navMenu.classList.toggle('show')
  navBtn.classList.toggle('point-up');
}
// Event listeners
navBtn.addEventListener('click', () => toggleMenu());
