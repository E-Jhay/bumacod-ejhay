//Defining a function
function greet() {
    console.log('Hello Function')
};

//calling the function 
greet();

//Function Declaration vs. Function Expression 
function squareDeclaration(num){
    return num * num
}

const squareExpression = function(num) {
    return num * num
}
console.log (squareDeclaration(8));
console.log (squareExpression(5));

