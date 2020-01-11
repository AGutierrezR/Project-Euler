let fib = [1, 2],
    sum = 0
    addNumber = true;

while(addNumber) {
  let num = fib[fib.length - 2] + fib[fib.length - 1];
  if(num < 4e+6) {
    fib.push(num);
  } else {
    addNumber = false;
  }
}

for(let num of fib) {
  if(num % 2 === 0) {
    sum += num;
  }
}

console.log(sum);
