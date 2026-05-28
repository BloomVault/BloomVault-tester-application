const form = document.querySelector('.application');

form.addEventListener('submit', () => {
  const button = form.querySelector('button');
  button.textContent = 'Submitting...';
  button.disabled = true;
});