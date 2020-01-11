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
