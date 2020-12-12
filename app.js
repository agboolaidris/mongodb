const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/database')

mongoose.connection.once('open',()=>{
    console.log('connection is running')
}).on('error',(err)=>{
 console.log(`error connection: ${err}`)
})