const hole = document.querySelectorAll('.hole');
const countDead = document.getElementById('dead');
const countLost = document.getElementById('lost');


const startGame = () => {
  hole.forEach(item => {
    item.addEventListener('click', (e) => {
      (e.target && item.classList.contains('hole_has-mole')) ? 
        ++countDead.textContent : 
        ++countLost.textContent;
      setTimeout(endGame, 100);
    });
    item.addEventListener('dblclick', (e) => e.preventDefault());
  });
};


const endGame = () => {
  if (countDead.textContent == 10) reset('Победа!');
  if (countLost.textContent == 5) reset('Вы проиграли!');
};


const reset = (message) => {
  alert(message);
  countDead.textContent = 0;
  countLost.textContent = 0;
};

startGame();