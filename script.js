'use strict';

// // console.log(document.querySelector('.message').textContent)
// // document.querySelector('.message').textContent = 'Correct Number!🎉'
// document.querySelector('.number').textContent = (
//     Math.random() * 20 +
//     1
// ).toFixed(0)
// // document.querySelector('.score').textContent = (Math.random() * 20 + 1).toFixed(
// //     0
// // )
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔No Number!';

        //when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '35rem';
        //when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈Too High!';
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '🎇You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
        //when guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉Too Low! ';
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '🎇You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent =
        'Start guessing a number...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
});
