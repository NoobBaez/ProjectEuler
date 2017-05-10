var nowNum = 2;
var lastNum = 1;
var par  = 2;
var limit = true;

while(limit){
  newNum = nowNum + lastNum;

  if (newNum <= 4000000){
    if(newNum % 2 === 0){
      par += newNum
    }
  }
  else{
    limit = false
  }

  lastNum = nowNum;
  nowNum = newNum;
}

console.log(par);
