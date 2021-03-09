const correctAnswers = ["A", "B", "C", "A"];
const form = document.querySelector(".quiz-form");
const showScore = document.querySelector(".show-score");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
    // show results
    scrollTo(0, 0);
    showScore.querySelector("span").textContent = `${score}`;
    showScore.classList.remove("d-none");
  });

  let output = 0;
  const timer = setInterval(() => {
    showScore.querySelector("span").textContent = `${output}`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 50);
});
