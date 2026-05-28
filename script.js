const form = document.querySelector('.application');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', () => {
  const button = form.querySelector('button');

  button.textContent = 'Submitting...';
  button.disabled = true;

  setTimeout(() => {
    successMessage.style.display = 'block';
  }, 700);
});