const mocha = require('mocha')
const assert = require('assert')
const cred = require('../module/cred')
const { endianness } = require('os')

describe('save record',()=>{
    it('record is save into database',(done)=>{
        let new_cred = new cred({
            name:'idris',
            password:12345
        })

        new_cred.save().then(()=>{
            assert(new_cred.isNew === false )
            done()
        })
    })
})