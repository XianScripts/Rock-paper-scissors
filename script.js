function getComputerChoice() {
	//random output of rock, paper, or scissors
	// return this output
	const choice = ['Rock', 'Paper', 'Scissors']; // Variable array to contain computer choices
    const randomChoice = Math.floor(Math.random() * choice.length); // Randomly choose an array item from choice variable
    const randomChoiceFinal = (randomChoice, choice[randomChoice]); // Picks a rand
    console.log(randomChoiceFinal);
}
// 

function getPlayerChoice() {             //Function to get input from player
    // input = players choice
    playerInput = prompt("Enter Rock, Paper, Or Scissors!"); // Variable to get rock 
    // playerChoiceunused = playerInput.toUpperCase(); // Variable to convert players choice to case insensitive.
    playerChoice = playerInput[0].toUpperCase() + playerInput.substring(1); // Variable to convert players choice to case insensitive, and capitalized the first letter.
    // for ((playerChoice != 'Rock') || (playerChoice != 'Paper') || (playerChoice != 'Scissors'))
    // {
    //     alert("Enter Rock, Paper, or Scissors!");
    //     getPlayerChoice();
    // }
}
getPlayerChoice();
console.log(playerChoice);
getComputerChoice();