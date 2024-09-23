const products = require("../models/smartphoneModel");

exports.getSmartphones = (req, res) => {
  const { page = 1, limit = 20, brand, os, color } = req.query;

  // Фільтрація продуктів
  let filteredProducts = products;

  if (brand) {
    filteredProducts = filteredProducts.filter(
      (product) => product.brand === brand
    );
  }
  if (os) {
    filteredProducts = filteredProducts.filter((product) => product.os === os);
  }
  if (color) {
    filteredProducts = filteredProducts.filter(
      (product) => product.color === color
    );
  }

  // Пагінація
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  res.json({
    total: filteredProducts.length,
    page,
    limit,
    products: paginatedProducts,
  });
};
