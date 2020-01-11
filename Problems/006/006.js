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
