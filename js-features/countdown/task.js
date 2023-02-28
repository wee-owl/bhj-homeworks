const timer = document.getElementById('timer');


const changeTimer = (time) => {
  const addZero = (n) => n < 10 ? '0' + n : n;
  const day = addZero(Math.floor(time / 60 / 60 / 24));
  const hour = addZero(Math.floor(time / 60 / 60 % 24));
  const minute = addZero(Math.floor(time / 60 % 60));
  const second = addZero(time % 60);

  if (time <= 86399) {
    timer.innerHTML = `${hour}:${minute}:${second}`;
  } else {
    timer.innerHTML = `${day}:${hour}:${minute}:${second}`;
  }
}


const startTimer = () => {
  let time = Number(timer.textContent);
  changeTimer(time);

  let timerId = setTimeout(count = () => {
    if (time === 0) {
      clearInterval(timerId);
      let exit = confirm('Желаете перейти на страницу победителя конкурса?');
      if (exit) {
        window.location.href = 'https://github.com/wee-owl/bhj-homeworks/tree/main/js-features/countdown';
      } else {
        alert('Поучаствуйте в новом конкурсе');
        location.reload();
      }
    } else {
      time -= 1;
      changeTimer(time);
      timerId = setTimeout(count, 1000);
    }
  }, 1000);
};

startTimer();