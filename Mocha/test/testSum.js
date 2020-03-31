var should = require('should')
var sum = require('../caculator/sum')

describe('caculator sum', ()=> {
    it('should return the sum of the array', done=> {
        let result = sum([3,2,3])
        result.should.equal(8)
        done()
    })

    it('should return Nan when no element in array', done =>{
        let result = sum([])
        result.should.be.NaN;
        done()
    })
})