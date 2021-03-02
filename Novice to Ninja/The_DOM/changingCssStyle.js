const title = document.querySelector("h1");

// title.setAttribute("style", "margin: 50px"); //overwrites orange

console.log(title.style);
console.log(title.style.color);

title.style.margin = "50px";
title.style.color = "crimson";
title.style.fontSize = "60px"; //camelCase doublebarrel properties
title.style.margin = "";
