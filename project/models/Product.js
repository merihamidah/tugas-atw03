const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    nama: String,
    harga: Number,
    stok: Number
})

module.exports = mongoose.model('Product', ProductSchema)
