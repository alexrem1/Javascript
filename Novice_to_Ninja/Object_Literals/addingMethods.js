// methods are now defined on an object

let user = {
  name: "alex",
  age: 30,
  email: "remzino@live.co.uk",
  location: "berlin",
  blogs: ["When and where?", "Where are we going?"],
  login: function () {
    console.log("the user logged in");
  },
  logout: function () {
    console.log("user logged out");
  },
};

user.login();
user.logout();
