function showDecreasingNumber1 (num) {
  let count = num;
   while (count >=0) {
     console.log(num);
     num--;
   }
}
function showDecreasingNumber2(num) {
  for (let i = num; i >= 0; i-- ) {
    console.log(i);
  }
}
function showDecreasingNumber3 (num) {
  let count = num;
  do {
    console.log(count);
    count --;
  } while (count >=0);
}


function getMultiples1 (numBegin, numEnd, divider) {
  let count = numBegin;
  while (count <= numEnd) {
    if (count % divider === 0) {
      console.log (count);
    }
    count++;
  }
}
function getMultiples2 (numBegin, numEnd, divider) {
  let count = numBegin;
  do {
    if (count % divider === 0) {
      console.log (count);
    }
    count++;
  } while (count <=numEnd);
}
function getMultiples3 (numBegin, numEnd, divider) {
  for(let count = numBegin; count <= numEnd; count++) {
    if (count % divider === 0) {
      console.log(count);
    }
  }
}

function getSum (numBegin, numEnd) {
  let count = numBegin;
  let result = 0;
  while (count <= numEnd) {
    result += count;
    count++;
  }
  return result;
}
function getSum2 (numBegin, numEnd) {
  let result = 0;
  for (let count = numBegin; count <= numEnd; count++) {
    result += count;
  }
  return result;
}


 function solveTask () {
  let count = 0; 
  while (count < 20) {
     const userInput = +prompt ('Реши пример: (2+2*2)');
     if (userInput === 6) {
       break;
     }
     count++;
   }
 }


