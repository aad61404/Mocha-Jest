

# 專案用途 ： 測試  Jest


```
describe('Examining the syntax of Jest tests', () => {
  it('sums numbers', () => {
      expect(1 + 2).toEqual(3);
      expect(2 + 2).toEqual(4);
   });
});
```

https://jestjs.io/docs/es-ES/tutorial-react
```
yarn add --dev react-test-renderer
```
```
npm test
```

問題排除 
 Cannot find module '/Users/settourmkt/Work/Mocha-Jest/Jest/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault' from 'App.test.js'

```
npm add @babel/runtime
```



