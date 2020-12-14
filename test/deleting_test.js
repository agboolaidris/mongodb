const mocha = require('mocha')
const assert = require('assert')
const cred = require('../module/cred')

describe('delete data',()=>{
    let creds;
    before((done)=>{
        creds = new cred({
            name:'sofiat',
            password: 55555
        })

        creds.save().then(()=>{
            assert(creds.isNew === false)
            done()
        })
    })

    it('it doesnt exist in the database',()=>{
        cred.findOneAndDelete({name:'sofiat'}).then(()=>{
            cred.findOne({name:'sofiat'}).then((result)=>{
                assert(result === null)
                
                done()
            })
        })
    })

    
})
