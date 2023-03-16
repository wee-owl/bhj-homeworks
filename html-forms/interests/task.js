const parentInterests = document.querySelector('.interests_main ul').children;

[...parentInterests].forEach(item => {
  item.firstElementChild.addEventListener('click', (e) => {
    const childInterests = item.lastElementChild.children;
    [...childInterests].forEach(el => {
      if (item.firstElementChild.children[0].checked) {
        el.firstElementChild.children[0].checked = true;
      } else {
        el.firstElementChild.children[0].checked = false;
      }
    });
  });
});