const parentInterests = document.querySelector('.interests_main ul').children;

[...parentInterests].forEach(item => {
  const childInterests = item.lastElementChild.children;

  item.firstElementChild.addEventListener('click', (e) => {
    [...childInterests].forEach(el => {
      if (item.firstElementChild.children[0].checked) {
        el.firstElementChild.children[0].checked = true;
      } else {
        el.firstElementChild.children[0].checked = false;
      }
    });
  });

  item.lastElementChild.addEventListener('click', (e) => {
    if (e.target.closest('label')) {
      if ([...childInterests].some(el => !el.firstElementChild.children[0].checked)) {
        item.firstElementChild.children[0].checked = false;
        item.firstElementChild.children[0].indeterminate = true;
      }
      if ([...childInterests].every(el => !el.firstElementChild.children[0].checked)) {
        item.firstElementChild.children[0].checked = false;
        item.firstElementChild.children[0].indeterminate = false;
      }
      if ([...childInterests].every(el => el.firstElementChild.children[0].checked)) {
        item.firstElementChild.children[0].checked = true;
        item.firstElementChild.children[0].indeterminate = false;
      }
    };
  });
});