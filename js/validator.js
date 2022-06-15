const contactForm = document.getElementById('contact-form');
const valResult = document.querySelector('.val-result');
const [email] = contactForm.elements;

const isInLowerCase = (str) => str === String(str).toLowerCase();

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailText = email.value;
  if (!isInLowerCase(emailText)) {
    valResult.textContent = 'Email should be in lowercase';
  } else {
    contactForm.submit();
  }
});
