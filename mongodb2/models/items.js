const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name:String,
    class:String,
    classs:String,
    phoneno:Number

});
module.exports = mongoose.model('Item',itemSchema);