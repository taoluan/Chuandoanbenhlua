const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.json()
const api_controllers = require('../controllers/controllers.api')
router.post('/chuandoan',urlencodedParser,api_controllers.chuandoan)
router.get('/benh',api_controllers.benh)
router.post('/ketqua',urlencodedParser,api_controllers.thongke)
router.post('/tracuu',urlencodedParser,api_controllers.tracuu)
router.get('/timkiem',api_controllers.timkiem)
router.get('/thongketheoloaibenh',api_controllers.thongketheoloaibenh)
router.get('/thongketheokhuvuc',api_controllers.thongketheokhuvuc)
router.get('/dscacbenh',api_controllers.dscacbenh)
router.get('/dscacbenhNoType',api_controllers.dsbenhNoType)
router.get('/gettrieuchung',api_controllers.getTrieuChung)
router.get('/getgionglua',api_controllers.getGiongLua)
router.get('/getalldsbenh',api_controllers.getAlldsbenh)
router.get('/getthongtinbenh',api_controllers.getThongTinBenh)
router.get('/getalltrieuchung',api_controllers.getAllTrieuChung)
router.post('/updatetrieuchung',urlencodedParser,api_controllers.updateTrieuChung)
router.post('/deletetrieuchung',urlencodedParser,api_controllers.deleteTrieuChung)
router.post('/inserttrieuchung',urlencodedParser,api_controllers.insertTrieuChung)
router.post('/updateproperty',urlencodedParser,api_controllers.updateProperty)
router.post('/updateimage',urlencodedParser,api_controllers.updateImage)
module.exports = router