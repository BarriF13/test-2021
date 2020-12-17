module.exports ={

  reverseInt(n) {
    let numRev = n.toString().split('').reverse().join('');
    return parseInt(numRev) * Math.sign(n)
  }


}