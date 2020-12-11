const assert = require('assert')
const { reverse } = require('./index');

const test = (desc, fn) => {
  console.log('---', desc);
  try {
    fn();

  } catch (err) {
    console.log(err);
  }
}

test('reverse the string', () => {
  reverse('abc');

  
  if (reverse('abc') !== 'cba') {
    throw new Error('1-Expected reverse string to be cba')
  }
});
test('reverse the string and leave no space', () => {
  reverse('abc');

  if (reverse('abc')!== ' cba') {
    throw new Error('2-Expected reverse string to not to have extra space')
  }
});
