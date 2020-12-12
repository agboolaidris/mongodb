const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema =new Schema({
    name:String,
    password:Number
})

const cred = mongoose.model('auth', schema)

module.exports = cred