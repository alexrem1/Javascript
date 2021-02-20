const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("you clicked me!");
});

// Attaching an event listener to each individual item inside this collection of items
const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log("item clicked");
    // console.log(e);
    // console.log(e.target);
    // OR
    // console.log(item.innerText);
    e.target.style.textDecoration = "line-through";
  });
});
