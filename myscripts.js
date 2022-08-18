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