////////////////////////////////////////////////////
//Test Task two
const reverseString = require('./Task2');

test('check if the function reverse', ()=>{
    expect(reverseString('abc')).toBe('cba');
});

