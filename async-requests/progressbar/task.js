const API_URL = 'https://students.netoservices.ru/nestjs-backend/upload';
const form = document.getElementById('form');
const progress = document.getElementById('progress');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formSent = new FormData();
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', (e) => {
    const value = e.loaded / e.total;
    progress.value = value;
  });

  xhr.open('POST', API_URL);
  xhr.send(formSent);
});