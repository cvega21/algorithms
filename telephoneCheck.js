// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

function telephoneCheck(str) {
  let parenthesesOpened = false;
  let parenthesesClosed = false;
  let allowedChars = /[-()\s]/;
  let currentNumber = 0;
  let realNumbersCount = 0;

  for (let i = 0; i < str.length; i++) {
    currentNumber = str[i];
    if (parseInt(currentNumber) || currentNumber === '0') {
      realNumbersCount++;
    }
  }

  if (realNumbersCount !== 10 && realNumbersCount !== 11) {
    return false;
  }
  
  for (let i = 0; i < str.length; i++) {
    currentNumber = str[i];
    if (realNumbersCount === 11 && str[0] != '1') {
      return false;
    }

    if (i === 0 && !parseInt(currentNumber) && currentNumber != '(') {
        return false;
      }

    if (parseInt(currentNumber)) {
      //
    } else if (currentNumber.match(allowedChars)) {
      if (currentNumber === '(') {
        parenthesesOpened = true;
      } else if (currentNumber === ')' && parenthesesOpened) {
        parenthesesOpened = false;
      } else if (currentNumber === ')') {
        return false;
      }
    } else {
      return false;
    } 
  }
  

  if (parenthesesOpened || parenthesesClosed) {
    return false;
  }

  return true;
}