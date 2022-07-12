const Capital = require('./Task4');


test('make the first letter captal', ()=> {
    expect(Capital('name')).toMatch('Name');
});