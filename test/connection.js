const mongoose = require('mongoose')

//connect to mongodb
mongoose.connect('mongodb://localhost/data')

mongoose.connection.once('open',()=>{
    console.log('connection successfully.....')
}).on('error',()=>{
    console.log('error occur during the processes........')
})