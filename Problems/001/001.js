let sum = 0,
    num = 1000;

for (i = 0; i < num ; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }
}

console.log(`The sum of all the multiples of 3 or 5 below 1000 is ${sum}`);
