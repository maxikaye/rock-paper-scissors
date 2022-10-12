// Rock Paper Scissors
// Implementation by Maxi Kaye
// github.com/maxikaye

function getComputerChoice() {
    const weapons = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return weapons[choice];
}

function getPlayerChoice() {
   let playerChoice = prompt("Please enter your weapon choice (rock, paper, scissors): ")
   return playerChoice.toLowerCase(); 
}

function play(playerSelection, computerSelection) {
    
}