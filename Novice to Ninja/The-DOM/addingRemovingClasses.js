// const content = document.querySelector("p");

// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");

const paras = document.querySelectorAll("p");
paras.forEach((p) => {
  //   console.log(p.innerText); //visible text
  //   console.log(p.textContent); // + hidden text
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  } else if (p.textContent.includes("success")) {
    p.classList.add("success");
  } else p.classList.add("blue");
});

const title = document.querySelector(".title");
title.classList.toggle("blue");
title.classList.toggle("blue");
