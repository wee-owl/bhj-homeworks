const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

const changeQuantity = (product) => {
  let value = Number(product.querySelector('.product__quantity-value').textContent);
  product.querySelector('.product__quantity-controls').addEventListener('click', (e) => {
    if (e.target.closest('.product__quantity-control_dec')) {
      value = value <= 1 ? 0 : value -= 1;
      product.querySelector('.product__quantity-value').textContent = value;
    }
    if (e.target.closest('.product__quantity-control_inc')) {
      value += 1;
      product.querySelector('.product__quantity-value').textContent = value;
    }
  });
};

const createCart = (product) => {
  const cartProduct = document.createElement('div');
  cartProduct.classList.add('cart__product');
  cartProduct.dataset.id = product.dataset.id;
  cartProduct.innerHTML = `
    <img class="cart__product-image" src="${product.querySelector('.product__image').src}">
    <div class="cart__product-count">${product.querySelector('.product__quantity-value').textContent}</div>
  `;
  cartProducts.append(cartProduct);
};

const addCart = (product) => {
  product.querySelector('.product__add').addEventListener('click', (e) => {
    if (![...cartProducts.children].length) {
      createCart(product);
    } else {
      if ([...cartProducts.children].some(el => el.dataset.id === product.dataset.id)) {
        let item = [...cartProducts.children].filter(el => el.dataset.id === product.dataset.id);
        item[0].querySelector('.cart__product-count').textContent = product.querySelector('.product__quantity-value').textContent;
      } else {
        createCart(product);
      }
    }
  });
};

products.forEach(product => {
  changeQuantity(product);
  addCart(product);
});