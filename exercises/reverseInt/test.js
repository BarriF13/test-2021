const {reverseInt} = require('./index');

it ('reverseInt is a function' , ()=>{
  expect(reverseInt).toBeDefined();
})
it(" '15' to be '51'" , ()=>{
  expect(reverseInt(5)).toEqual(5);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt(90)).toEqual(9);

})
it("reverse the negative number", ()=>{
  expect(reverseInt(-51)).toEqual(-15)
})
it('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0);
});