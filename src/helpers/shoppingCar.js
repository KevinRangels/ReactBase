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

module.exports = {
  addProductValidation,
};
