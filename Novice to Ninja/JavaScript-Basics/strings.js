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
