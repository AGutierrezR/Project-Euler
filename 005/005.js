// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let num = 1,
    minDivisor = 1,
    maxDivisor = 20,
    found = false;

while(found === false) {

  for(let i = minDivisor; i <= maxDivisor; i++) {
    if(num % i !== 0) {
      found = false;
      break;
    } else {
      found = true;
    }
  }

  if(!found) {
    num++
  }
}

console.log(num);