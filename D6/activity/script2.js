const greet = () => {
    console.log('Good day!')
}
greet()

const add = (a, b) => {
    return a + b
}

const multiply = (a, b) => {
    return a * b
}

const isEven = (a) => {
    return a % 2 === 0
}

const square = (a) => {
    return a * a
}

const fullName = (first_name, last_name) => {
    return `${first_name} ${last_name}`
}

const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const sum = add(5, 3)
console.log(sum)
const product = multiply(4, 2)
console.log(product)
const even = isEven(6)
console.log(even)
const sqaredValue = square(3)
console.log(sqaredValue)
const name = fullName('John', 'Doe')
console.log(name)
const capitalizedString = capitalize('javascript')
console.log(capitalizedString)