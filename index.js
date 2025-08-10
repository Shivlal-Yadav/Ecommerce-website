const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const productRoutes = require('./routes/products');

app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.redirect('/products');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
