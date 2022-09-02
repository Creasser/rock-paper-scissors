let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const choice = ['Rock','Paper','Scissors'];
    let randChoice = Math.floor(Math.random() * choice.length) + 1;
    if (randChoice === 1) {
        //console.log("Computer chose rock")
        return "Rock";
   } if (randChoice === 2) {
        //console.log("Computer chose paper")
        return "Paper";
    } if (randChoice === 3) {
       // console.log("Computer chose scissors")
        return "Scissors";
    }
}

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
        cs.textContent = computerScore;
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
     }
    //PAPER    
     if (userChoice === "paper" && computerChoice === "Rock"){ 
        content.textContent = "Computer Chose Rock. \r\n"
        content.textContent += 'You Win! Paper beats Rock!'
        results.appendChild(content);  
        playerScore++ ;
        ps.textContent = playerScore
     }
     if (userChoice === "paper" && computerChoice === "Scissors"){
        content.textContent = "Computer Chose Scissors. \r\n"
        content.textContent += 'You Lose! Scissors beats Paper!'
        results.appendChild(content);
        computerScore++ ;
        cs.textContent = computerScore
     }
     if (userChoice === "paper" && computerChoice === "Paper"){
        content.textContent = "Computer Chose Paper. \r\n"
        content.textContent += 'Tie Game! Play Again!'
        results.appendChild(content);
     }
    //SCISSORS
     if (userChoice === "scissors" && computerChoice === "Rock"){
        content.textContent = "Computer Chose Rock. \r\n"
        content.textContent += 'You Lose! Rock beats Scissors!'
        results.appendChild(content);
        computerScore++ ; 
        cs.textContent = computerScore;
     }
     if (userChoice === "scissors" && computerChoice === "Paper"){
        content.textContent = "Computer Chose Paper. \r\n"
        content.textContent += 'You Win! Scissors beats Paper!'
        results.appendChild(content);
        playerScore++ ;
        ps.textContent = playerScore
     }
     if (userChoice === "scissors" && computerChoice === "Scissors"){
        content.textContent = "Computer Chose Scissors. \r\n"
        content.textContent += 'Tie Game! Play Again!'
        results.appendChild(content);
     }   
     winner()
        function winner(){
            if (playerScore === 5){
                content.textContent = 'Congrats! You Won the Game!';
                function disable(){
                    window.playRound = function(){};
                }
                disable()
            }
            if (computerScore === 5){
                content.textContent = 'You Suck! The Computer Won!';
                function disable(){
                    window.playRound = function(){};
                }
                disable()
            }
            else{
                return
            }
        }   
}    
const ps = document.querySelector('.ps')
const cs = document.querySelector('.cs')
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