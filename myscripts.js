//have a function that selects a random choice from a set list

function getComputerChoice() {
    var choice = ['Rock','Paper','Scissors'];
    var randChoice = Math.floor(Math.random() * choice.length) + 1;
    if (randChoice === 1) {
        return "Rock"; 
    } if (randChoice === 2) {
        return "Paper";
    } if (randChoice === 3) {
        return "Scissors";
    }
}
//all the possible win and tie variations
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "Congrats! You Win!";
    }
    if (playerSelection === "rock" && computerSelection === "Rock") {
        return "Tie Game!";
    }
    if (playerSelection === "paper" && computerSelection === "Rock") {
        return "Congrats! You Win!"
    }
    if (playerSelection === "paper" && computerSelection === "Paper") {
        return "Tie Game!"
    }
    if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "Congrats! You Win!"
    }
    if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "Tie Game!"
    }
    else return "You Lose!"
}
//make another var to store the player selection, then convert that selection to lowercase and store it in the player selection var
const playerChoice = prompt("Choose Rock, Paper, or Scissors");
const playerSelection = playerChoice.toLowerCase();
let computerSelection = getComputerChoice();




    
    
    
