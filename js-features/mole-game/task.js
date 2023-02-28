const hole = document.querySelectorAll('.hole');
const countDead = document.getElementById('dead');
const countLost = document.getElementById('lost');

let dead = 0;
let lost = 0;


const startGame = () => {
  hole.forEach(item => {
    item.addEventListener('click', (event) => {
      if (event.target && item.classList.contains('hole_has-mole')) {
        dead += 1;
        countDead.textContent = dead;
      } else {
        lost += 1;
        countLost.textContent = lost;
      }
      setTimeout(endGame, 100);
    });
  });
};


const endGame = () => {
  if (+countDead.textContent === 10) {
    alert('Победа!');
    reset();
  }
  if (+countLost.textContent === 5) {
    alert('Вы проиграли!');
    reset();
  }
};


const reset = () => {
  dead = 0;
  lost = 0;
  countDead.textContent = 0;
  countLost.textContent = 0;
};

startGame();