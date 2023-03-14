const tooltips = document.querySelectorAll('.has-tooltip');

const createTooltip = (tooltip) => {
  let tooltipElem = document.createElement('div');
  tooltipElem.classList.add('tooltip');
  tooltipElem.classList.add('tooltip_active');
  tooltipElem.setAttribute('data-position', 'bottom');   // задать значение атрибута для проверки расположения подсказки
  tooltipElem.innerHTML = tooltip.title ? `${tooltip.title}` : 'Здесь должна быть подсказка';
  tooltip.append(tooltipElem);

  if (tooltipElem.dataset.position === 'top') {
    tooltipElem.style.top = (tooltip.offsetTop - tooltipElem.offsetHeight) + 'px';
    tooltipElem.style.left = tooltip.offsetLeft + 'px';
  }
  if (tooltipElem.dataset.position === 'right') {
    tooltipElem.style.top = (tooltipElem.offsetTop - tooltipElem.offsetHeight) + 'px';
    tooltipElem.style.left = (tooltip.offsetLeft + tooltip.offsetWidth) + 'px';
  }
  if (tooltipElem.dataset.position === 'bottom') tooltipElem.style.left = tooltip.offsetLeft + 'px';
  if (tooltipElem.dataset.position === 'left') {
    tooltipElem.style.top = (tooltipElem.offsetTop - tooltipElem.offsetHeight) + 'px';
    tooltipElem.style.left = (tooltip.offsetLeft - tooltipElem.offsetWidth) + 'px';
  }
};

tooltips.forEach(tooltip => {
  tooltip.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('.tooltip')) {
      document.querySelector('.tooltip').remove();
      createTooltip(tooltip);
    } else {
      createTooltip(tooltip);
    }
    document.addEventListener('click', (e) => {
      if (document.querySelector('.tooltip') && 
          !e.target.closest('.has-tooltip') && 
          !e.target.closest('.tooltip')) {
        document.querySelector('.tooltip').remove();
      }
    });
  });
});