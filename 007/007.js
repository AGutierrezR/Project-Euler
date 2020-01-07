// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

let primeNumbers = [],
    number = 2;

function isPrime(n) {
  let x = Math.floor(Math.sqrt(n));

  for(let i = x; i >= 2; i--) {
    if(n % i === 0) {
      return false;
    }
  }
  return true;
}

while(primeNumbers.length < 10001) {
  if(isPrime(number)) {
    primeNumbers.push(number);
  }
  number++;
}

console.log(primeNumbers[primeNumbers.length - 1]);