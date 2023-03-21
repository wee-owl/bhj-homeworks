const API_URL = 'https://students.netoservices.ru/nestjs-backend/poll';
const question = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');


const getQuestion = (value) => {
  question.innerHTML = `${value.data.title}`;
  const answers = value.data.answers.map(item => {
    const button = document.createElement('button');
    button.classList.add('poll__answer');
    button.textContent = `${item}`;
    return button;
  });
  pollAnswers.append(...answers);
};


const showAlert = () => {
  document.querySelectorAll('.poll__answer').forEach(item => {
    item.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
      location. reload();
    });
  });
};


fetch(API_URL)
  .then(response => response.json())
  .then(value => {
    getQuestion(value);
    showAlert();
  }).catch((err) => console.log('Fetch error: ', err));