// Rock, paper, scissors game

const options = ["rock", "paper", "scissors"]
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const reset = document.querySelector('.reset')
const userPointsDOM = document.querySelector('.userPoints')
const pcPointsDOM = document.querySelector('.pcPoints')
const statusGame = document.querySelector('.status')

console.log(userPointsDOM)
console.log(pcPointsDOM)

rock.addEventListener('click',() => {game("rock")})
paper.addEventListener('click',() => {game("paper")})
scissors.addEventListener('click',() => {game("scissors")})
reset.addEventListener('click',() => {resetGame()})

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 )
    return options[randomNumber]
};

let playerPoints = 0;
let computerPoints = 0;

const game = (choiseUser) => {
    let choisePC = getComputerChoice()
    if(playerPoints === 5 || computerPoints === 5) return;
    if(choiseUser === choisePC) {
        statusGame.innerText = "Tie"
        return    
    };
    
    if(choiseUser === "rock" && choisePC === "scissors" ||
    choiseUser === "paper" && choisePC === "rock" ||
    choiseUser === "scissors" && choisePC === "paper"){
        playerPoints++;
        if(playerPoints === 5){
            userPointsDOM.innerText = playerPoints
            statusGame.innerText = "YOU WIN"
        }
        else{
            statusGame.innerText = "You win this round"
            userPointsDOM.innerText = playerPoints
        }
    }
   
    else {
        computerPoints++;
        if(computerPoints === 5){
            pcPointsDOM.innerText = computerPoints;
            statusGame.innerText = "YOU LOOSE"
        }
        else{
            statusGame.innerText = "You loose this round"
            pcPointsDOM.innerText = computerPoints;
        }
    }
}

const resetGame = () => {
    playerPoints = 0;
    computerPoints = 0;
    userPointsDOM.innerText = playerPoints;
    pcPointsDOM.innerText = computerPoints;
    statusGame.innerText = "Lets Play"
}