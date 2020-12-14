const mongoose = require('mongoose')
const mocha = require('mocha')
mongoose.Promise = global.Promise


before((done)=>{
    //connect to mongodb
    mongoose.connect('mongodb://localhost:27017/information',{useNewUrlParser:true, useUnifiedTopology:true})

    mongoose.connection.once('open',()=>{
        console.log('connection successfully.....')
        done()
    
    }).on('error',()=>{
        console.log('error occur during the processes........')
    })
    
})

  beforeEach((done)=>{
      mongoose.connection.collections.auths.drop()
      done()
  })  
     

