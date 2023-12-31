// Game logic segment
let winCounter = 0; // Declaring counter for user's number of wins/losses
let lossCounter = 0;
let winner; // Declaring winner/loser console.log variables
let loser;
let tie;
let tieCounter = 0;
let playCount = 0;
let player;
function getComputerChoice() {
    //random output of rock, paper, or scissors
    // return this output
    const choice = ['Rock', 'Paper', 'Scissors']; // Variable array to contain computer choices
    const randomChoice = Math.floor(Math.random() * choice.length); // Randomly choose an array item from choice variable
    const compChoice = (randomChoice, choice[randomChoice]); // Picks a random choice 
    return compChoice;
}
function round(computer, player) { // Function to determine winner of a round between user and computer
    if (player === 'Rock' && computer === 'Paper') { // Checks if player lost rock outcome
        lossCounter++;
        return loser;
    }
    else if (player === 'Rock' && computer === 'Scissors') { // Checks if player won rock outcome
        winCounter++;
        return winner;
    }
    else if (player === 'Rock' && computer === 'Rock') { // Checks for tie
        tieCounter++;
        return tie;
    }
    else if (player === 'Paper' && computer === 'Scissors') { // Checks if player lost paper outcome
        lossCounter++;
        return loser;
    }
    else if (player === 'Paper' && computer === 'Rock') { // Checks if player won paper outcome
        winCounter++;
        return winner;
    }
    else if (player === 'Paper' && computer === 'Paper') { // Checks for tie
        tieCounter++;
        return tie;
    }
    else if (player === 'Scissors' && computer === 'Rock') { // Checks if player lost scissors outcome
        lossCounter++;
        return loser;
    }
    else if (player === 'Scissors' && computer === 'Paper') { // Checks if player won scissors outcome
        winCounter++;
        return winner;
    }
    else if (player === 'Scissors' && computer === 'Scissors') { // Checks for tie
        tieCounter++;
        return tie;
    }
    else if (!(player === 'Rock' || player === 'Paper' || player === 'Scissors')) {
        console.log("Refresh and try again, please only enter 'Rock', 'Paper', 'Scissors'");
        
    }
}


// UI segment
let resultText = document.querySelector('#game-results').children;
let resultContainer = document.querySelector('#game-results');
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    computer = getComputerChoice();
    player = 'Rock';
    round(computer, player);
    playCount++;
    playcounter();
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    computer = getComputerChoice();
    player = 'Paper';
    round(computer, player);
    playCount++;
    playcounter();
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    computer = getComputerChoice();
    player = 'Scissors';
    round(computer, player);
    playCount++;
    playcounter();
})


// Function to determine round and winner
function playcounter() {
    console.log("Wins: " + winCounter);
    console.log("Losses: " + lossCounter);
    console.log("Ties: " + tieCounter);
    if (playCount === 5){ // Conditional to determine who won 5 rounds
        if (winCounter > lossCounter) {
            console.log("You won through 5 rounds!");
            resultText[4].textContent = "You won through 5 rounds!";
        }
        else if (lossCounter >= tieCounter && lossCounter > winCounter) {
            console.log("You lost through 5 rounds!");
            resultText[4].textContent = "You lost through 5 rounds!";
        }
        else if (tieCounter > winCounter && lossCounter) {
            console.log("Its a tie through 5 rounds!");
            resultText[4].textContent = "Its a tie through 5 rounds!";
        }
        else if (winCounter === lossCounter) {
            console.log("Its a tie through 5 rounds!");
            resultText[4].textContent = "Its a tie through 5 rounds!";
        }
        
        // Creates the button UI appending and removing children
        let newButton = document.createElement('button');
        let continueButton = document.createElement('button');
        let newButtonContainer = document.querySelector('#reset-button');
        newButtonContainer.className = "button";
        newButton.innerText = "Reset game?";
        continueButton.innerText = "Continue game?";
        continueButton.className ="button"
        newButton.className = "button";
        console.log(newButton.outerHTML);
        console.log(newButtonContainer.outerHTML);
        newButtonContainer.appendChild(newButton);
        newButton.addEventListener('click', () => {
            playCount = 0;
            winCounter = 0;
            lossCounter = 0;
            tieCounter = 0;
            resultText[0].textContent = `Computer: ${computer}`;
            resultText[1].textContent = `Wins so far: ${winCounter}`;
            resultText[2].textContent = `Losses so far: ${lossCounter}`;
            resultText[3].textContent = `Ties so far: ${tieCounter}`;
            newButtonContainer.removeChild(newButton);
            resultText[4].textContent = "";
            resultText[0].textContent = "";
            resultText[1].textContent = "";
            resultText[2].textContent = "";
            resultText[3].textContent = "";
        })

        // Continue button segment
        // Continues keeping track and ends on even number plays
        continueButton.addEventListener('click', () => {

        })


    }
    // Output text of current round info
    resultText[0].textContent = `Computer: ${computer}`;
    resultText[1].textContent = `Wins so far: ${winCounter}`;
    resultText[2].textContent = `Losses so far: ${lossCounter}`;
    resultText[3].textContent = `Ties so far: ${tieCounter}`;

}