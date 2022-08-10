// Rock = 1, Paper = 2 and Scissors = 3

function getComputerChoice () {
    let randomNumber = Math.ceil(Math.random() * 3 )
    return randomNumber
}

function playerChoice (){
    
        let playerSelection = prompt("Choose Rock Paper or Scissors").toLowerCase()
        
        if (playerSelection == "rock"){
            playerSelection = 1
            return playerSelection
        }
        else if (playerSelection == "paper"){
            playerSelection = 2
            return playerSelection
        }
        else if (playerSelection == "scissors"){
            playerSelection = 3
            return playerSelection
        }
        else {
            alert("Introduce a correct choose");
        }
    
}
function game (num1, num2){
    if (num1 === num2){
        return alert("Empate");
    }
    else if (num1 === 1 && num2 === 3 || num1 === 2 && num2 === 1 || num1 === 3 && num2 === 2){
        return alert("You win")
    }
    else{
        return alert("You Loose")
    }
}

let playerFinalSelection = playerChoice ()
console.log(playerFinalSelection)
let computerChoise = getComputerChoice ()
console.log(computerChoise)
game (playerFinalSelection , computerChoise)
