let count = 1,
    number = 1;

function isPrime(n) {
  if (n === 1) { return false }
  else if (n < 4) { return true }
  else if (n % 2 === 0) {return false}
  else if (n < 9) {return true}
  else if (n % 3 === 0) {return false}
  else {
    r = Math.floor(Math.sqrt(n));
    f = 5;
    while(f <= r) {
      if(n % f === 0) {return false}
      if(n % (f + 2) === 0) {return false}
      f = f + 6;
    }
    return true;
  }
}

while(count < 10001) {
  if (isPrime(number)) {count++;}
  number++
}

console.log(number);
