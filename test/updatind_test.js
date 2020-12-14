const mocha = require('mocha')
const assert = require('assert')
const cred = require('../module/cred')

describe('update data',()=>{
  let creds;
    beforeEach((done)=>{
        creds = new cred({
            name:'asabi',
            password:3
        })
        creds.save().then(()=>{
            done()
        })
 }) 
  
  
it('update completed',(done)=>{
        cred.findOneAndUpdate({name:'asabi'},{name:'malik'}).then(()=>{
            cred.findOne({_id:creds._id}).then((result)=>{
                assert(result.name === 'malik')
                done()
            })
        })
    
    })

 it('increment by one',(done)=>{
     cred.update({},{$inc:{password:1}})
     done()
 })   
})