var num = 600851475143;

var primeFactor = function(num){
  for (var factor = num - 1; factor > 1; factor--){
    if(num % factor === 0){
      for(var prime = factor - 1; prime > 0; prime--){
        if(factor % prime === 0 && prime != 1){
          break;
        }
        else if(factor % prime === 0 && prime === 1){
          return(factor + " is the highest prime number of " + num)
        }
      }
    }
  }
}

console.log(primeFactor(num));
