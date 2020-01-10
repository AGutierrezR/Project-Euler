// The following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.

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
      //console.log(test, count);
      break;
    }
    //console.log(test, count);
    
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
