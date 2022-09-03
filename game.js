// Rock, paper, scissors game

const options = ["rock", "paper", "scissors"]

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 )
    return options[randomNumber]
};

const getPlayerChoice = () => {
    let playerSelection = prompt("Choose Rock Paper or Scissors").toLowerCase();
    if(options.includes(playerSelection)) return playerSelection;
    else alert("Introduce a correct choose");
};

const game = (choiseUser, choisePC) => {
    if(choiseUser === choisePC) return;
    
    else if (choiseUser === "rock" && choisePC === "scissors" ||
        choiseUser === "paper" && choisePC === "rock" ||
        choiseUser === "scissors" && choisePC === "paper"){
            return "playerWin";
    }

    else{
        return "playerLoose";
    }
};

let playerSelection;
let computerChoise;
let result;
let playerPoints = 0;
let computerPoints = 0;

while (playerPoints < 3 && computerPoints < 3) {
    playerSelection = getPlayerChoice ()
    computerChoise = getComputerChoice ()
    result = game (playerSelection , computerChoise)
        if (result === "playerWin"){
            playerPoints++
            alert(`You choise ${playerSelection.toUpperCase()} and PC choise ${computerChoise.toUpperCase()} - You win this round -> You: ${playerPoints} - PC: ${computerPoints}`)
        }
        else if (result === "playerLoose"){
            computerPoints++
            alert(`You choise ${playerSelection.toUpperCase()} and PC choise ${computerChoise.toUpperCase()} - You loose this round -> You: ${playerPoints} - PC: ${computerPoints}`)
        }
        else{
            alert(`You choise ${playerSelection.toUpperCase()} and Pc choise ${computerChoise.toUpperCase()} - Tie -> You: ${playerPoints} - PC: ${computerPoints}`)
        }
}

if (playerPoints>computerPoints){
    alert ("You win....!!!! 😁😁🥳🥳")
}
else{
    alert ("You loose")
}