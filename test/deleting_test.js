const mocha = require('mocha')
const assert = require('assert')
const cred = require('../module/cred')

describe('delete data',()=>{
    let creds;
    before(()=>{
        creds = new cred({
            name:'sofiat',
            password: 55555
        })

        creds.save().then((done)=>{
            done()
        })
    })
})
