const express = require('express');
const faker = require("faker");

const router = express.Router();

/*** las endpoint específicas DEBEN R ANTES que las dnámicas ***/
router.get('/filter', (req,res)=>{
  res.send('Filtro');
})
/*** las endpoint específicas DEBEN IR ANTES que las dnámicas ***/

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      img: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product1',
    price: 500
  })
})

module.exports = router;
