var express = require('express');
const ProductModel = require('../models/ProductModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var products = await ProductModel.find();
   res.render('product/productList', { products: products });
});

router.get('/delete/:id', async (req, res) => {
   
   await ProductModel.findByIdAndDelete(req.params.id);
   res.redirect('/product');
});

router.get('/add', (req, res) => {
   res.render('product/productAdd');
});

router.post('/add', async (req, res) => {
   var product = req.body;
   await ProductModel.create(product)
      .then(console.log('Add successfully !'))
      .catch(err => console.log(err));
   res.redirect('/product');
});

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var product = await ProductModel.findById(id);
   res.render('product/productEdit', { product: product });
});

router.post('/edit/:id', async (req, res) => {
   await ProductModel.findByIdAndUpdate(req.params.id, req.body)
      .then(console.log('Edit successfully !'))
      .catch(err => console.log(err));
  res.redirect('/product');
});

router.post('/search', async (req, res) => {
   var keyword = req.body.keyword;
   var products = await ProductModel.find({ name : new RegExp(keyword, "i")})
   res.render('product/productList', { products: products });
})

module.exports = router;