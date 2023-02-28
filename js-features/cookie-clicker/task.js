const clickerStatus = document.querySelector('.clicker__status');
const speedStatus = document.createElement('div');
speedStatus.classList.add('speed__status');
speedStatus.innerHTML = `Скорость клика: <span id="speed__counter">0</span>`;
clickerStatus.insertAdjacentElement('afterend', speedStatus);

const clickerCounter = document.getElementById('clicker__counter');
const speedCounter = document.getElementById('speed__counter');
const cookie = document.querySelector('.clicker__cookie');

let click = 0;
let timerId, speed;


const countClick = () => {
  click += 1;
  clickerCounter.textContent = click;
};


const changeImgSize = () => {
  if (cookie.clientWidth === 200) {
    cookie.width = "220";
  } else {
    cookie.width = "200";
  }
};


cookie.addEventListener('click', () => {
  countClick();
  changeImgSize();
});


const countSpeed = () => {
  let totalClicks = +clickerCounter.textContent;
  let avgClick = 0;
  if (timerId) {
    clearInterval(timerId);
  }
  timerId = setInterval(() => {
    avgClick = totalClicks;
    totalClicks = +clickerCounter.textContent;
    speed = totalClicks - avgClick;
    speedCounter.textContent = speed;
  }, 1000);
};

countSpeed();