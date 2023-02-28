const modalWork = () => {
  const modalMain = document.getElementById('modal_main');
  const modalSuccess = document.getElementById('modal_success');
  const modalClose = document.querySelectorAll('div.modal__close');
  const showSuccess = document.querySelector('.show-success');

  modalMain.style.display = "flex";

  showSuccess.addEventListener('click', () => {
    modalMain.style.display = "";
    modalSuccess.style.display = "flex";
  });

  modalClose.forEach(item => {
    item.addEventListener('click', ({target}) => {
      if (target.closest('div.modal__close')) {
        modalMain.style.display = "";
        modalSuccess.style.display = "";
      }
    });
  });
};

window.addEventListener('DOMContentLoaded', modalWork);