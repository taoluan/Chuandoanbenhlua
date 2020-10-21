const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.json()
const api_controllers = require('../controllers/api')
router.get('/chuandoan',urlencodedParser,api_controllers.chuandoan)
module.exports = router;