'use strict';

// console.log(document.querySelector(.message).textContent);

// document.querySelector('.message').textContent = 'Correct Number🎉';

// document.querySelector('.number').textContent = 12;

// document.querySelector('.score').textContent = 9;

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number⭕';
    displayMessage('No Number⭕');
    document.querySelector('body').style.backgroundColor = 'black';

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number🎉';
    displayMessage('Correct Number🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; 

    if(score>highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }

} 

//When the guess is lower than the secret Number
/*
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game😒';
      document.querySelector('.score').textContent = 0;
    }    
}
*/

//When the guess is higher than the secret Number
/*
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game😒';
      document.querySelector('.score').textContent = 0;
    }
  }
*/

//When guess is wrong
  else if(guess !== secretNumber){
    if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High📉' : 'Too Low📈';

        displayMessage(guess > secretNumber ? 'Too High📉' : 'Too Low📈');
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = 'purple';
      } else {
        // document.querySelector('.message').textContent = 'You lost the game😒';

        displayMessage('You lost the game😒');
        document.querySelector('.score').textContent = 0; 
      }
  }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start Guessing...';

    displayMessage('Start Guessing...');
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = 'gray';
    document.querySelector('.number').style.width = '15rem'; 


})
