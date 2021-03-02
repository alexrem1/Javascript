class User {
  constructor(username, email) {
    // set up properties on the object
    this.username = username;
    this.email = email;
  }
}

const userOne = new User("mario", "mario@hotmail.com"); // call constructor function inside the class to set all the properties on that new user object
const userTwo = new User("luigi", "luigi@hotmail.com");

console.log(userOne, userTwo);

// the "new" keyword
// 1 - it creates a new instance of the user class eg a new empty object {}
// 2 - it binds the value of the "this" to the new empty object
// 3 - it calls the constructor function to "build" the object
