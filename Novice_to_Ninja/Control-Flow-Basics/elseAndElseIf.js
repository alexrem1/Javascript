// else if's chain if statements to check multiple different conditions
// else statements execute if the result of the previous conditions evaluates to false

const password = "p@ss";

if (password.length >= 12) {
  console.log("That password is mighty strong!!");
} else if (password.length >= 8) {
  console.log("That password is long enough!");
} else {
  console.log("That password is NOT long enough!!!");
}
