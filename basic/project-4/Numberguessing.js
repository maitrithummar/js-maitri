let randomNumber = Math.floor(Math.random() * 100) + 1;

const form = document.querySelector('.form');
const guessField = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const guess = parseInt(guessField.value);

        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
    } else {
        prevGuess.push(guess);

        if (numGuess === 10) {
            displayGuess(guess);
            endGame(`Game Over! The number was ${randomNumber}`);
            return;
        }

        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        endGame(`You guessed it right!`);
    } else if (guess < randomNumber) {
        lowOrHi.innerHTML = 'Too low!';
    } else {
        lowOrHi.innerHTML = 'Too high!';
    }
}

function displayGuess(guess) {
    guessField.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = 10 - numGuess + 1;
}

function endGame(message) {
    guessField.disabled = true;
    guessField.value = '';
    lowOrHi.innerHTML = message;
    playGame = false;
} 


function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 1;
    playGame = true;

    guessField.disabled = false;
    guessField.value = '';
    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    lowOrHi.innerHTML = '';
}