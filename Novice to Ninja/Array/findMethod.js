// find method returns the first value inside an array which passes a certain condition

const scores = [10, 5, 0, 40, 30, 30, 90, 70];

const firstHighScore = scores.find((score) => score > 50);
console.log(firstHighScore);
