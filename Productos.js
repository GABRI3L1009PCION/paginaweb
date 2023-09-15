// Obtiene una referencia a los elementos HTML relevantes
const addToCartButtons = document.getElementsByClassName('add-to-cart');
const cartItems = [];
let total = 0;

// Recorre los botones "Añadir al carrito" y añade el evento click a cada uno
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

// Función para agregar un producto al carrito
function addToCart(event) {
  const productCard = event.target.parentNode;
  const product = {
    image: productCard.querySelector('img').src,
    name: productCard.querySelector('h3').innerText,
    description: productCard.querySelector('p').innerText,
    price: parseFloat(productCard.querySelector('.price').innerText.replace('$', ''))
  };
  
  cartItems.push(product);
  total += product.price;
  updateCart();
}

// Función para actualizar el carrito y el total a pagar
function updateCart() {
  // Vaciar el carrito
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  // Recorrer los productos en el carrito y añadirlos al HTML
  cartItems.forEach((product, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement('h4');
    name.innerText = product.name;

    const price = document.createElement('p');
    price.innerText = '$' + product.price.toFixed(2);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Eliminar';
    removeButton.addEventListener('click', () => removeFromCart(index));

    cartItem.appendChild(image);
    cartItem.appendChild(name);
    cartItem.appendChild(price);
    cartItem.appendChild(removeButton);

    cartContainer.appendChild(cartItem);
  });

  // Actualizar el total a pagar
  const totalElement = document.getElementById('total');
  totalElement.innerText = 'Total a pagar: $' + total.toFixed(2);
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
  total -= cartItems[index].price;
  cartItems.splice(index, 1);
  updateCart();
}
