const mocha = require('mocha')
const assert = require('assert')
const cred = require('../module/cred')

describe('find object in the array',()=>{
    let creds =new cred({
        name:'sofiat',
        password:12121
    })

    beforeEach((done)=>{
     creds.save().then(()=>{
        assert(creds.isNew === false)
        done()
    })
    })

    it('lock for ID',(done)=>{
        cred.findOne({_id:creds._id}).then((result)=>{
            assert(result._id.toString() === creds._id.toString())
            done()
        }).catch(done)
    })

    it('look for sofiat',(done)=>{
        cred.findOne({name:'sofiat'}).then((result)=>{
            assert(result.name === 'sofiat')
            done()
        })
    })

    console.log('id is = ' + creds._id)

   
})