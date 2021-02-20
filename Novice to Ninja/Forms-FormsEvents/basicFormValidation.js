const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // validation
  const username = form.user.value;
  const usernamePattern = /^[a-zA-z]{6,12}$/;

  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = "that username is valid";
  } else {
    // feedback help info
    feedback.textContent =
      "username must contain letters only and be between 6 and 12 characters long.";
  }
});
