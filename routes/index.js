/**
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')
const LOG = require('../utils/logger.js')

LOG.debug('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', function (req, res){
  res.render("index.ejs");
})
router.get('/customer', function (req, res){
  res.render("customer/index.ejs");
})
router.get('/product', function (req, res){
  res.render("product/index.ejs");
})
router.get('/order', function (req, res){
  res.render("order/index.ejs");
})

router.get('/orderLineItems', function (req, res){
  res.render("orderLineItems/index.ejs");
})
router.use('/customer',require('../controllers/customer.js'))
router.use('/product',require('../controllers/product.js'))
router.use('/order',require('../controllers/order.js'))
router.use('/orderLineItems',require('../controllers/orderLineItems.js'))


LOG.debug('END routing')
module.exports = router
