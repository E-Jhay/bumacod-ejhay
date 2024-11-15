/*
Destructuring - Extract Values from Arrays and Objects

Destructuring allows you to quickly unpack values from arrays or objects into separate variables, making it easier to work with complex data structures.
*/
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers
console.log(first);
console.log(second);
console.log(rest);

const person = {
    name: 'Bob',
    age: 30,
    country: 'USA'
}

const {name: personName, age, country} = person;

console.log(country)
console.log(age)
console.log(personName)

/*
Spread and Rest Operators - Gather and Spread Values
The spread and rest operators (...) look the same but serve different purposes based on where they are used.
*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2]
console.log(combinedArray)

// Default Parameters - Set Default Values for Function Arguments

const calculatedArea = (length = 1, width = 1) => {
    return length * width;
}

console.log(calculatedArea())
console.log(calculatedArea(3, 4))

