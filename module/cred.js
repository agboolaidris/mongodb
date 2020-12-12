const mongoose = require('mongoose')

//create schema
const schema = mongoose.Schema;

const cred = new schema({
    name:String,
    password:Number
})

// create module

const credentials = mongoose.model('Credentials',cred)

module.exports = credentials
