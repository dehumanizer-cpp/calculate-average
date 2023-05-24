console.log('Hello!');

const listeningQuiz = document.querySelector('#listening');
const midterm = document.querySelector('#midterm');

const listeningResult = document.querySelector('#listeningResult');
const midtermResult = document.querySelector('#midtermResult');

const calculateButton = document.querySelector('#calculate');

calculateButton.addEventListener('click', () => {
  listeningResult.value = (listeningQuiz.value / 100) * 6.25;
  midtermResult.value = (midterm.value / 100) * 30;
});
