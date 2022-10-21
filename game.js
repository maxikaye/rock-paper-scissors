// Rock Paper Scissors
// Implementation by Maxi Kaye
// github.com/maxikaye

let playerScore = 0;
let computerScore = 0;
let roundResult = null;
let gameOver = false;

const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');

const results = document.querySelector('.results');
const resultsText = document.createElement('p');
results.appendChild(resultsText);

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');


function getComputerChoice() {
    const weapons = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return weapons[choice];
}

function showResults() {
    resultsText.textContent = roundResult;
}

function updateScore() {
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
}

function endGame () {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    setTimeout(resultsText.textContent += "  Want to play again? - Click here", 5000);
    results.addEventListener('click', e => reset());
}

function checkForWin() {
    if (playerScore >= 5) {
        roundResult = "GAME OVER - YOU WIN!";
        gameOver = true;
        setTimeout(showResults(), 1000);
    } else if (computerScore >= 5) {
        roundResult = "GAME OVER - YOU LOSE!";
        gameOver = true;
        setTimeout(showResults(), 1000);
    }

    if (gameOver) endGame();
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            roundResult = "Tie! Rock bounces off of Rock";
        } else if (computerSelection === "paper") {
            roundResult = "You lose! Paper covers Rock"
            computerScore += 1;
        } else if (computerSelection === "scissors") {
            roundResult = "You win! Rock smashes scissors";
            playerScore += 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundResult = "You win! Paper covers Rock";
            playerScore += 1;
        } else if (computerSelection === "paper") {
            roundResult = "Tie! Paper bounces off Paper"
        } else if (computerSelection === "scissors") {
            roundResult = "You lose! Scissors cuts Paper";
            computerScore += 1;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundResult = "You lose! Rock smashes scissors";
            computerScore += 1;
        } else if (computerSelection === "paper") {
            roundResult = "You win! Scissors cuts Paper"
            playerScore += 1;
        } else if (computerSelection === "scissors") {
            roundResult = "Tie! Scissors bounces off of Scissors";
        }
    } else {
        roundResult = `${playerSelection} is not a valid weapon.`
    }

    showResults();
    updateScore();
    checkForWin();
}

function reset() {
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    updateScore();
    resultsText.textContent = "Let's play Rock, Paper, Scissors! First to 5 points wins.";
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

reset();

rock.addEventListener('click', e => playRound(e.target.name, getComputerChoice()));
paper.addEventListener('click', e => playRound(e.target.name, getComputerChoice()));
scissors.addEventListener('click', e => playRound(e.target.name, getComputerChoice()));
