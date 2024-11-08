// Activity 3: Guess the Secret Number
// Open your JavaScript development environment or console.
// Declare a variable named secretNumber and assign it a random integer between 1 and 10 
// Declare a variable named attempts and set it to 0. This variable will keep track of the number of attempts made by the player.
// Declare a variable named guessedNumber to store the player's guesses.
// Display a welcome message to the player using console.log().
// Start a do-while loop to repeatedly ask the player for their guess until they guess the correct number.
// Inside the loop, prompt the player to enter their guess using prompt() function and store it in the guessedNumber variable.
// Use an if statement to check if the guessedNumber is lower than the secretNumber.
// If it is lower, display the message "Too low! Try again." using console.log().
// Use an else if statement to check if the guessedNumber is higher than the secretNumber.
// If it is higher, display the message "Too high! Try again." using console.log().
// Use an else statement to handle the case when the guessedNumber matches the secretNumber.
// Display the message "Congratulations! You guessed the correct number: [secretNumber]" using console.log().
// Display the message "It took you [attempts] attempts." to let the player know how many attempts they took.
// Increment the attempts variable by 1.
// Repeat steps 7-11 until the guessedNumber matches the secretNumber.
// End the game.
const secretNumber = Math.floor((Math.random() * 10) + 1);
let attempts = 0;
let guessedNumber;
do {
    guessedNumber = parseInt(prompt("Guess the secret number"));
    attempts++;
    if(guessedNumber < secretNumber) {
        alert('Too Low! Try Again');
    } else if(guessedNumber > secretNumber) {
        alert('Too High! Try Again.');
    } else {
        alert(`Congratulations! You guessed the correct number: ${secretNumber}\nIt took you ${attempts} attempts.`);
        console.log(`Congratulations! You guessed the correct number: ${secretNumber}\nIt took you ${attempts} attempts.`);
    }
} while (guessedNumber !== secretNumber);