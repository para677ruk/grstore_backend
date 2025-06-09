const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Получить все товары с фильтрами и сортировкой
router.get('/', async (req, res) => {
  const { brand, sort } = req.query;
  let filter = {};
  if (brand) filter.brand = brand;

  let sortOption = {};
  if (sort === 'price_asc') sortOption.price = 1;
  if (sort === 'price_desc') sortOption.price = -1;

  const products = await Product.find(filter).sort(sortOption);
  res.json(products);
});

// Получить один товар по id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Товар не найден' });
    res.json(product);
  } catch (e) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// (опционально) Добавить товар (для теста)
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

module.exports = router;