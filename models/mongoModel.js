const mongoose = require('mongoose');
const {Schema} = mongoose

const drinkSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const MongoModel = mongoose.model("Drink", drinkSchema)

module.exports = MongoModel