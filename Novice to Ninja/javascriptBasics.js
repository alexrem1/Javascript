//VARIABLES CONSTANTS AND COMMENTS

//constaints to variable names: no spaces eg camelCase, only letters underscores numbers or $, reserved keywords eg const let var etc

// let creates a variable, can be overwritten
let age = 25;
let year = 2019;

console.log(age, year);

age = 30;
console.log(age);

// const creates a constant variable that does not change
const points = 100;
// points = 50;
console.log(points);

//before const and let was var
var score = 75;
console.log(score);

//STRINGS
console.log("hello world");

let email = "remidy@live.co.uk";
console.log(email);

//string concatenation
let firstName = "John";
let lastName = "Wick";

let fullName = firstName + " " + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);

//string length (property of the string eg how many letters in the string)
console.log(fullName.length);

//string methods: is a function associated with a object or data type (several different functions: snippet of code which performs some kind of specific task)
console.log(fullName.toUpperCase());

//we can store the values in result
let result = fullName.toLowerCase();
// some methods dont alter the original variables' value and some do.
console.log(result, fullName);

// indexOf: find index of a certain character inside the string. Passing a value into a method like this is an argument
let index = email.indexOf("@");
console.log(index);

// COMMON STRING METHODS

let emaill = "remidy@live.co.uk";
let resultt = emaill.lastIndexOf("e");
console.log(resultt);

let answer = email.slice(0, 6);
console.log(answer);

let dare = email.substr(4, 6);
console.log(dare);

let kinga = email.replace("r", "e" + "z");
console.log(kinga);

//NUMBERS

let radius = 10;
let pi = 3.14;

console.log(10 / 2);

let dave = radius % 3;
console.log(dave);

let david = pi * radius ** 2;
console.log(david);

let bidmas = 5 * (10 - 3) ** 2;
console.log(bidmas);

let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;
// likes += 10;
// likes -= 5;
// likes *= 2;
likes /= 2;
console.log(likes);

//NaN - not a number
console.log(5 / "hello");

//number concatenation

let numberConcatenation = "the blog has " + likes + " likes";
console.log(numberConcatenation);

// TEMPLATE STRINGS
const title = "Best reads of 2019";
const author = "Mario";
const likess = 30;

//concatenation way
let concatenationWay =
  "The blog called " + title + " by " + author + " has " + likess + " likes.";
console.log(concatenationWay);

//template string/literal way
let templateStringWay = `The blog called ${title} by ${author} has ${likess} likes`;
console.log(templateStringWay);

//creating html templates
let html = `
 <h2>${title}</h2>
 <p>By ${author}</p>
 <span>This blog has ${likess} likes.</span>
`;

console.log(html);

// ARRAYS (OBJECT)

let ninjas = ["shaun", "ryan", "chun-li"];

console.log(ninjas[1]);
ninjas[1] = "ken";
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ["Jon", "Shaun", 20, 25];
console.log(random);

console.log(ninjas.length);

// array methods

let joinMethod = ninjas.join(", ");
console.log(joinMethod);

let indexOfMethod = ninjas.indexOf("chun-li");
console.log(indexOfMethod);

let concatMethod = ninjas.concat(["ken", "Crystal"]);
console.log(concatMethod);

console.log(ninjas);

let pushDestructiveMethod = ninjas.push("ken"); //alters original value
console.log(pushDestructiveMethod);
console.log(ninjas);

pushDesructiveMethod = ninjas.pop();
console.log(ninjas);
