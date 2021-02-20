const ul = document.querySelector("ul");
// ul.remove();

const button = document.querySelector("button");

button.addEventListener("click", () => {
  //   ul.innerHTML += "<li>something new to do</li>";
  // OR
  const li = document.createElement("li"); // empty tag with no text inside it
  li.textContent = "something new to do"; // now insert into the DOM
  li.style.color = "red";
  li.classList.add("blue");
  //   ul.append(li); // bottom
  ul.prepend(li); // top
  // new pre/ap pended li items do not have event listener on them eg can not delete after created. Combat via event delegation
});

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log("item clicked");
    // console.log(e);

    // console.log(e.target);
    // OR
    // console.log(item.innerText);

    // e.target.style.textDecoration = "line-through";
    e.target.remove();
  });
});
