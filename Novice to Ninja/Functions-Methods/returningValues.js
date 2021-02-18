// const joke = function (name = "luigi", time = "night") {
//   console.log(`good ${time} ${name}`);
// };

const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

// we're just storing the value that we get back, regardless of what it's called, here inside this new variable

const callItWhatever = calcArea(5);
console.log(callItWhatever);

// we are able to reuse a value that a function brings back to us
const calcVol = function (area) {};

calcVol(callItWhatever);
