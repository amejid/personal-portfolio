const hamburger = document.querySelector('.btn-nav');
const navMenu = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const navLink = document.querySelectorAll('.nav-link');

const projectsData = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: ['./images/snapshoot-mobile.png', './images/snapshoot-desktop.png'],
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    linkLive: 'https://amejid.github.io/personal-portfolio/',
    linkSource: 'https://github.com/amejid/personal-portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: ['', ''],
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html', 'Github'],
    linkLive: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: ['./images/snapshoot-mobile.png', './images/snapshoot-desktop.png'],
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    linkLive: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: ['', ''],
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    linkLive: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: ['', ''],
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    linkLive: '',
    linkSource: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: ['', ''],
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    linkLive: '',
    linkSource: '',
  },
];

hamburger.addEventListener('click', () => {
  navMenu.classList.add('mobile-menu');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('mobile-menu');
  document.body.style.overflow = 'scroll';
});

navLink.forEach((link) =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('mobile-menu');
  })
);
