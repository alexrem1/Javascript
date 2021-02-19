// Objects eg User Object in Javascript have properties: email, username, gender & things they can do (methods: login logout)
// eg blog object; properties: title, content, author; methods: publish unpublish delete
// {} to create object literal with several different properties and each property is going to be a key value pair

let user = {
  name: "alex",
  age: 30,
  email: "remzino@live.co.uk",
  location: "berlin",
  blogs: ["When and where?", "Where are we going?"],
};

console.log(user);
console.log(user.name, user.age); // .notation to access the properties in the object

// update a property on a object
user.age = 35;
console.log(user.age);

// OR square bracket notation
console.log(user["location"]);

//update a property on a object
user["name"] = "Ken";
console.log(user["name"]);

console.log(typeof user);

// square bracket notation is useful when passing in a variable eg
// const key = "location";
// console.log(user["key"]); same as user["location"]
