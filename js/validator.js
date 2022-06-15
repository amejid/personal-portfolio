const contactForm = document.getElementById('contact-form');
const contactFormDesk = document.getElementById('contact-form-big');

const valResult = document.querySelector('.val-result');
const valResultDesk = document.querySelector('.val-result-big');

const [email] = contactForm.elements;
const emailDesk = contactFormDesk.elements.email;

const isInLowerCase = (str) => str === String(str).toLowerCase();

const validateForm = (form, emailInput, msgOutput) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailText = emailInput.value;
    if (!isInLowerCase(emailText)) {
      msgOutput.textContent = 'Email should be in lowercase';
    } else {
      form.submit();
    }
  });
};

validateForm(contactForm, email, valResult);
validateForm(contactFormDesk, emailDesk, valResultDesk);
