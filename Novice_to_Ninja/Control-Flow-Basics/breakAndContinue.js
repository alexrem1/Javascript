// break: imagine we get to a score of 100, that is the max score for this game. The rest of the scores after don't mean anything so we want to break out of that loop completely

// continue: imagine we check for a score of 0, embarrasing score we dont want logged. Continue jumps out of the current loop and goes back up to the top and continue with the next iteration
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log("Your score: ", scores[i]);

  if (scores[i] === 100) {
    console.log("congrats you got the top score");
    break;
  }
}
