const mocha = require('mocha')
const assert = require('assert')
const cred = require('../module/cred')

describe('delete data',()=>{
    let creds;
    before((done)=>{
        creds = new cred({
            name:'sole',
            password: 55555
        })

        creds.save().then(()=>{
            done()
        })
    })

    it('it doesnt exist in the database',()=>{
        cred.findOneAndRemove({name:'sole'}).then(()=>{
            cred.findOne({name:'sofiat'}).then((result)=>{
                assert(result === null)
                done()
            })
        })
    })

    
})
