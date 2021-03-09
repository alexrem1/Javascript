// constructor function to create new objects without using a class eg this is the kind of code that lives underneath the obstruction of a class

function User(username, email) {
  this.username = username;
  this.email = email;
  this.login = function () {
    console.log(`${this.username} has logged in`);
  };
}

// class User {
//     constructor(username, email) {
//       // set up properties on the object
//       this.username = username;
//       this.email = email;
//     }
//   }

const userOne = new User("mario", "mario@hotmail.com", "true"); // call constructor function inside the class to set all the properties on that new user object
const userTwo = new User("luigi", "luigi@hotmail.com");

console.log(userOne, userTwo);
userOne.login();

// we can add functions or methods this way inside the constructor but there is a better way to add methods to our objects not inside the constructo and that is via the prototype.
