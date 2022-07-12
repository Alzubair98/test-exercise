const Capital = require('./Task4');


test('make the first letter captal', ()=> {
    expect(Capital('name')).toMatch('Name');
    expect(Capital(1)).toBe('please enter a word');
    expect(Capital('')).toBe('please enter a word');
    
});


