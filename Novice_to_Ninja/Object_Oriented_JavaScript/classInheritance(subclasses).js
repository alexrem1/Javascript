class User {
  constructor(username, email, hungry) {
    // set up properties on the object
    this.username = username;
    this.email = email;
    this.hungry = !hungry;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} is now logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

// by extending the user class, it subclass all of the users properties and methods it means we dont have to completely rewrite all of the code, eg in our new admin class, and now we can define extra methods or properties in this class that only admins have
class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
  }
}

const userOne = new User("mario", "mario@hotmail.com", "true"); // call constructor function inside the class to set all the properties on that new user object
const userTwo = new User("luigi", "luigi@hotmail.com");
const userThree = new Admin("martin", "martinelli@hotmail.com");

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

userThree.deleteUser(userOne);
console.log(users);
