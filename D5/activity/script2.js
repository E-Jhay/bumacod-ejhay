// Activity 2: Print Numbers in a Range 

// D5
//  - activity folder
//      act2.html
//      script2.js


// Create a JavaScript program that prints all the numbers between a given range. Prompt the user to enter the starting and ending numbers for the range. Use a loop to iterate through the numbers in the range. Print each number in the console.

let starting = parseInt(prompt("Enter Starting Number:"))
let ending = parseInt(prompt("Enter Ending Number:"))

const numbers = document.getElementById('numbers')

if(starting > ending) {
    console.log('Error: ending number must be bigger than starting number')
    numbers.innerText = 'Error: ending number must be bigger than starting number'
}
for (let i = starting; i <= ending; i++) {
    console.log(`Number: ${i}`)
    numbers.insertAdjacentHTML('beforeend', `Number: ${i}<br />`)
}