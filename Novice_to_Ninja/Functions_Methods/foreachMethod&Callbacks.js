// callback functions are functions that we pass into another function or method as an argument

const myFunc = (callbackFunc) => {
  // do something
  let value = 50;
  callbackFunc(value);
};

myFunc((value) => {
  // do something
  console.log(value);
});

// foreach(iterates through an array, like a loop but more elegant and expects a callback function as an argument)
// for each element inside this array, it calls this callback function eg calls it 5 times for 5 names

let people = ["mario", "luigi", "ryu", "chun-li", "Ken"];

people.forEach((person, index) => console.log(person, index));

// OR

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);
