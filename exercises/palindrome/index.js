// module.exports = {
//    palindrome(str){
//     let revStr= str.split('').reverse().join('');
//     return revStr === str ;
//   }
// }

module.exports = {
  palindrome(str){
   return str.split('').every((char , i)=>{
     return char === str[str.length -i-1]
   });
 }
}