const API_URL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const items = document.getElementById('items');
const loader = document.getElementById('loader');


const renderExchanger = (values) => {
  for (key in values) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
      <div class="item__code">${values[key].CharCode}</div>
      <div class="item__value">${values[key].Value}</div>
      <div class="item__currency">руб.</div>
    `;
    items.append(item);
  }
};


fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    renderExchanger(data.response.Valute);
    loader.classList.remove('loader_active');
  }).catch((err) => console.log('Fetch error: ', err));