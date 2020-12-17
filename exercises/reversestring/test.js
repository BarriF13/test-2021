const assert = require('assert')
const { reverse } = require('./index');


// const test = (desc, fn) => {
//   console.log('---', desc);
//   try {
//     fn();

//   } catch (err) {
//     console.log(err);
//   }
// }
// it('reverse function exist', ()=>{
//   expect(reverse).toBeDefined()
// })

it('reverse the string', () => {
  reverse('abc');

  assert.strictEqual(reverse('abc'), 'cba', '1-Expected reverse string to be cba' );
});

