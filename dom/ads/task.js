const rotatorCollection = document.querySelector('.rotator');
let index = [...rotatorCollection.children].findIndex(el => el.classList.contains('rotator__case_active'));
let timerId, speed;

timerId = setTimeout(changeWords = () => {
  [...rotatorCollection.children][index].style.color = [...rotatorCollection.children][index].dataset.color;
  [...rotatorCollection.children][index].classList.remove("rotator__case_active");

  if ([...rotatorCollection.children][index].nextElementSibling !== null) {
    [...rotatorCollection.children][index].nextElementSibling.classList.add("rotator__case_active");
    [...rotatorCollection.children][index].style.color = [...rotatorCollection.children][index].dataset.color;
    speed = [...rotatorCollection.children][index].dataset.speed;
    index += 1;
  } else {
    document.querySelector('.rotator').firstElementChild.classList.add('rotator__case_active');
    document.querySelector('.rotator').firstElementChild.style.color = document.querySelector('.rotator').firstElementChild.dataset.color;
    speed = document.querySelector('.rotator').firstElementChild.dataset.speed;
    index = 0;
  }

  timerId = setTimeout(changeWords, speed);
}, speed);