var getDuplicatedNumbers = require('../src/get-duplicated-numbers.js');
console.log(getDuplicatedNumbers);
describe('getDuplicatedNumbers,',function(){

    it('method1 should get duplicated items from number array',function(){
        var arr = [2,3,5,2,8,10,5];
        var duplicatedItems = getDuplicatedNumbers.method1(arr);

        expect(duplicatedItems).toEqual([2,5]);
    });
    it('method2 should get duplicated items from number array',function(){
        var arr = [2,3,5,2,8,10,5];
        var duplicatedItems = getDuplicatedNumbers.method2(arr);

        expect(duplicatedItems).toEqual([2,5]);
    });
});