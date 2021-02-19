// "this" keyword refers to the object eg user; represents the context in which the current code is executed
// used a regular function. arrow functions works differently with the this keyword (javascript will not set the value of the this keyword to be the object)
// when we use arrow functions, the value of this does not change from the value it was at the point in the code the arrow function was invoked eg called when the value of this is the global window object "user.logBlogs()"
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
  // methods defined on an object can also be written like this: remove the ": function". They are shorthand regular functions
  logBlogs() {
    console.log(this.blogs);
    console.log("this user has written the following blogs: ");
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};

user.logBlogs();

// global context and global object in Javascript is the WINDOW object
console.log(this);
