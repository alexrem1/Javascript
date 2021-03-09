// every {} has a prototype eg contains all the methods for that object type
// its better to add methods onto the prototype
// In a class, javascript automatically took those methods and added them inside this proto property.So when we're not using classes we need to figure out a way to take our methods and store them inside this proto property.
// two main benefits 1. it's going to be more efficient storing them in one single place once and not in many different locations on every single instance that we create. And 2. it's going to help us with prototype inheritance

function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

const userOne = new User("mario", "mario@hotmail.com", "true"); // call constructor function inside the class to set all the properties on that new user object
const userTwo = new User("luigi", "luigi@hotmail.com");

console.log(userOne, userTwo);
userOne.login().logout();
userTwo.logout();
