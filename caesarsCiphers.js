// link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

const rot13 = str => {
  let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let alphabetCaesar = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M" ];
  let crackedString = "";
  let alphabetIndex = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      crackedString += ' ';
    } else if (alphabetCaesar.indexOf(str[i]) >= 13) {
      alphabetIndex = alphabetCaesar.indexOf(str[i]);
      crackedString += alphabet[alphabetIndex];
    } else if (alphabetCaesar.indexOf(str[i]) < 13 && alphabetCaesar.indexOf(str[i]) >= 0) {
      alphabetIndex = alphabetCaesar.indexOf(str[i]);
      crackedString += alphabet[alphabetIndex];
    } else {
      crackedString += str[i];
    }
  }

  return crackedString;
}