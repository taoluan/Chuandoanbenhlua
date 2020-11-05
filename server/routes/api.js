const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.json()
const api_controllers = require('../controllers/controllers.api')
router.get('/chuandoan',urlencodedParser,api_controllers.chuandoan)
router.get('/benh',api_controllers.benh)
module.exports = router;