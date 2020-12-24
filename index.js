

function countFactorial (num) {
  let result = 1;
  let count = 1;
  if (num < 0) {
    return false;
  }
  if(num === 0) {
    result = 1;
  }
  while (count++ <= num) {
    result *= count;
  }
  return result;
}

function countPower(num, power) {
  if (power === 0) {
    return 1;
  }
  let result = 1;
  if (power < 0) {
    for (let i = -1; i >= power; i-- ) {
      result *= num;
    }
    result = 1 / result;
  }

  for (let i = 1; i <= power; i++ ) {
    result *= num;
  }
  return result;
}
// console.log(countPower(1, 4)); //1
// console.log(countPower(1, 0)); //0
// console.log(countPower(0, 4)); //0
// console.log(countPower(2, 3)); //8
// console.log(countPower(-2, 3)); //-8
// console.log(countPower(2, -3)); //0.125
// console.log(countPower(2, -1)); //0.5