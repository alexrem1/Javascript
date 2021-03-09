const para = document.querySelector("p");
console.log(para.innerText); //property not a method()

// para.innerText += "This course is fantastic!";
para.innerText = "This course is fantastic!";

const paras = document.querySelectorAll("p");
paras.forEach((para) => {
  console.log(para.innerText);
  para.innerText += " new text";
});

const content = document.querySelector(".content");
console.log(content.innerHTML);

content.innerHTML = "<h2>this is a new H2</h2>";
console.log(content.innerHTML);

// data we want to output to the browser
const people = ["mario", "luigi", "ken"];
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
