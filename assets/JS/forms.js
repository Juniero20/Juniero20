// Toggle between Login and Signup forms
document.getElementById('show-signup').addEventListener('click', function () {
  document.querySelector('.auth-section').classList.add('hidden');
  document.getElementById('signup-section').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', function () {
  document.querySelector('.auth-section').classList.remove('hidden');
  document.getElementById('signup-section').classList.add('hidden');
});

// Handle form submissions (you can replace this with actual form handling)
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Logged in!');
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Signed up!');
});