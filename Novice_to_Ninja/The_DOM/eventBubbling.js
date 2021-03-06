// Event Bubbling: event starts at the event target, then it bubbles up to the parents to see if there's any event listeners attached to those too which will then fire the callback function for those event listeners as well

const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li"); // empty tag with no text inside it
  li.textContent = "something new to do"; // now insert into the DOM
  li.style.color = "red";
  li.classList.add("blue");
  //   ul.append(li); // bottom
  ul.prepend(li); // top
  // new pre/ap pended li items do not have event listener on them eg can not delete after created. Combat via event delegation
});

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // console.log("item clicked");
//     // console.log(e);

//     // console.log(e.target);
//     // OR
//     // console.log(item.innerText);

//     // e.target.style.textDecoration = "line-through";
//     console.log("event in LI");
//     e.stopPropagation(); //stop event bubbling up to the parent
//     e.target.remove();
//   });
// });

// there's a better way than attaching an event listener to each li tag, instead i'll attach a single event listener to the UL eg event delegation

ul.addEventListener("click", (e) => {
  //   console.log("event in UL");
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
