var mongoose = require('mongoose');

var postschema = new mongoose.Schema({
    title:{type:String},
    body:{type:String},
    tags:{type:Array},
    reactions:{type:String}
})

module.exports = mongoose.model('post',postschema);