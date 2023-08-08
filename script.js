compString = "Computer: "; // String to let user know who chose what
playString = "Player: "; // Same thing as compSring ^

let winCounter = 0; // Declaring counter for user's number of wins/losses
let lossCounter = 0;
let winner; // Declaring winner/loser console.log variables
let loser;
let tie;
let tieCounter = 0;
let playCount = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
rock.addEventListener('click', () => {
    playerChoice = 'Rock';
    console.log(playerChoice);
});
paper.addEventListener('click', () => {
    playerChoice = 'Paper';
    console.log(playerChoice);
});
scissors.addEventListener('click', () => {
    playerChoice = 'Scissors';
    console.log(playerChoice);
});
function round(computer, playerChoice) { // Function to determine winner of a round between user and computer
    if (playerChoice === 'Rock' && computer === 'Paper') { // Checks if player lost rock outcome
        console.log(compString + 'Paper');
        console.log(playString + 'Rock');
        loser = console.log("You lose! Paper beats Rock.");
        lossCounter++;
        return loser;
    }
    else if (playerChoice === 'Rock' && computer === 'Scissors') { // Checks if player won rock outcome
        console.log(compString + 'Scissors');
        console.log(playString + 'Rock');
        winner = console.log("You win! Rock beats Scissors.");
        winCounter++;
        return winner;
    }
    else if (playerChoice === 'Rock' && computer === 'Rock') { // Checks for tie
        console.log(compString + 'Rock');
        console.log(playString + 'Rock');
        tie = console.log("Tie!");
        tieCounter++;
        return tie;
    }
    else if (playerChoice === 'Paper' && computer === 'Scissors') { // Checks if player lost paper outcome
        console.log(compString + 'Scissors');
        console.log(playString + 'Paper');
        loser = console.log("You lose! Scissors beats Paper.");
        lossCounter++;
        return loser;
    }
    else if (playerChoice === 'Paper' && computer === 'Rock') { // Checks if player won paper outcome
        console.log(compString + 'Rock');
        console.log(playString + 'Paper');
        winner = console.log("You win! Paper beats Rock.");
        winCounter++;
        return winner;
    }
    else if (playerChoice === 'Paper' && computer === 'Paper') { // Checks for tie
        console.log(compString + 'Paper');
        console.log(playString + 'Paper');
        tie = console.log("Tie!");
        tieCounter++;
        return tie;
    }
    else if (playerChoice === 'Scissors' && computer === 'Rock') { // Checks if player lost scissors outcome
        console.log(compString + 'Rock');
        console.log(playString + 'Scissors');
        loser = console.log("You lose! Rock beats Scissors");
        lossCounter++;
        return loser;
    }
    else if (playerChoice === 'Scissors' && computer === 'Paper') { // Checks if player won scissors outcome
        console.log(compString + 'Paper');
        console.log(playString + 'Scissors');
        winner = console.log("You win! Scissors beats Paper.");
        winCounter++;
        return winner;
    }
    else if (playerChoice === 'Scissors' && computer === 'Scissors') { // Checks for tie
        console.log(compString + 'Scissors');
        console.log(playString + 'Scissors');
        tie = console.log("Tie!");
        tieCounter++;
        return tie;
    }
    else if (!(playerChoice === 'Rock' || player === 'Paper' || player === 'Scissors')) {
        console.log("Refresh and try again, please only enter 'Rock', 'Paper', 'Scissors'");
        
    }
       
    
}

// Removing logic to play 5 rounds temp
// for (let i = 0; i < 5; i++) { // Loop to play game function 5 times
//     game();
// }

let playerChoice;

// rock.addEventListener('click', () => {
//     playerChoice = 'Rock';
//     console.log(playerChoice);
// });
// paper.addEventListener('click', () => {
//     playerChoice = 'Paper';
//     console.log(playerChoice);
// });
// scissors.addEventListener('click', () => {
//     playerChoice = 'Scissors';
//     console.log(playerChoice);
// });


function game() {
    function getComputerChoice() {
        //random output of rock, paper, or scissors
        // return this output
        const choice = ['Rock', 'Paper', 'Scissors']; // Variable array to contain computer choices
        const randomChoice = Math.floor(Math.random() * choice.length); // Randomly choose an array item from choice variable
        const randomChoiceFinal = (randomChoice, choice[randomChoice]); // Picks a random choice 
        return randomChoiceFinal;
    }

    // function getPlayerChoice() {
    //     playerInput = prompt("Enter Rock, Paper, Or Scissors! Game will ask you 5 times."); // Variable to get rock
    //     playerToLower = playerInput.toLowerCase(); // Converts players input to all lowercase
    //     playerSelection = playerToLower[0].toUpperCase() + playerToLower.substring(1); // Uppercases the first letter, then concats it with the rest of the string
    //     return playerSelection;
    // }
    rock.addEventListener('click', () => {
        playerChoice = 'Rock';
        console.log(playerChoice);
    });
    paper.addEventListener('click', () => {
        playerChoice = 'Paper';
        console.log(playerChoice);
    });
    scissors.addEventListener('click', () => {
        playerChoice = 'Scissors';
        console.log(playerChoice);
    });

    computer = getComputerChoice();
    player = playerChoice;
    round(computer, player); // Runs the round inside game() function
    playCount++; // +1 playcount

    }
    console.log(`Playcount: ${playCount}`);
    console.log("Wins: " + winCounter);
    console.log("Losses: " + lossCounter);
    console.log("Ties: " + tieCounter);
    if (playCount = 5){ // Conditional to determine who won 5 rounds
        if (winCounter > lossCounter) {
            console.log("You win!");
        }
        else if (lossCounter >= tieCounter && lossCounter > winCounter) {
            console.log("You lose!");
        }
        else if (tieCounter > winCounter && lossCounter) {
            console.log("Its a tie!");
        }
        else if (winCounter === lossCounter) {
            console.log("Its a tie!");
        }
    }



    // UI elements starting 
    const buttons = document.querySelectorAll('button');
    // const rock = document.querySelector('.rock');
    game();
    