// demo-ing why this isnt the best approach to create a lot objects with the same kind of data; not efficient and maintainable

const userOne = {
  username: "ryu",
  email: "ryu@dog.com",
  login() {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
  username: "Donkey",
  email: "donkey@dog.com",
  login() {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
};

console.log(userTwo.email, userTwo.username);
userTwo.login();

// nicer and easier
const userThree = new User("remmy@remworld.com", "Donkey"); // there's no User constructor built into the JS language but we can make one
