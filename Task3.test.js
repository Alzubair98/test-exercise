const Calculator = require('./Task3');


describe('Calculator', ()=>{
    test('addition', ()=>{
        expect(Calculator.add(4,4)).toBe(8);
        expect(Calculator.add(5,5)).toEqual(10);
        expect(Calculator.add(15,5)).not.toBe(10);
    });

    test('subtract numbers', ()=>{
        expect(Calculator.subtract(4,4)).toBe(0);
        expect(Calculator.subtract(5,4)).not.toBe(0);
        expect(Calculator.subtract(2,4)).toEqual(-2);
    });

    test('mulity numbers', ()=>{
        expect(Calculator.multible(4,4)).toBe(16);
        expect(Calculator.multible(2,2)).toBe(4);
        expect(Calculator.multible(1,44)).toBe(44);
    });

    test('divide numbers', ()=>{
        expect(Calculator.divide(2,2)).toBe(1);
        expect(Calculator.divide(4,2)).toBe(2);
        expect(Calculator.divide(8,2)).toBe(4);
    })


});