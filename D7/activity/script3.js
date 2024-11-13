const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
  },
  {
    id: 2,
    name: "Product 2",
    price: 15,
  },
  {
    id: 3,
    name: "Product 3",
    price: 20,
  },
];

const productList = document.getElementById("productList");
const productListCart = document.getElementById("productListCart");
const totalPriceElement = document.getElementById("totalPriceElement");

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  loadCartProducts();
  updateTotalPrice();
});

// Helper function to create list items for products
function createProductListItem(product, isCart = false, quantity = 1) {
  const li = document.createElement("li");
  li.setAttribute("data-id", product.id);
  li.innerHTML = `${product.name} Price: $${product.price} 
  <button class="product">${isCart ? "Remove" : "Add to cart"}</button>
  ${isCart ? `<span class="quantity"> ${quantity}</span>` : ""}`;

  // Add event listener for Add/Remove button
  li.querySelector(".product").addEventListener("click", function () {
    if (isCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  });

  return li;
}

// Load and display available products
function loadProducts() {
  products.forEach((product) => {
    const li = createProductListItem(product);
    productList.appendChild(li);
  });
}

// Load and display products already in the cart
function loadCartProducts() {
  const productsOnCart =
    JSON.parse(localStorage.getItem("productsOnCart")) || [];
  productsOnCart.forEach((product) => {
    const li = createProductListItem(product, true, product.quantity);
    productListCart.appendChild(li);
  });

  updateTotalPrice();
}

// Add a product to the cart (with quantity management)
function addToCart(product) {
  const productsOnCart =
    JSON.parse(localStorage.getItem("productsOnCart")) || [];

  const existingProductIndex = productsOnCart.findIndex(
    (p) => p.id === product.id
  );
  if (existingProductIndex !== -1) {
    // If the product is already in the cart, increment its quantity
    productsOnCart[existingProductIndex].quantity += 1;

    // Update the quantity display in the cart list
    const cartItems = document.querySelectorAll("#productListCart li");
    cartItems.forEach((item) => {
      if (item.getAttribute("data-id") == product.id) {
        item.querySelector(
          ".quantity"
        ).innerText = ` ${productsOnCart[existingProductIndex].quantity}`;
      }
    });
  } else {
    // If the product is not in the cart, add it with quantity 1
    product.quantity = 1;
    productsOnCart.push(product);

    // Add product to cart list
    const li = createProductListItem(product, true, product.quantity);
    productListCart.appendChild(li);
  }

  // Save updated cart to localStorage
  localStorage.setItem("productsOnCart", JSON.stringify(productsOnCart));

  updateTotalPrice();
}

// Remove a product from the cart
function removeFromCart(product) {
  const productsOnCart =
    JSON.parse(localStorage.getItem("productsOnCart")) || [];
  const updatedCart = productsOnCart.filter((p) => p.id !== product.id);

  // Save updated cart to localStorage
  localStorage.setItem("productsOnCart", JSON.stringify(updatedCart));

  // Remove the product from the DOM
  const cartItems = document.querySelectorAll("#productListCart li");
  cartItems.forEach((item) => {
    if (item.getAttribute("data-id") == product.id) {
      item.remove();
    }
  });

  updateTotalPrice();
}

function updateTotalPrice() {
  const productsOnCart =
    JSON.parse(localStorage.getItem("productsOnCart")) || [];
  let totalPrice = 0;

  // Calculate total price based on quantity and price
  productsOnCart.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });

  // Display the total price in the specified element
  totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
}
