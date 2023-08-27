var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    cat_name:{type:String}
})

module.exports = mongoose.model('cate',userschema)