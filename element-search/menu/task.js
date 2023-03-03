const menuMain = document.querySelectorAll('.menu_main');

const menuControl = (item) => {
  const menuMainArray = Array.from(item.children);
  const menuSub = item.querySelectorAll('.menu_sub');
  const menuSubArray = Array.from(menuSub);
  const menuItemSub = menuMainArray.filter(el => el.querySelector('.menu_sub'));

  menuItemSub.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      menuSubArray.forEach((sub, j) => {
        if (i === j) {
          sub.classList.toggle('menu_active');
        } else {
          sub.classList.remove('menu_active');
        }
        window.addEventListener('click', (e) => {
          if (!e.target.closest('.menu__item')) sub.classList.remove('menu_active');
        });
      });
    });
  });
};

menuMain.forEach(menu => {
  menuControl(menu);
});