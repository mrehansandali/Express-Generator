const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/practiseDB")

const productSchema = mongoose.Schema({
  productName: String,
  brandName: String,
  category: String,
  SKU: Number,
})

module.exports = mongoose.model("Products", productSchema);