

### Mocha-Jest

### 看了兩篇文章
## 基礎測試 (加法) 
https://medium.com/cubemail88/node-js-%E7%94%A8-mocha-%E5%81%9A%E5%96%AE%E5%85%83%E6%B8%AC%E8%A9%A6-16dd9125e632

## 動物測試 (較複雜)
https://medium.com/@williamjoshualacey/unit-testing-with-mocha-fda6a6f360c6

# 一般使用
"test": "mocha"


# 基礎
```
const add = require('../index');
describe('測試add函數', () => {
    it('測試5+5預期10', () => {
        if(add(5,5) !== 10) {
            throw new Error('兩樹相加結果不為兩數和');
        }
    })
})
```


# 產生報表
"test": "mocha test/**/*.js --reporter mochawesome"

