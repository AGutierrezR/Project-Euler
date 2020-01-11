let num = 999999
    longest = 0,
    count = 1,
    solution = 0;

function collatz(n){

  if(n % 2 === 0) { return n / 2 }

  return 3 * n + 1 
}

while(num) {
  test = num;
  count = 1;
  
  while(test) {
    if(test === 1) {
      break;
    }
    
    test = collatz(test);
    count++
  }

  if(count > longest) {
    longest = count;
    solution = num;
    console.log(longest, num);
  }

  num--;
}
