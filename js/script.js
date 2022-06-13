const hamburger = document.querySelector('.btn-nav');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle('mobile-menu')
  });