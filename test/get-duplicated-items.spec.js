var getDuplicatedItems = require('../src/get-duplicated-items.js');
console.log(getDuplicatedItems);
describe('getDuplicatedItems,',function(){

    it('method1 should get duplicated items from number array',function(){
        var arr = [2,3,5,2,8,10,5];
        var duplicatedItems = getDuplicatedItems.method1(arr);

        expect(duplicatedItems).toEqual([2,5]);
    });
    it('method2 should get duplicated items from number array',function(){
        var arr = [2,3,5,2,8,10,5];
        var duplicatedItems = getDuplicatedItems.method2(arr);

        expect(duplicatedItems).toEqual([2,5]);
    });
});