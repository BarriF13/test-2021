// module.exports = {

//   reverse(str) {
//    return str.split('').reverse().join('')
//   }
// }

module.exports = {

  reverse(str) {
  return  str.split('').reduce((reversed, char)=>{
    return char + reversed;
  },'');
  }
}