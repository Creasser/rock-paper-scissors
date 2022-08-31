let playerScore = 0
let computerScore = 0


//have a function that selects a random choice from a set list


//GET COMPUTER INPUT
function getComputerChoice() {
    const choice = ['Rock','Paper','Scissors'];
    let randChoice = Math.floor(Math.random() * choice.length) + 1;
    if (randChoice === 1) {
        console.log("Computer chose rock")
        return "Rock";
   } if (randChoice === 2) {
        console.log("Computer chose paper")
        return "Paper";
    } if (randChoice === 3) {
        console.log("Computer chose scissors")
        return "Scissors";
    }
}



//GET USER INPUT
function getPlayerChoice() {
    const playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase()
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    console.log("You chose" + " " + playerChoice)
    return playerChoice
    } else {
    console.log("Error! Try again!")
    getPlayerChoice();


}
}

//let userChoice = getPlayerChoice()
//const computerChoice = getComputerChoice()
//const winner = playRound(userChoice, computerChoice)        

function playRound(userChoice, computerChoice) {

    //ROCK
    if (userChoice === "rock" && computerChoice === "Paper"){ 
        console.log("You Lose! Paper beats Rock!")
        computerScore++ ;
    }
     if (userChoice === "rock" && computerChoice === "Scissors"){
        console.log("You Win! Rock beats Scissors!")
        playerScore++ ;
     }
     if (userChoice === "rock" && computerChoice === "Rock"){
        console.log("Tie Game!");
     }
    //PAPER    
     if (userChoice === "paper" && computerChoice === "Rock"){   
        console.log("You Win! Paper beats Rock!")
        playerScore++ ;
     }
     if (userChoice === "paper" && computerChoice === "Scissors"){
        console.log("You Lose! Scissors beats Paper!")
        computerScore++ ;
     }
     if (userChoice === "paper" && computerChoice === "Paper"){
        console.log("Tie Game!");
     }
    //SCISSORS
     if (userChoice === "scissors" && computerChoice === "Rock"){
        console.log("You Lose! Rock beats Scissors!")
        computerScore++ ; 
     }
     if (userChoice === "scissors" && computerChoice === "Paper"){
        console.log("You Win! Scissors beats Paper!")
        playerScore++ ;
     }
     if (userChoice === "scissors" && computerChoice === "Scissors"){
        console.log("Tie Game!") 
     }   
    


}    


//call the playRound function inside of a loop, asking for a different player selection each time, and getting a new computer selection each time.
//report a winner of a game of 5
    

//function game() {
    //for (let i = 0; i < 5; i++) {
       // let userChoice = getPlayerChoice()
        //let computerChoice = getComputerChoice()
        //playRound(userChoice, computerChoice)
        //console.log("Your score is" + " " + playerScore)
        //console.log("Opponent score is" + " " + computerScore)
    //}

    //function winner(playerScore, computerScore) {
       // if (playerScore > computerScore) {
            //console.log("You won the game! Congrats!")
       // }
       // if (playerScore < computerScore) {
            //console.log("You lost the game! You suck!")
      //  }
       // if (playerScore === computerScore) {
           // console.log("This game was a tie! Play again!");
            
            
      //  }
  //  }
    //winner(playerScore, computerScore)
//}


//let playerChoice = getPlayerChoice();

 const rock = document.querySelector('#rock')
    rock.addEventListener("click", function() {
        let computerChoice = getComputerChoice()
        playRound('rock', computerChoice)
        
    })

const paper = document.querySelector('#paper')
    paper.addEventListener('click', function(){
        let computerChoice = getComputerChoice()
        playRound('paper', computerChoice)
        
    })

const scissors = document.querySelector('#scissors')
    scissors.addEventListener('click', function(){
        let computerChoice = getComputerChoice()
        playRound('scissors', computerChoice)
    })







