let num = 1,
    solution;

function triangleNumbers(n) {
  let sum = 0

  for(let i = n + 1; --i;) {
    sum += i;
  }

  return sum;
}

function divisors(n) {
  if (n === 1) return 1;

  let count = 2, // if is greater then 1, it's always has 2 divisors (1 and itself)
      sqrt = Math.floor(Math.sqrt(n));

  for(let i = 2; i <= sqrt ;i++) {
    if (n % i === 0 ) count += 2;
  }

  return count;
}

while(++num) {
  let triangle = triangleNumbers(num);
  let d = divisors(triangle);

  if(d > 500) {
    solution = triangle;
    break;
  }
}

console.log(solution);
