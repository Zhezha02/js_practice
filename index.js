const num1 = + prompt('Введите первое число:');
const num2 = + prompt('Введите второе число:');
const sign = prompt('Введите знак (+, -, *, /):');


const calc = function (num1, num2, sign) {
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  } else {
    let result;
    switch (sign) {
      case '+': {
        result = num1 + num2;
        break;
      }
      case '-': {
        result = num1 - num2;
        break;
      }
      case '*': {
        result = num1 * num2;
        break;
      }
      case '/': {
        result = num1 / num2;
        break;
      }
      default: {
        result = "wrong sign";
      }
    }
    return result;
  } 
}
console.log(calc(num1, num2, sign));


let day = 11;


switch(day) {
  case 1: 
  case 2:
  case 3: 
  case 4:  
  case 5: 
  case 6:
  case 7: 
  case 8: 
  case 9: 
  case 10: {
    console.log ('first decade');
    break;
  }
  case 11: 
  case 12:
  case 13: 
  case 14:  
  case 15: 
  case 16:
  case 17: 
  case 18: 
  case 19: 
  case 20: {
    console.log ('second decade');
    break;
  }
  case 21: 
  case 22:
  case 23: 
  case 24:  
  case 25: 
  case 26:
  case 27: 
  case 28: 
  case 29: 
  case 30: 
  case 31:{
    console.log ('third decade');
    break;
  }
  default : {
    console.log ('missed');
  }
}