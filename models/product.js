const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  productName: {
    type: String,
    required: true,
    default: ''
  }, 
  productDescription: {
    type: String,
    required: true,
    default: ''
  }, 
  price: {
    type: Number,
    required: false,
    default:0

  },
  productCategory: { 
    type: String,
    required: true,
    default: ''
  },
  sellerId: { 
    type: Number,
    required: true,
    default:0,
    minimum:0,
    maximum:100
  }
})
module.exports = mongoose.model('Product', ProductSchema)