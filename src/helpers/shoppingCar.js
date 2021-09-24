const addProductValidation = (product, products) => {
  let getProduct = products.find((o) => o.id === product.id);
  if (!getProduct) {
    let res = {
      exist: false,
      product,
    };
    return res;
  } else {
    let newProduct = product;
    let quantityTotal = product.quantity + getProduct.quantity;
    newProduct.quantity = quantityTotal;

    let newProducts = [];

    products.forEach((element) => {
      if (element.id === product.id) {
        element.quantity = quantityTotal;
        element.total = element.cost * quantityTotal;
      }
      newProducts.push(element);
    });
    let res = {
      exist: true,
      products: newProducts,
    };
    return res;
  }
  console.log("addProductValidation", getProduct);
};
const addItemProductValid = (product, products) => {
  let newProduct = product;
  let quantityTotal = product.quantity + 1;
  newProduct.quantity = quantityTotal;
  let newProducts = [];

  products.forEach((element) => {
    if (element.id === product.id) {
      element.quantity = quantityTotal;
      element.total = element.cost * quantityTotal;
    }
    newProducts.push(element);
  });

  localStorage.setItem("car", JSON.stringify(newProducts));

  return newProducts;
};

const subtractItemProductValid = (product, products) => {
  let newProduct = product;
  let quantityTotal = product.quantity - 1;
  newProduct.quantity = quantityTotal;
  let newProducts = [];

  products.forEach((element) => {
    if (element.id === product.id) {
      element.quantity = quantityTotal;
      element.total = element.cost * quantityTotal;
    }
    newProducts.push(element);
  });

  localStorage.setItem("car", JSON.stringify(newProducts));

  return newProducts;
};

module.exports = {
  addProductValidation,
  addItemProductValid,
  subtractItemProductValid,
};
