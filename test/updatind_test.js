const mocha = require('mocha')
const assert = require('assert')
const cred = require('../module/cred')

describe('update data',()=>{
    let creds;
    before((done)=>{
     creds = new cred({
         name:'asabi',
         password:080
     })
     creds.save().then(()=>{
         assert(creds.isNew === false)
         done()
     })
    })

    it('update completed',(done)=>{
        cred.findOneAndUpdate({name:'asabi'},{name:'Idris'}).then(()=>{
            cred.findOne({_id:creds._id}).then((result)=>{
                assert(result.name === 'Idris')
                done()
            })
        })
    })
})