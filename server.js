const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;

require("dotenv").config();

const app = express();
app.use(cors({
  origin: ["https://grstore-frontend-1.onrender.com"],
  credentials: true,
  
}));
app.use(express.json());

mongoose.connect(process.env.DB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const authRoutes = require('./routers/auth');
app.use('/api/auth', authRoutes);

const productRoutes = require('./routers/product');
app.use('/api/products', productRoutes);

const orderRoutes = require('./routers/order');
app.use('/api/orders', orderRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));
