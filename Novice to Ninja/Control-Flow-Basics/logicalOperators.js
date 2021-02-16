// logical operators
// OR || only 1 condition has to be true
// AND && both conditions has to be true

const password = "p@ssword1234";

if (password.length >= 12 && password.includes("@")) {
  console.log("That password is MIGHTY strong!!");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length >= 5)
) {
  console.log("That password is STRONG enough!");
} else {
  console.log("That password is NOT strong enough!!!");
}
