// Introduction to arrays
let fruits = ['apple', 'banana', 'orange'];

// accessing array elements
console.log('First fruit: ', fruits[0])
console.log('Second fruit: ', fruits[1])
console.log('Third fruit: ', fruits[2])

// Modifying arrays
fruits[1] = 'grapes';
fruits.push('strawberry'); // add element
fruits.pop(); // removes last element
console.log('Modified array: ', fruits);

// Array Iteration
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Array foreach method
let colors = ['red', 'green', 'blue'];

colors.forEach(color => {
    console.log(color)
});

// Methods and properties

// length
console.log('Array length: ', numbers.length)

// IndexOf
console.log('Index 3: ', numbers.indexOf(3))

// includes
console.log('Included: ', numbers.includes(5))

// join
console.log('Joined array: ', numbers.join(' - '))

// slice
let sliceArray = numbers.slice(1,4)
console.log('Sliced array: ', sliceArray)