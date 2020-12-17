const{palindrome}=require('./index');

it ('palindrom function exist', ()=>{
  expect(palindrome).toBeDefined();
})
it('"aba" is palindrome' , ()=>{
  expect(palindrome('aba')).toBeTruthy();
});

it('"aba " is not palindrome' , ()=>{
  expect(palindrome('aba ')).toBeFalsy();
});
it('" aba" is not palindrome' , ()=>{
  expect(palindrome(' aba')).toBeFalsy();
});

it('"greeting" is not palindrome' , ()=>{
  expect(palindrome('gniteerg')).toBeFalsy();
});
it('"1001" is palindrome' , ()=>{
  expect(palindrome('1001')).toBeTruthy();
});