const contactForm = document.getElementById('contact-form');
const valResult = document.querySelector('.val-result');
const [email] = contactForm.elements;

const isInLowerCase = (str) => str === String(str).toLowerCase();
