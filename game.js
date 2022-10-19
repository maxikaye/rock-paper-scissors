// Rock Paper Scissors
// Implementation by Maxi Kaye
// github.com/maxikaye

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const weapons = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return weapons[choice];
}

function getPlayerChoice() {
   let playerChoice = prompt("Please enter your weapon choice (rock, paper, scissors): ")
   return playerChoice.toLowerCase(); 
}

function playRound(playerSelection, computerSelection) {
    let result = null;
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result = "Tie! Rock bounces off of Rock";
        } else if (computerSelection === "paper") {
            result = "You lose! Paper covers Rock"
            computerScore += 1;
        } else if (computerSelection === "scissors") {
            result = "You win! Rock smashes scissors";
            playerScore += 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You win! Paper covers Rock";
            playerScore += 1;
        } else if (computerSelection === "paper") {
            result = "Tie! Paper bounces off Paper"
        } else if (computerSelection === "scissors") {
            result = "You lose! Scissors cuts Paper";
            computerScore += 1;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You lose! Rock smashes scissors";
            computerScore += 1;
        } else if (computerSelection === "paper") {
            result = "You win! Scissors cuts Paper"
            playerScore += 1;
        } else if (computerSelection === "scissors") {
            result = "Tie! Scissors bounces off of Scissors";
        }
    } else {
        result = `${playerSelection} is not a valid weapon.`
    }
    console.log(result);
}

/* function game() {
    const rounds = 5;
    for (let i = 0; i < rounds; i++) {
        let roundResult = playRound(getPlayerChoice(), getComputerChoice());
        console.log(`${roundResult} | Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log(`You Win! Final Score: ${playerScore} | ${computerScore}`);
    } else if (playerScore === computerScore) {
        console.log(`Tie! Final Score: ${playerScore} | ${computerScore}`);
    } else {
        console.log(`You Lose!  Final Score: ${playerScore} | ${computerScore}`);
    }
    reset();
}
*/

function reset() {
    playerScore = 0;
    computerScore = 0;
}

reset();

const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');

rock.addEventListener('click', e => playRound(e.target.name, getComputerChoice()));
paper.addEventListener('click', e => playRound(e.target.name, getComputerChoice()));
scissors.addEventListener('click', e => playRound(e.target.name, getComputerChoice()));
