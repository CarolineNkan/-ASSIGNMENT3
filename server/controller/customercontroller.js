const Customer = require('../models/customer');
const mongoose = require('mongoose');

//customer routes
exports.homepage = async(req,res) => {
    res.render('index.ejs');
}
//NEW CUSTOMER FORM
exports.addcustomer = async(req,res) => {
    res.render('customer/add');
}
//POST
exports.postcustomer = async(req,res) => {
    console.log(req.body);
    res.render('customer/add');
}