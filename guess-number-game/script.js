'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // Number(document.querySelector('.score').textContent);
let highscore = 0;

//refactoring for cleaner code?
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
const displayScores = function (message) {
    document.querySelector('.score').textContent = message;
};
const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
    if (!guess) {
        displayMessage('⛔No Number!');

        //when player wins
    } else if (guess === secretNumber) {
        displayNumber(secretNumber);
        displayMessage('🎉Correct Number!');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '35rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is too high
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? '📈Too High!' : '📉Too Low! '
            );
            score -= 1;
            displayScores(score);
        } else {
            displayMessage('🎇You lost the game!');
            displayScores(0);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20; //reset score in js
    displayScores(20); //reset score in html text
    displayNumber('?');
    displayMessage('Start guessing a number...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
});
