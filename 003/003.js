// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?


let num = 600851475143,
    primeFactors = [],
    divisor = 2;

while(num > 1) {
  if(num % divisor === 0) {
    primeFactors.push(divisor);
    num = num / divisor;
  }
  divisor++;
}

console.log(primeFactors[primeFactors.length - 1]);