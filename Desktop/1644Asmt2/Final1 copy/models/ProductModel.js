var mongoose = require ('mongoose');
var ProductSchema = mongoose.Schema({
   name: String,
   price: String,
   category: String,
   class: String,
   image: String,
   stock: Number
});
const ProductModel = mongoose.model('product', ProductSchema, 'product');
module.exports = ProductModel;