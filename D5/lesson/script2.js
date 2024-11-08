let age = 18;

if(age >= 18) {
    console.log('You are eligible to vote');
} else {
    console.log('You are not eligible to vote');
}

let count = 1;
while (count <= 5) {
    console.log('While Count: ', count);
    count++;
}

let i = 1;
do {
    console.log('Do While Count: ', i);
    i++;
} while (i <= 5);

for (let i = 1; i <= 5; i++) {
    console.log('For Count: ', i);    
}

// let name = prompt("Enter Name:");
// alert(`Hello ${name}`)