const hamburger = document.querySelector('.btn-nav');
const navMenu = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const navLink = document.querySelectorAll('.nav-link');
const cardsContainer = document.querySelector('.cards-container');

const projectsData = [
  {
    name: 'Pollution Metrics USA',
    description:
      'This web application is build with react and provides statistical insights on air pollution data for states and cites inside USA.',
    imageUrl: [
      './images/projects/pollution.webp',
      './images/projects/pollution.webp',
      './images/projects/pollution.webp',
    ],
    technologies: ['react', 'redux', 'scss', 'api'],
    linkLive: 'https://pollution-metrics.netlify.app/',
    linkSource: 'https://github.com/amejid/pollution-metrics',
  },
  {
    name: 'Bookstore CMS',
    description:
      'The Bookstore is a website where the user can display a list of books, add a book by providing a title, an author, and selecting from the categories, and remove a selected book.',
    imageUrl: [
      './images/projects/bookstore.webp',
      './images/projects/bookstore.webp',
      './images/projects/bookstore.webp',
    ],
    technologies: ['react', 'redux', 'scss', 'api'],
    linkLive: 'https://bookstore-amejid.netlify.app/',
    linkSource: 'https://github.com/amejid/bookstore',
  },
  {
    name: "Space Travelers' Hub",
    description:
      'This web application provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
    imageUrl: [
      './images/projects/space.webp',
      './images/projects/space.webp',
      './images/projects/space.webp',
    ],
    technologies: ['react', 'redux', 'scss', 'api'],
    linkLive: 'https://space-amejid-stephen.netlify.app/',
    linkSource: 'https://github.com/amejid/space-travelers-hub',
  },
  {
    name: 'PokeMon Collection',
    description:
      'Pokémon Cards Collection project is the application for showing top 20 pokemon, Users can see details of a specific Pokémon by clicking see-details button Users can give Stars to one or more Cards.Users can comment on pokemon card details.',
    imageUrl: [
      './images/projects/poke.webp',
      './images/projects/poke.webp',
      './images/projects/poke.webp',
    ],
    technologies: ['javascript', 'css', 'html'],
    linkLive: 'https://ishpaul777.github.io/pokemon-cards-collection/',
    linkSource: 'https://github.com/ishpaul777/pokemon-cards-collection',
  },
  {
    name: 'YTech Landing Page',
    description:
      'This a dynamic, two page, responsive website for a local tech startup named Y-Tech to showcase their services. The team section on the homepage is displayed dynamically from an array of objects using JavaScript.',
    imageUrl: [
      './images/projects/ytech.webp',
      './images/projects/ytech.webp',
      './images/projects/ytech.webp',
    ],
    technologies: ['javascript', 'css', 'html'],
    linkLive: 'https://amejid.github.io/ytech-landing/',
    linkSource: 'https://github.com/amejid/ytech-landing',
  },
  {
    name: 'Math Magicians',
    description:
      'Math-Magicians is a web app for all lovers of mathematics. It is a Single Page Application (SPA) that allows users to make simple calculations and read a random math-related quote.',
    imageUrl: [
      './images/projects/math.webp',
      './images/projects/math.webp',
      './images/projects/math.webp',
    ],
    technologies: ['react', 'scss'],
    linkLive: 'https://math-magicians-amejid.netlify.app/',
    linkSource: 'https://github.com/amejid/math-magicians',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < projectsData.length; i += 1) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    const projectCardThumb = document.createElement('div');
    const projectCardThumbImg = document.createElement('img');
    const [, , projectImg] = projectsData[i].imageUrl;
    projectCardThumbImg.src = projectImg;
    projectCardThumb.classList.add('project-card--thumb');
    projectCardThumb.appendChild(projectCardThumbImg);
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

    for (let j = 0; j < projectsData[i].technologies.length; j += 1) {
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
    projectDetails[i].addEventListener('click', () => {
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
