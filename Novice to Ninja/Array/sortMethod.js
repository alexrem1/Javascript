// sort directly changes the array eg destructive

// example 1 - sorting strings
const names = ["mario", "shaun", "chun-li", "alex", "yoshi", "zelda"];

names.sort(); // alphabetically
names.reverse();
console.log(names);

// example 2 - sorting numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort();
// scores.reverse();
console.log(scores); // currently only looking at the first number, not the whole number

scores.sort((a, b) => a - b);
console.log(scores); // looks at the whole number

// example 3 - sorting objects
const players = [
  { name: "mario", score: 20 },
  { name: "luigi", score: 10 },
  { name: "chun-li", score: 50 },
  { name: "yoshi", score: 30 },
  { name: "shaun", score: 70 },
];

// firing a callback function for each consecutive pair of elements inside the array
// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

players.sort((a, b) => b.score - a.score);
console.log(players);
