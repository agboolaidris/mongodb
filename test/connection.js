const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//connect to mongodb
before((done)=>{
    mongoose.connect('mongodb://localhost/data')

    mongoose.connection.once('open',()=>{
        console.log('connection successfully.....')
        done()
    }).on('error',()=>{
        console.log('error occur during the processes........')
    })
})
