var total = 0;

for(var num = 0; num <= 1000; num++){
  if ((num % 3 === 0) || (num % 5 === 0)) {
    total += num;
  }
}
console.log(total);
