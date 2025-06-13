document.addEventListener('DOMContentLoaded', function () {

  // Email validation
  const emailInput = document.querySelector('.hero-buttons input[type="text"]');
  const getStartedBtn = document.querySelector('.hero-buttons .btn-red');

  getStartedBtn.addEventListener('click', function () {
      const emailValue = emailInput.value;
      if (validateEmail(emailValue)) {
          alert('Email is valid, you can proceed.');
          // Proceed with form submission or next steps
      } else {
          alert('Please enter a valid email address.');
      }
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }

  // Language selection alert
  const languageSelect = document.querySelector('.selection');
  languageSelect.addEventListener('change', function () {
      alert(`Language changed to: ${this.value}`);
  });


});
