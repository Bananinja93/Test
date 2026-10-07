(function () {
  'use strict';

  const root = document.querySelector('.product-card');
  if (!root) return;

  const skuEl      = root.querySelector('[data-product-sku]');
  const priceEl    = root.querySelector('[data-product-price]');
  const oldPriceEl = root.querySelector('[data-product-old-price]');
  const cartBtn    = root.querySelector('.product-card__cart-btn');
  const radios     = root.querySelectorAll('input[name="packaging"]');

   const DATA = {
    '100':  { sku: '01306', price: '326,40 ₽', oldPrice: '349,20 ₽' },
    '500':  { sku: '01307', price: '1 432 ₽',  oldPrice: '1 646 ₽'  },
    '1000': { sku: '01308', price: '2 064 ₽',  oldPrice: '2 592 ₽'  },
    '5000': { sku: '01309', price: '6 320 ₽',  oldPrice: '8 710 ₽'  },
  };

  function updateCard(value) {
    const item = DATA[value];
    if (!item) return;

    skuEl.textContent   = item.sku;
    priceEl.textContent = item.price;

    if (item.oldPrice) {
      oldPriceEl.textContent = item.oldPrice;
      oldPriceEl.hidden = false;
    } else {
      oldPriceEl.hidden = true;
    }
  }

  radios.forEach(function (radio) {
    radio.addEventListener('change', function (event) {
      if (event.target.checked) updateCard(event.target.value);
    });
  });

 const initial = root.querySelector('input[name="packaging"]:checked');
  if (initial) updateCard(initial.value);

  if (cartBtn) {
    cartBtn.addEventListener('click', function () {
      const active = root.querySelector('input[name="packaging"]:checked');
      console.log('В корзину:', {
        sku: skuEl.textContent,
        packaging: active ? active.value + ' г' : null,
        price: priceEl.textContent,
      });
    });
  }
})();