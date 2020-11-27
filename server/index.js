const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var morgan = require('morgan')
require('dotenv').config()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/api',require('./routes/api'))
app.listen(process.env.PORT,()=>{
    console.log('Server đã hoạt động http://localhost:3000')
  });