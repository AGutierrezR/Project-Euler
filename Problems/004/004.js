let num,
    numStr,
    numStrReversed,
    palindromics = [],
    biggerPalindromic = 0

for(let n = 100; n <= 999; n++) {

  for(let m = 100; m <= 999; m++) {
    num = n * m;
    numStr = num + '';
    numStrReversed = numStr.split('').reverse().join('')
    if (numStr === numStrReversed) {
      palindromics.push(num);
    }
  }

}

for(let num of palindromics) {
  if(num > biggerPalindromic) {
    biggerPalindromic = num;
  }
}

console.log(biggerPalindromic);
