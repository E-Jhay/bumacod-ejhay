const productList = document.querySelector(".product-list");

const products = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Can't get products");
    }

    const data = await response.json();
    let content = "";

    data.forEach((product) => {
      content += `
        <div class="col-md-4">
          <div class="card h-100">
            <img
              class="card-img-top"
              src="${product.image}"
              alt="${product.title}"
              style="object-fit: contain; height: 200px;"
            />
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="fw-bold text-secondary">$${product.price.toFixed(2)}</p>
              <p class="card-text">${product.description}</p>
            </div>
          </div>
        </div>`;
    });

    productList.innerHTML = content;
  } catch (error) {
    console.error(error);
    productList.innerHTML = `<div class="col-12 text-center">
      <div class="alert alert-danger">Failed to load products. Please try again later.</div>
    </div>`;
  }
};

products();
