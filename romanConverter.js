//link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

const convertToRoman = (num) => {
    let romanNumbers = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanAnswer = '';
    
    for (let i = 0; num; i++) {
        while (num >= decimalNumbers[i]) {
            num -= decimalNumbers[i];
            romanAnswer += romanNumbers[i];
        }
    }
    
    return romanAnswer;
}


convertToRoman(39);