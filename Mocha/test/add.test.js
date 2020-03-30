// console.log('hello World');


// 基礎
/*
const add = require('../index');
describe('測試add函數', () => {
    it('測試5+5預期10', () => {
        if(add(5,5) !== 10) {
            throw new Error('兩樹相加結果不為兩數和');
        }
    })
})
*/

var expect = require('chai').expect;
const add = require('../index');
describe('測試add函數', ()=> {
    it('測試5+5預期101', () => {
        expect(add(5,5)).to.be.equal(10);
    })
})