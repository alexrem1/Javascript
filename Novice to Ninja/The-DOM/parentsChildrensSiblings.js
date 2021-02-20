const article = document.querySelector("article");

console.log(article.children);
// html collection > array
console.log(Array.from(article.children));
console.log(article.children); // not destructive method, still HTML collection

Array.from(article.children).forEach((child) => {
  child.classList.add("article-element", "blue");
  child.classList.remove("blue");
});

const title = document.querySelector("h2");

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

//chaining
console.log(title.nextElementSibling.parentElement.children);
