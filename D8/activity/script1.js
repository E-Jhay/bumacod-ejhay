const squareRoot = (number) => Math.sqrt(number)
console.log(squareRoot(8))

const generateRandomNumber = () => Math.floor((Math.random() * 10) + 1)
console.log(generateRandomNumber())

const toNumber = (str) => Number(str);
console.log(toNumber("123"));

const isNotNumber = (value) => isNaN(value);
console.log(isNotNumber("hello"));

const toString = (num) => num.toString();
console.log(toString(123));