const rotatorsBlocks = document.querySelectorAll('.rotator');

const changeRotatorMessage = (rotator) => {
  const rotators = rotator.querySelectorAll('.rotator__case');
  const rotatorsArray = [...rotators];

  const changeWords = () => {
    let indexStart = 0;
    let indexNext = rotatorsArray.length - 1;
    rotatorsArray[indexStart].style.color = rotatorsArray[indexStart].dataset.color;
    let speed;

    let timerId = setInterval(() => {
      rotatorsArray[indexStart].classList.remove('rotator__case_active');
      if (indexStart === indexNext) {
        indexStart = 0;
      } else {
        indexStart += 1;
      }
      rotatorsArray[indexStart].classList.add('rotator__case_active');
      rotatorsArray[indexStart].style.color = rotatorsArray[indexStart].dataset.color;
      speed = rotatorsArray[indexStart].dataset.speed;
    }, `${+rotatorsArray[indexStart].dataset.speed}`);
  };
  changeWords();
};

rotatorsBlocks.forEach(rotator => changeRotatorMessage(rotator));