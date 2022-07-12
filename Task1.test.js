const stringLength = require('./index');

//Task one 
test('get the length of string', ()=>{
    expect(stringLength('hii')).toBe(3);
});


test('check the length if its less than 0', ()=>{
    expect(stringLength('')).toBe('Error conditions are not met');
});


test('check if the length is more than 10', ()=>{
    expect(stringLength('abcdefghigklmn')).toBe('Error conditions are not met');
});
