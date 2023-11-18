const express = require('express');
const router = express.Router();
const customercontroller = require('../controller/customercontroller');

//customer routes
router.get('/', customercontroller.homepage);
router.get('/add', customercontroller.addcustomer);
router.post('/add', customercontroller.postcustomer);
module.exports = router;