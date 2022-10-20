// Rock Paper Scissors
// Implementation by Maxi Kaye
// github.com/maxikaye

let playerScore = 0;
let computerScore = 0;
let roundResult = null;

const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');

const results = document.querySelector('.results');
const resultsText = document.createElement('p');
resultsText.textContent = "Let's play!";
results.appendChild(resultsText);

function getComputerChoice() {
    const weapons = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return weapons[choice];
}

function showResults() {
    resultsText.textContent = roundResult;
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
}

function reset() {
    playerScore = 0;
    computerScore = 0;
}

reset();

rock.addEventListener('click', e => playRound(e.target.name, getComputerChoice()));
paper.addEventListener('click', e => playRound(e.target.name, getComputerChoice()));
scissors.addEventListener('click', e => playRound(e.target.name, getComputerChoice()));
