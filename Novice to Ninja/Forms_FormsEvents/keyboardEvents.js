const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // validation
  const username = form.user.value;

  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = "that username is valid";
  } else {
    // feedback help info
    feedback.textContent =
      "username must contain letters only and be between 6 and 12 characters long.";
  }
});

// live feedback
form.user.addEventListener("keyup", (e) => {
  console.log(e);
  //   console.log(e.target.value, form.user.value);
  if (usernamePattern.test(e.target.value)) {
    // console.log("success");
    form.user.setAttribute("class", "success");
  } else {
    // console.log("failed");
    form.user.setAttribute("class", "error");
  }
});
