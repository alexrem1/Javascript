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

const userOne = new User("mario", "mario@hotmail.com", "true"); // call constructor function inside the class to set all the properties on that new user object
const userTwo = new User("luigi", "luigi@hotmail.com");

console.log(userOne, userTwo);
userOne.login();
userOne.logout();
userTwo.login();
userTwo.logout();

userOne.login().incScore().incScore().incScore().incScore().logout(); // method chaining works because we are explicity returning the instance at the end of each method.
