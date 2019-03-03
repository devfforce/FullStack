const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    ruc:String,
    correlativo: String,
    valorVenta: String,
    igv: String,
    date: String,
    
});

module.exports = mongoose.model('product', productSchema);