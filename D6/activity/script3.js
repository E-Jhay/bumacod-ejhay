const isEven = (num) => {
    return `${num} is ${num % 2 === 0 ? 'even' : 'odd'}`
}

for (let i = 1; i <= 10; i++) {
    console.log(isEven(i))    
}
const multiply = (num1, num2) => {
    return num1 * num2
}
let num1 = 0;
let num2 = 0;
while(num1 >= 0 || num2 >= 0) {
    num1 = parseFloat(prompt("Enter number 1:"));
    num2 = parseFloat(prompt("Enter number 2:"));
    
    if (num1 >= 0 && num2 >= 0) {
        console.log(multiply(num1, num2));
    } else {
        console.log("Exiting loop, negative number entered.");
    }
}

const reversedString = (text) => {
    return text.split('').reverse().join('');
}
console.log(reversedString('Hello'))

const countVowels = (text) => {
    return text.split('').filter(letter => ['a', 'e', 'i', 'o', 'u'].includes(letter)).length;
}
console.log(countVowels('Javascript'))

const findMax = (numbers) => {
    return Math.max(...numbers);
}
console.log(findMax([4, 9, 2, 7, 5]))

const calculateFactorial = (n) => {
    if (n < 0) return "Factorial is not defined for negative numbers";
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(calculateFactorial(3))

const isPalindrome = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

console.log(isPalindrome('level'));

const sumArray = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(capitalizeFirstLetter('javascript'));

const filterEvenNumbers = (arr) => {
    return arr.filter(num => num % 2 === 0);
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
