// EVENT HANDLING
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const hoverMessage = document.getElementById('hoverMessage');
hoverMessage.addEventListener('mouseover', () => {
  hoverMessage.textContent = "You hovered over me! 😎";
});
hoverMessage.addEventListener('mouseout', () => {
  hoverMessage.textContent = "Hover over me!";
});

// INTERACTIVE ELEMENTS
let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
incrementBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

// FAQ Toggle
const faqQuestion = document.querySelector('.faq-question');
const faqItem = document.querySelector('.faq-item');
faqQuestion.addEventListener('click', () => {
  faqItem.classList.toggle('active');
});

// FORM VALIDATION
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  let isValid = true;
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formSuccess.textContent = '';

  // Validate Name
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Enter a valid email';
    isValid = false;
  }

  // Validate Password
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  if (isValid) {
    formSuccess.textContent = 'Form submitted successfully!';
    form.reset();
  }
});
