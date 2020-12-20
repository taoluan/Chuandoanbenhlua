const mongoose = require('mongoose')
const Schema = mongoose.Schema
const adminSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phonenumber: {type: String, unique: true},
    rules: {type: String, default: 'admin' },
    name:{type:String}
})
module.exports = mongoose.model('admin',adminSchema)