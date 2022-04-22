const reverseString = require('./reversestring');

test('reverseString function', ()=>{
    expect(reverseString).toBeDefined();
});

test('string reverses with uppercase', ()=>{
    expect(reverseString('Hello')).toEqual('olleH');
});