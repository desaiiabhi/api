var mongoose = require('mongoose');

var cartschema = new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    price:{type:String},
    discountpercentage:{type:String},
    rating:{type:String},
    stock:{type:String},
    brand:{type:String},
    category:{type:String},
    thumbnail:{type:String},
    images:{type:String},
    quantity:{type:String}
})

module.exports = mongoose.model('cart',cartschema)