const functions = require('./functions');


//toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

//toBeNull
test('is Null returns null', ()=> {
    expect(functions.isNull()).toBeNull();
})

//toBeFalsy
test('Should be falsy', ()=>{
    expect(functions.checkValue(null)).toBeFalsy();
})

//toStrictEqual
test('Should return user name', ()=>{
    expect(functions.createUser()).toStrictEqual({ firstName: 'sonja', lastName: 'ng'})
})

//toBeLessThan
test('Should be under 1600', ()=>{
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

//toMatch for Regex
test('There is no I in team', ()=>{
    expect('team').not.toMatch(/I/);
})

//toContain
test('Admin should be in usernames', ()=>{
    usernames =  ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

//async data
test('user fetched todo', () => {
    expect.assertions(1); //whether .then is called
    return functions.fetchUser()
      .then(data => {
          expect(data.userId).toEqual(1);
      })
})

//async await
test('user fetched todo', async () => {
    expect.assertions(1); //whether .then is called
    const data = await functions.fetchUser();
    expect(data.userId).toEqual(1);
})
