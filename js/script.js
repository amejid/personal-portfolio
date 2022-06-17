const hamburger = document.querySelector('.btn-nav');
const navMenu = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const navLink = document.querySelectorAll('.nav-link');
const cardsContainer = document.querySelector('.cards-container');

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
    imageUrl: ['./images/snapshoot-mobile.png', './images/snapshoot-desktop.png'],
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
    imageUrl: ['./images/snapshoot-mobile.png', './images/snapshoot-desktop.png'],
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
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
    imageUrl: ['./images/snapshoot-mobile.png', './images/snapshoot-desktop.png'],
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    linkLive: '',
    linkSource: '',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < projectsData.length; i += 1) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    const projectCardThumb = document.createElement('div');
    projectCardThumb.classList.add('project-card--thumb');
    projectCard.appendChild(projectCardThumb);
    const projectCardContent = document.createElement('div');
    projectCardContent.classList.add('project-card--content');
    projectCard.appendChild(projectCardContent);
    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = projectsData[i].name;
    projectCardContent.appendChild(projectTitle);
    const projectTools = document.createElement('ul');
    projectTools.classList.add('project-tools');
    projectCardContent.appendChild(projectTools);

    for (let j = 0; j < 4; j += 1) {
      const projectTool = document.createElement('li');
      projectTool.textContent = projectsData[i].technologies[j];
      projectTools.appendChild(projectTool);
    }

    const projectButton = document.createElement('button');
    projectButton.classList.add('btn', 'view-project');
    projectButton.textContent = 'See Project';
    projectCardContent.appendChild(projectButton);
    cardsContainer.appendChild(projectCard);
  }
});

hamburger.addEventListener('click', () => {
  navMenu.classList.add('mobile-menu');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('mobile-menu');
  document.body.style.overflow = 'scroll';
});

navLink.forEach((link) => link.addEventListener('click', () => {
  navMenu.classList.remove('mobile-menu');
}));

document.addEventListener('DOMContentLoaded', () => {
  const projectDetails = document.querySelectorAll('.view-project');
  const modalContainer = document.querySelector('.modal-container');
  const modalImgContainer = document.querySelector('.modal-img-container');
  const modalTitleLinks = document.querySelector('.modal-title-links');
  const modalTools = document.querySelector('.modal-tools');
  const modalDescription = document.querySelector('.modal-desc');
  const closeModal = document.querySelectorAll('.modal-close');
  const btnLive = document.querySelector('.btn-live');
  const btnSource = document.querySelector('.btn-source');

  const modalImgMobile = document.createElement('img');
  const modalImgDesktop = document.createElement('img');
  const modalTitle = document.createElement('h3');
  for (let i = 0; i < projectDetails.length; i += 1) {
    projectDetails.addEventListener('click', () => {
      modalTools.innerHTML = '';
      const [imgMobile, imgDesktop] = projectsData[i].imageUrl;
      modalImgMobile.src = imgMobile;
      modalImgMobile.classList.add('modal-img', 'modal-img--mobile');
      modalImgDesktop.src = imgDesktop;
      modalImgDesktop.classList.add('modal-img', 'modal-img--desktop');
      modalTitle.textContent = projectsData[i].name;
      modalTitle.classList.add('modal-title');

      for (let k = 0; k < projectsData[i].technologies.length; k += 1) {
        const modalTool = document.createElement('li');
        modalTool.textContent = projectsData[i].technologies[k];
        modalTools.appendChild(modalTool);
      }

      modalDescription.textContent = projectsData[i].description;
      btnLive.href = projectsData[i].linkLive;
      btnSource.href = projectsData[i].linkSource;

      modalImgContainer.appendChild(modalImgDesktop);
      modalImgContainer.appendChild(modalImgMobile);
      modalTitleLinks.appendChild(modalTitle);

      modalContainer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  closeModal.forEach((link) => link.addEventListener('click', () => {
    modalContainer.classList.remove('open');
    document.body.style.overflow = 'scroll';
  }));
});
