const speak = function (name, time) {
  console.log(`good ${time} ${name}`);
};

speak();
speak("mario and luigi", "morning");
// we call the speak function passing in this value(ARGUMENT) "mario" and assigns it to the "name" variable we created in the function parameter and now it can be accessed inside the function
// the order of the arguments must match the order of the function parameters

console.log(name); // outside the scope of the code block so it won't work

// or we can give the function default values
const joke = function (name = "luigi", time = "night") {
  console.log(`good ${time} ${name}`);
};
joke();
joke("alex"); // passing in arguments will overwrite the default values
