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
