// switch statements are good for evaluating a variable which could be several different values if you want to act different in each case
// switch statements use strict equality to check.

const grade = "A";

switch (grade) {
  case "A":
    console.log("you got an A!");
    break;
  case "B":
    console.log("you got an B!");
    break;
  case "C":
    console.log("you got an C!");
    break;
  case "D":
    console.log("you got an D!");
    break;
  case "E":
    console.log("you got an E!");
    break;
  default:
    console.log("Not a valid grade");
}

// using if statements
// if (grade === "A") {
// } else if (grade === "B") {
// } else if (grade === "C") {
// } else if (grade === "D") {
// } else if (grade === "E") {
// } else {
// }
