// if a certain condition is true, then we execute the code block
// no counter variables as we only ever execute the code block once or not at all
// condition in parentheses

const age = 20;
if (age > 19) {
  console.log("you are over 20 years old");
}

const ninjas = ["alex", "ryu", "ken", "yoshi"];
if (ninjas.length > 3) {
  console.log("that's a lot of ninjas");
}

const password = "p@ssword";
if (password.length >= 8) {
  console.log("That password is long enough!");
}
