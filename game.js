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
        } else if (computerSelection === "scissors") {
            result = "You win! Rock smashes scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You win! Paper covers Rock";
        } else if (computerSelection === "paper") {
            result = "Tie! Paper bounces off Paper"
        } else if (computerSelection === "scissors") {
            result = "You lose! Scissors cuts Paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You lose! Rock smashes scissors";
        } else if (computerSelection === "paper") {
            result = "You win! Scissors cuts Paper"
        } else if (computerSelection === "scissors") {
            result = "Tie! Scissors bounces off of Scissors";
        }
    } else {
        result = `${playerSelection} is not a valid weapon.`
    }
    return result;
}

function game() {
    const rounds = 5;
    for (let i = 0; i < rounds; i++) {
        let roundResult = playRound(getPlayerChoice(), getComputerChoice());
        console.log(roundResult);
    }
    //return playerScore > computerScore ? "You Win!" : "You Lose"
}