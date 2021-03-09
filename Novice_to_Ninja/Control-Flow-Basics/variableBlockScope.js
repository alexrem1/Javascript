// the same would be said if we changed let to const

let age = 30; //global scope eg access anywhere in the file

// let age = 50; // age has already been declared as it is in the same global scope

if (true) {
  let age = 400; // we're allowed to redefine a variable inside a code block even though it has the same name eg LOCAL SCOPE for "age"
  let name = "alex"; // only valid inside this code block as it's defined in this code block
  console.log("inside 1st code block: ", age, name);

  if (true) {
    // let age = 100; // this variable is specific only to this code block scope
    let name = "sandy";
    console.log("inside 2nd code block: ", age, name); // it takes the most recently defined value, the value whose scope is most immediate outside of this code block
  }
}

console.log("outside code block: ", age, name); //variable:name is only valid inside the local scope code block it was created in
