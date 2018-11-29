
const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  orderID: {
    type: Number,
    required: true,
    unique: true,
    default: 555
  },
  no_of_products:{
    type:Number,
    requried:true,
  },
  datePlaced: {
    type: Date,
    required: true,
    default: Date.now()
  },
  dateShipped: {
    type: Date,
    required: false
  },
  paymentType: {
    type: String,
    enum: ['not selected yet', 'credit card', 'cash', 'check'],
    required: true,
    default: 'not selected yet'
  },
  paid: {
    type: Boolean,
    default: false,
 required: true
  },
  price:{
    type:Number,
    required:true,
    default:0.00
}
})
module.exports = mongoose.model('Order', OrderSchema)
