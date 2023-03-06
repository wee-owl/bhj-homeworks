// смена размера шрифта
const fontSizeArray = document.querySelector('.book__control_font-size').children;

[...fontSizeArray].forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let index = [...fontSizeArray].indexOf(item);
    [...fontSizeArray][index].classList.add('font-size_active');

    let newfontSizeArray = [...fontSizeArray].filter(el => el !== [...fontSizeArray][[index]]);
    newfontSizeArray.forEach(item => item.classList.remove('font-size_active'));

    if (item.dataset.size === 'small') {
      document.querySelector('.book').classList.add('book_fs-small');
      document.querySelector('.book').classList.remove('book_fs-big');
    } else if (item.dataset.size === 'big') {
      document.querySelector('.book').classList.add('book_fs-big');
      document.querySelector('.book').classList.remove('book_fs-small');
    } else {
      document.querySelector('.book').classList.remove('book_fs-small', 'book_fs-big');
    }
  });
});


// смена цвета текста
const fontColorArray = document.querySelector('.book__control_color').children;

[...fontColorArray].forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let index = [...fontColorArray].indexOf(item);
    [...fontColorArray][index].classList.add('color_active');

    let newfontColorArray = [...fontColorArray].filter(el => el !== [...fontColorArray][[index]]);
    newfontColorArray.forEach(item => item.classList.remove('color_active'));

    if (item.dataset.textColor === 'gray') {
      document.querySelector('.book').classList.add('book_color-gray');
      document.querySelector('.book').classList.remove('book_color-whitesmoke');
    } else if (item.dataset.textColor === 'whitesmoke') {
      document.querySelector('.book').classList.add('book_color-whitesmoke');
      document.querySelector('.book').classList.remove('book_color-gray');
    } else {
      document.querySelector('.book').classList.remove('book_color-gray', 'book_color-whitesmoke');
    }
  });
});


// смена цвета фона
const bgColorArray = document.querySelector('.book__control_background').children;

[...bgColorArray].forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let index = [...bgColorArray].indexOf(item);
    [...bgColorArray][index].classList.add('color_active');

    let newbgColorArray = [...bgColorArray].filter(el => el !== [...bgColorArray][[index]]);
    newbgColorArray.forEach(item => item.classList.remove('color_active'));

    if (item.dataset.bgColor === 'black') {
      document.querySelector('.book').classList.add('book_bg-black');
      document.querySelector('.book').classList.remove('book_bg-gray');
    } else if (item.dataset.bgColor === 'gray') {
      document.querySelector('.book').classList.add('book_bg-gray');
      document.querySelector('.book').classList.remove('book_bg-black');
    } else {
      document.querySelector('.book').classList.remove('book_bg-black', 'book_bg-gray');
    }
  });
});