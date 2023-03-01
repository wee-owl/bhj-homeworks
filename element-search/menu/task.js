// список всех menu_main
const menuMain = document.querySelectorAll('.menu_main');

const menuControl = (item) => {
  // массив из списка всех li в menu_main
  const menuMainArray = Array.from(item.children);

  // массив из списка всех menu_sub в menu_main
  const menuSub = item.querySelectorAll('.menu_sub');
  const menuSubArray = Array.from(menuSub);

  // массив из menu__item, которые имеют menu_sub
  const menuItemSub = menuMainArray.filter(el => el.querySelector('.menu_sub'));

  menuItemSub.forEach((item, i) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      menuSubArray.forEach((sub, j) => {
        if (i === j) {
          sub.classList.toggle('menu_active');
        } else {
          sub.classList.remove('menu_active');
        }
      });
    });
  });
};

menuMain.forEach(menu => {
  menuControl(menu);
});