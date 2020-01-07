// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let sum = 0
    sumOfSquares = 0,
    squareOfSum = 0,
    diff = null;

for(let i = 1; i <= 100; i++) {
  sumOfSquares = sumOfSquares + Math.pow(i, 2);
  sum += i;
}

squareOfSum = Math.pow(sum, 2);
diff = squareOfSum - sumOfSquares;

console.log(diff);