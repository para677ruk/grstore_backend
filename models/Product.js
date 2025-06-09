const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    image: String,
    description: String,
    sizes: [String],
});

module.exports = mongoose.model('Product', ProductSchema);