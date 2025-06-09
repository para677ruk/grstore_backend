const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://para677ruk:Lybokeen20--014@cluster0.a8ept0z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const authRoutes = require('./routers/auth');
app.use('/api/auth', authRoutes);

const productRoutes = require('./routers/product');
app.use('/api/products', productRoutes);

const orderRoutes = require('./routers/order');
app.use('/api/orders', orderRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));