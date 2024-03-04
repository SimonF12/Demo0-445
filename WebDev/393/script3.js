function playGuessingGame(numToGuess, totalGuesses = 10) {
    let numGuesses = 0;

    while (numGuesses < totalGuesses) {
        let guess = prompt(`Guess the number (You have ${totalGuesses - numGuesses} guesses left):`);

        if (guess === null) {
            // User clicked Cancel
            return 0;
        }

        guess = parseInt(guess);

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            continue;
        }

        numGuesses++;

        if (guess === numToGuess) {
            return numGuesses;
        } else {
            console.log(`Incorrect guess. Try again!`);
        }
    }

    return 0; // User used all guesses without guessing correctly
}

// Example usage:
let numToGuess = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
let totalGuesses = 10;
let guessesTaken = playGuessingGame(numToGuess, totalGuesses);

if (guessesTaken > 0) {
    alert(`Congratulations! You guessed the number ${numToGuess} correctly in ${guessesTaken} guesses.`);
} else {
    alert(`Sorry, you couldn't guess the number ${numToGuess} within ${totalGuesses} guesses.`);
}
