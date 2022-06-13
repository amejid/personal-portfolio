const hamburger = document.querySelector('.btn-nav');
const navMenu = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.add('mobile-menu');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('mobile-menu');
});

navLink.forEach((link) => link.addEventListener('click', () => {
  navMenu.classList.remove('mobile-menu');
}));
