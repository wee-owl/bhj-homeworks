const tooltips = document.querySelectorAll('.has-tooltip');


const createTooltip = (tooltip, position) => {
  let tooltipElem = document.createElement('div');
  tooltipElem.classList.add('tooltip');
  tooltipElem.classList.add('tooltip_active');
  tooltipElem.innerHTML = tooltip.title ? `${tooltip.title}` : 'Здесь должна быть подсказка';
  tooltip.after(tooltipElem);

  tooltip.dataset.position = position;
  if (tooltip.dataset.position === 'top') {
    tooltipElem.style.top = (tooltip.offsetTop - tooltipElem.offsetHeight) + 'px';
    tooltipElem.style.left = tooltip.offsetLeft + 'px';
  }
  if (tooltip.dataset.position === 'right') {
    tooltipElem.style.top = (tooltipElem.offsetTop - tooltipElem.offsetHeight) + 'px';
    tooltipElem.style.left = (tooltip.offsetLeft + tooltip.offsetWidth) + 'px';
  }
  if (tooltip.dataset.position === 'bottom') {
    tooltipElem.style.left = tooltip.offsetLeft + 'px';
  }
  if (tooltip.dataset.position === 'left') {
    tooltipElem.style.top = (tooltipElem.offsetTop - tooltipElem.offsetHeight) + 'px';
    tooltipElem.style.left = (tooltip.offsetLeft - tooltipElem.offsetWidth) + 'px';
  }
};


tooltips.forEach(tooltip => {
  tooltip.setAttribute('data-position', '');

  tooltip.addEventListener('click', (e) => {
    e.preventDefault();
    if (tooltip.nextElementSibling === null || 
      !tooltip.nextElementSibling.className.includes('tooltip_active')) {

        let position = 'bottom';
        let coords = tooltip.getBoundingClientRect();
        if (coords.left < coords.width) {    // ограничение слева
          position = 'right';
        }
        if (coords.top < coords.height*2) {    // ограничение сверху
          position = 'bottom';
        } 
        if (window.innerWidth - coords.right < coords.width) {    // ограничение справа
          position = 'left';
        } 
        if (window.innerHeight - coords.top < coords.height*2) {    // ограничение снизу
          position = 'top';
        }
        createTooltip(tooltip, position);
    } else {
        tooltip.nextElementSibling.remove();
    }
  });
});