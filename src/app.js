const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  const score = userAnswers.reduce((totalScore, answer, index) => {
    if (answer === correctAnswers[index]) {
      return totalScore + 25;
    }
    return totalScore;
  }, 0);

  console.log(score);
});
