const API_URL = 'https://students.netoservices.ru/nestjs-backend/upload';
const form = document.getElementById('form');
const progress = document.getElementById('progress');
const file = document.getElementById('file');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formSent = new FormData();
  const xhr = new XMLHttpRequest();

  if (file) formSent.append('UploadFile', file.files[0]);

  xhr.upload.addEventListener('progress', (e) => {
    const value = e.loaded / e.total;
    progress.value = value;
  });

  xhr.open('POST', API_URL);
  xhr.send(formSent);
});