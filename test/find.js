const mocha = require('mocha')
const assert = require('assert')
const cred = require('../module/cred')

describe('find object in the array',()=>{
    let creds; 

    beforeEach((done)=>{
       creds = new cred({
        name:'sofiat',
        password:12121
       })

     creds.save().then(()=>{
        assert(creds.isNew === false)
        done()
    })
    })

    it('lock for ID',()=>{
        cred.findOne({_id:creds._id}).then((result)=>{
            assert(result._id.toString() === creds._id.toString())
        
        })
    })
    it('lock for name',()=>{
        cred.findOne({_id:creds._id}).then((result)=>{
            assert(result._id.toString() === creds._id.toString())
            
        })
    })
    

})