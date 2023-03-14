const tooltips = document.querySelectorAll('.has-tooltip');

const createTooltip = (tooltip) => {
  let tooltipElem = document.createElement('div');
  tooltipElem.classList.add('tooltip');
  tooltipElem.classList.add('tooltip_active');
  tooltipElem.innerHTML = tooltip.title ? `${tooltip.title}` : 'Здесь должна быть подсказка';
  tooltip.append(tooltipElem);
  tooltipElem.style.left = tooltip.offsetLeft + 'px';
  tooltipElem.style.top = (tooltip.offsetTop + tooltip.offsetHeight + 5) + 'px';
  //tooltipElem.setAttribute('data-position', '');
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