// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

let num = 2e+6,
    sum = 0,
    primes = [];

function isPrime(n) {
  let x = Math.floor(Math.sqrt(n));

  for(let i = x; i >= 2; i--) {
    if(n % i === 0) {
      return false;
    }
  }
  return true;
}

while(num >= 2) {
  if(isPrime(num)) {
    sum += num;
  }
  num--
}

console.log(sum);
