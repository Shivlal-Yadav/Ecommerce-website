const express = require('express');
const router = express.Router();

// Mock product data
const products = [
  { id: 1, name: 'Laptop', price: 1200, description: 'A powerful laptop for all your needs.' },
  { id: 2, name: 'Smartphone', price: 800, description: 'The latest smartphone with amazing features.' },
  { id: 3, name: 'Headphones', price: 150, description: 'High-quality sound for an immersive experience.' }
];

// Route to display all products
router.get('/', (req, res) => {
  res.render('products', { title: 'Products', products: products });
});

// Route to display a single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.render('product', { title: product.name, product: product });
});

module.exports = router;
