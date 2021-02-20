const para = document.querySelector("p");
const paraError = document.querySelector(".error");
const divError = document.querySelector("div.error");
const headingOne = document.querySelector("body > h1");
const paraTwo = document.querySelector("p:nth-child(2)");

console.log(para, paraTwo, paraError, divError, headingOne);

const paraAll = document.querySelectorAll("p");
paraAll.forEach((paragraph) => {
  console.log(paragraph);
});
console.log(paraAll[0]); // node list: .item(), .entries(), .forEach(), .keys() and .values()

const errors = document.querySelectorAll(".error");
console.log(errors);
