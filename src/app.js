const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //   check and calculate the correct answers:
  const score = userAnswers.reduce((totalScore, answer, index) => {
    if (answer === correctAnswers[index]) {
      return totalScore + 25;
    }
    return totalScore;
  }, 0);

  //   show result (Intervals & Animating the Score):
  scrollTo(0, 0);
  console.log(score);
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
