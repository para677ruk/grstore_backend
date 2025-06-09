const express = require('express');
const Order = require('../models/Order');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    console.log('Получен заказ:', req.body);
    const order = new Order(req.body);
    await order.save();

    res.json({ success: true, order });
  } catch (e) {
    console.error('Ошибка при сохранении заказа:', e);
    res.status(500).json({ success: false, message: 'Ошибка при сохранении заказа' });
  }
});

module.exports = router;
