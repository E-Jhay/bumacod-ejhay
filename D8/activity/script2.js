const squareRoot = (number) => Math.sqrt(number)
console.log(squareRoot(8))

const greet = (person) => `Welcome ${person.name}, your age is ${person.age}`
console.log(greet({name: 'E-Jhay', age: 24}))

const getName = (person) => {
    const {first_name, last_name, ...rest} = person
    return {first_name, last_name}
}
console.log(getName({first_name: 'E-Jhay', last_name: 'Bumacod', age: 24}))

const mergeArray = (arr1, arr2) => [...arr1, ...arr2]
console.log(mergeArray([1,2,3], ['a','b','c']))

const areaOfRactangle = (length = 1, width = 1) => length * width
console.log(areaOfRactangle())
console.log(areaOfRactangle(5, 5))

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("John", 30);
person1.introduce();