// when we are listening for a submit event, we don't attach our event listener to the submit button but instead to the form as the form gets submitted not the submit button
//if we just attach a click event to the button then it will only react to the click event. Attaching a submit event to the form, anyway of submitting the form will react to that eg enter or click submit

const form = document.querySelector(".signup-form");
// const user = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // we want to prevent that default refresh action after submitting
  //   console.log(user.value);
  console.log(form.DONKEY.value);
  console.log(form.meridian.value);
});
