const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    nama: String,
    tanggalLahir : Number,
    alamat: String
})

module.exports = mongoose.model('User', UserSchema)
