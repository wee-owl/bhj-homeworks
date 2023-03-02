const dropdownValues = document.querySelectorAll('.dropdown__value');
const dropdownList = document.querySelectorAll('.dropdown__list');


const openList = (index) => {
  dropdownList[index].classList.toggle('dropdown__list_active');
};


const clickLink = (index) => {
  let dropdownLinksArray = dropdownList[index].children;
  [...dropdownLinksArray].forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownValues[index].textContent = item.textContent;
      dropdownList[index].classList.remove('dropdown__list_active');
    });
  });
};


dropdownValues.forEach((dropdown, i) => {
  dropdown.addEventListener('click', () => {
    dropdownList.forEach((list, j) => {
      if (i === j) {
        openList(i);
        clickLink(i);
      }
    });
  });
});