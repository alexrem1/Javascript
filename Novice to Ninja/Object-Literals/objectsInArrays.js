// You can store objects {} inside arrays just like numbers, strings, booleans etc
// each "blog" now represents the object and use .notation

const blogs = [
  { title: "why do I rule", likes: 30 },
  { title: "10 things to do at home", likes: 50 },
];

console.log(blogs);

let user = {
  name: "alex",
  age: 30,
  email: "remzino@live.co.uk",
  location: "berlin",
  blogs: [
    { title: "why do I rule", likes: 30 },
    { title: "10 things to do at home", likes: 50 },
  ],
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
      console.log(blog.title, blog.likes);
    });
  },
};

user.logBlogs();

// global context and global object in Javascript is the WINDOW object
console.log(this);
