const mongoose = require("mongoose");
const createProductSchema = new mongoose.Schema({
  name: String,
  sku: String,
  description: String,
  price: String,
  stock_level: String,
  email: String
});

// New Collection

const ProductsData = new mongoose.model("ProductsData", createProductSchema);

module.exports = ProductsData;
