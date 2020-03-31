var should = require('should')
var average = require('../caculator/average')

describe('caculator average', () => {
    it('should return the average of the array', done=> {
        let result = average([1,2,3])
        result.should.equal(2)
        done()
    })

    it('should return Nan when no element in array', done =>{
        let result = average([])
        result.should.be.NaN
        done()
    })
})