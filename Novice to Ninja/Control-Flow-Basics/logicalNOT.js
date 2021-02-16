// (!) placing this infront of a boolean (something that is true or false) reverses that boolean eg !true = false

console.log(true, !true);
console.log(false, !false);

// eg if statements condition only runs if it is true
let user = false;

if (!user) {
  console.log("You must be logged in to continue!");
}
