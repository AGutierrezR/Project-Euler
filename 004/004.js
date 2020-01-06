// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

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