function getComputerChoice() {
	//random output of rock, paper, or scissors
	// return this output
	const choice = ['Rock', 'Paper', 'Scissors']; // Variable array to contain computer choices
    const randomChoice = Math.floor(Math.random() * choice.length); // Randomly choose an array item from choice variable
    const randomChoiceFinal = (randomChoice, choice[randomChoice]); // Picks a random choice
    return randomChoiceFinal;
}
 
// playerInput = prompt("Enter Rock, Paper, Or Scissors!"); // Variable to get rock
// playerChoice = playerInput[0].toUpperCase() + playerInput.substring(1);

//console.log("Computer: " + getComputerChoice());

let lossCounter = 0; // Loss counter for player
let winCounter = 0; // Win counter for player
function round(playerSelection, computerSelection) {
    playerInput = prompt("Enter Rock, Paper, Or Scissors!"); // Variable to get rock
    playerToLower = playerInput.toLowerCase(); // Converts players input to all lowercase
    playerSelection = playerToLower[0].toUpperCase() + playerToLower.substring(1); // Uppercases the first letter, then concats it with the rest of the string
    console.log("Computer: " + getComputerChoice());
    if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') {
        console.log(playerSelection);
        // Loss conditions
            if (playerSelection === 'Rock' && getComputerChoice() === 'Paper') { // Checks if player lost rock outcome
                console.log("You lose! Paper beats Rock.");
                lossCounter++;
                console.log(`You lost ${lossCounter} amount of times.`);
            }
            else if (playerSelection === 'Paper' && getComputerChoice() === 'Scissors') { // Checks if player lost paper outcome
                console.log("You lose! Scissors beats Paper.");
                lossCounter++;
                console.log(`You lost ${lossCounter} amount of times.`);
            }
            else if (playerSelection === 'Scissors' && getComputerChoice() === 'Rock') {
                console.log("You lose! Rock beats Scissors.");
                lossCounter++;
                console.log(`You lost ${lossCounter} amount of times.`);
            }
            // console.log(`You lost ${lossCounter} amount of times.`);
            // Win conditions
            else if (playerSelection === 'Rock' && getComputerChoice() === 'Scissors') {
                console.log("You win! Rock beats Scissors.");
                winCounter++;
                console.log(`You won ${winCounter} amount of times.`);
            }
            else if (playerSelection === 'Paper' && getComputerChoice() === 'Rock') {
                console.log("You win! Paper beats Rock.");
                winCounter++;
                console.log(`You won ${winCounter} amount of times.`);
            }
            else if (playerSelection === 'Scissors' && getComputerChoice() === 'Paper') {
                console.log("You win! Scissors beats Paper.");
                winCounter++;
                console.log(`You won ${winCounter} amount of times.`);
            }
            else {
                console.log("Tie!");
            }


    } 
    else { // Restarts function if player enters anything but rock,paper,scissors
        round();
    }
}

round();











//Psuedo for battle
/* 
Computer Vs Player input
if playerChoice === Rock && getComputerChoice() === 'Paper

*/














/// Junk code section: 
// function getPlayerChoice() {             //Function to get input from player
    // input = players choice
    // playerInput = prompt("Enter Rock, Paper, Or Scissors!"); // Variable to get rock 
    // playerChoiceunused = playerInput.toUpperCase(); // Variable to convert players choice to case insensitive.
    // playerChoice = playerInput[0].toUpperCase() + playerInput.substring(1); // Variable to convert players choice to case insensitive, and capitalized the first letter.
    // for ((playerChoice != 'Rock') || (playerChoice != 'Paper') || (playerChoice != 'Scissors'))
    // {
    //     alert("Enter Rock, Paper, or Scissors!");
    //     getPlayerChoice();
    // }
    // if (playerChoice != 'Rock' || playerChoice != 'Paper' || playerChoice != 'Scissors') {
    //     console.log("You must enter either 'Rock', 'Paper', or 'Scissors'.");

    // if (playerChoice != 'Rock' || playerChoice != 'Paper' || playerChoice != 'Scissors') {
    //     console.log("You must enter either 'Rock', 'Paper', or 'Scissors'.");
    //     playerInput = prompt("Enter Rock, Paper, Or Scissors!");
    // }
//     return playerChoice;
// }