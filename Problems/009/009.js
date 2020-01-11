const sum = 1000;
let a;

for(a = 0; a < sum; a++) {
  let b;
  for (b = a + 1; b < sum; b++) {
    let c = sum - a - b;
    if(a * a + b * b === c * c && b < c){
      console.log(`a = ${a}, b = ${b}, c = ${c}`);
      console.log(`The product abc is ${a * b * c}`)
    }
  }
}
