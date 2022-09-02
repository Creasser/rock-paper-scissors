let playerScore = 0
let computerScore = 0

//const results = document.querySelector('#results')
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

    const results = document.querySelector('.results')
    const content = document.createElement('div');
    content.setAttribute('style', 'white-space: pre');
    content.classList.add('content');

    //ROCK
    if (userChoice === "rock" && computerChoice === "Paper"){ 

        content.textContent = "Computer Chose Paper. \r\n"
        content.textContent += 'You Lose! Paper beats Rock!'
        results.appendChild(content);
        computerScore++ ;

    }
     if (userChoice === "rock" && computerChoice === "Scissors"){
        content.textContent = "Computer Chose Scissors. \r\n"
        content.textContent += 'You Win! Rock beats Scissors!'
        results.appendChild(content);
        playerScore++ ;
        ps.textContent = playerScore
     }
     if (userChoice === "rock" && computerChoice === "Rock"){
        content.textContent = "Computer Chose Rock. \r\n"
        content.textContent += 'Tie Game! Play again!'
        results.appendChild(content);
        //console.log("Tie Game!");
     }
    //PAPER    
     if (userChoice === "paper" && computerChoice === "Rock"){ 
        content.textContent = "Computer Chose Rock. \r\n"
        content.textContent += 'You Win! Paper beats Rock!'
        results.appendChild(content);  
        //console.log("You Win! Paper beats Rock!")
        playerScore++ ;
     }
     if (userChoice === "paper" && computerChoice === "Scissors"){
        content.textContent = "Computer Chose Scissors. \r\n"
        content.textContent += 'You Lose! Scissors beats Paper!'
        results.appendChild(content);
        //console.log("You Lose! Scissors beats Paper!")
        computerScore++ ;
     }
     if (userChoice === "paper" && computerChoice === "Paper"){
        content.textContent = "Computer Chose Paper. \r\n"
        content.textContent += 'Tie Game! Play Again!'
        results.appendChild(content);
        //console.log("Tie Game!");
     }
    //SCISSORS
     if (userChoice === "scissors" && computerChoice === "Rock"){
        content.textContent = "Computer Chose Rock. \r\n"
        content.textContent += 'You Lose! Rock beats Scissors!'
        results.appendChild(content);
        //console.log("You Lose! Rock beats Scissors!")
        computerScore++ ; 
     }
     if (userChoice === "scissors" && computerChoice === "Paper"){
        content.textContent = "Computer Chose Paper. \r\n"
        content.textContent += 'You Win! Scissors beats Paper!'
        results.appendChild(content);
        //console.log("You Win! Scissors beats Paper!")
        playerScore++ ;
     }
     if (userChoice === "scissors" && computerChoice === "Scissors"){
        content.textContent = "Computer Chose Scissors. \r\n"
        content.textContent += 'Tie Game! Play Again!'
        results.appendChild(content);
        //console.log("Tie Game!") 
     }   
    
            


}    

const ps = document.querySelector('.ps')
const cs = document.querySelector('.cs')
//let playerChoice = getPlayerChoice();

 const rock = document.querySelector('#rock')
    rock.addEventListener("click", function() {
        let computerChoice = getComputerChoice()
        playRound('rock', computerChoice)
        //can possibly call on a function that will report the results and append the div in the center with the text
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

//make a const for the div container, put the container.documenttextContent inside of the win conditions.






