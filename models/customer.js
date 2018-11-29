const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  customername: {
    type: String,
    required: true,
    default: 'name'
  }, 
  email: {
    type: String,
    required: true,
    default: '123@gmail.com'
  }, 
  street1: {
    type: String,
    required: false,
    default:'street1'

  },
  street2: { 
    type: String,
    required: true,
    default: 'street2'
  },
  city: { 
    type: String,
    required: true,
    default: 'city'
  },
  state:{
    type: String,
    required: true,
    default: 'state'
  },
  country:{
    type: String,
    required: true,
    default: 'country'
  },
  phno:{
    type: Number,
    required: false,
    default: 000000000
  }


})
module.exports = mongoose.model('customer', CustomerSchema)