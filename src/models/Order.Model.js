const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    userName:{
        type: String,
        require: true
    },
    itemName: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }

}   ,
    {
        timestamps: true
    })

module.exports = mongoose.model('orders',OrderSchema)