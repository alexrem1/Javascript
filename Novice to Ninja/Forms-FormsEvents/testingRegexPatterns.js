const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(username.value);
  console.log(form.user.value);
  console.log(form.username.value);
});

// Testing RegEx
// /^....$/

const username = "alexis";
const pattern = /^[a-z]{6,}$/;

let result = pattern.test(username); //returns a boolean

if (result) {
  console.log("regex test passed");
} else {
  console.log("regex test failed");
}

let outcome = username.search(pattern); // -1 if we dont get a match otherwise its the position of the match
console.log(outcome);
