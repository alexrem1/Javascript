// booleans: true or false - used to evaluate conditions in code eg check if something is true or false
console.log(true, false, "true", "false");

//methods can return booleans
let email = "remmyboy@live.co.uk";

let resultTrue = email.includes("@");
let resultFalse = email.includes("!");
console.log(resultTrue, resultFalse);

let names = ["mario", "luigi", "toad"];

let outcomeTrue = names.includes("luigi");
let outcomeFalse = names.includes("bowser");
console.log(outcomeTrue, outcomeFalse);

//comparison operators: all return booleans
// ==: are they the same and if they then it's true. Abstract or loose equality which means that a values type is not considered when we perform the comparison
// "!=": not equal and if they are not the same then it's true
// >, <, >=, <=: more than, less than, more than or equal to, less than or equal to
let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age != 25);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

// later letters in the alphabet are greater than earlier letters
// lowercase letters are greater than uppercase letters
let name = "alex";

console.log(name == "alex");
console.log(name == "Alex");
console.log(name > "abe");
console.log(name > "Alex");
console.log(name > "Abe");
