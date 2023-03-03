const clickerStatus = document.querySelector('.clicker__status');
const speedStatus = document.createElement('div');
speedStatus.classList.add('speed__status');
speedStatus.innerHTML = `Скорость клика: <span id="speed__counter">0</span>`;
clickerStatus.insertAdjacentElement('afterend', speedStatus);

const clickerCounter = document.getElementById('clicker__counter');
const speedCounter = document.getElementById('speed__counter');
const cookie = document.querySelector('.clicker__cookie');

let prevTimestamp = Date.now(); 

const countSpeed = () => {
  const currentTimestamp = Date.now();
  const elapsedTime = currentTimestamp - prevTimestamp;
  speedCounter.textContent = (1 / (elapsedTime / 1000)).toFixed(2);
  prevTimestamp = currentTimestamp;
};

cookie.addEventListener('click', () => {
  ++clickerCounter.textContent;
  cookie.width = +clickerCounter.textContent % 2 ? 250 : 200;
  countSpeed();
});