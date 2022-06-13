const hamburger = document.querySelector('.btn-nav');
const navMenu = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('mobile-menu')
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.toggle('mobile-menu')
});

