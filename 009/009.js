// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

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