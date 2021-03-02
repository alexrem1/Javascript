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

// no classes means no access to "super()"
function Admin(username, email, title) {
  User.call(this, username, email); // calls the constructor. The first argument is going to be the context of what "this" keyword will be equal to inside the user constructor function.
  this.title = title;
}

Admin.prototype = Object.create(User.prototype); // inherit User functions methods onto the proto
Admin.prototype.deleteUser = function () {}; // creates a chain of nested protal properties to represent this inheritance

const userOne = new User("mario", "mario@hotmail.com", "true"); // call constructor function inside the class to set all the properties on that new user object
const userTwo = new User("luigi", "luigi@hotmail.com");
const userThree = new Admin("martin", "martinelli@hotmail.com", "black-belt");

console.log(userOne, userTwo, userThree);
userOne.login().logout();
userTwo.logout();
userThree.logout();
