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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "Congrats! You Win!";
    }
    if (playerSelection === "rock" && computerSelection === "Rock") {
        return "Tie Game!";
    }
    else return "You Lose!"
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

