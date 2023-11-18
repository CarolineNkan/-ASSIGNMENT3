require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const port = 3000;
let mongoose = require('mongoose');
let mongoDB = mongoose.connection;
let DB = require('./server/config/db');
//mongoose.connect
mongoose.connect(DB.URI);
mongoDB.on('error',console.error.bind(console,'Connection Error'));
mongoDB.once('open',()=>{console.log("MongoDB is connected")});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//static files
app.use(express.static('public'));

//setting up templating engine
app.use(expressLayout);
app.set('layout', './layouts/mainlay');

//setting up view engine
app.set('view engine', 'ejs');

//home page
//app.get('/', (req, res) => {
  //res.render('index.ejs')
//})

//Routes
app.use('/', require('./server/routes/customer'))

  //setting up listening server
  app.listen(3000, () => {
    console.log("Server is successfully running")
  });