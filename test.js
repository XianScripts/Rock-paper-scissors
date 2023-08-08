// Attaching buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
console.log(rock, paper, scissors);

let choice;
function input() {
    rock.addEventListener('click', () => {
        choice = 'Rock';
    });
    paper.addEventListener('click', () => {
        choice = 'Paper';
    });
    scissors.addEventListener('click', () => {
        choice = 'Scissors';
    });
    console.log(choice);

}
// rock.addEventListener('click', () => {
//     choice = 'Rock';
// });
// paper.addEventListener('click', () => {
//     choice = 'Paper';
// });
// scissors.addEventListener('click', () => {
//     choice = 'Scissors';
// });

function getPlayerChoice() {
    rock.addEventListener('click', () => {
        choice = 'Rock';
    });
    paper.addEventListener('click', () => {
        choice = 'Paper';
    });
    scissors.addEventListener('click', () => {
        choice = 'Scissors';
    });
    if (choice === 'Rock') {
        return 'Rock';
    }
    else if (choice === 'Paper') {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function getCompChoice() {
    return 'Scissors';
}


function round(getCompChoice, getPlayerChoice) {
    if (getPlayerChoice === "Rock" && getCompChoice === 'Scissors') {
        console.log("You win~!");
    }
}


round();
console.log(choice);











function getComputerChoice() {
    //random output of rock, paper, or scissors
    // return this output
    const choice = ['Rock', 'Paper', 'Scissors']; // Variable array to contain computer choices
    const randomChoice = Math.floor(Math.random() * choice.length); // Randomly choose an array item from choice variable
    const randomChoiceFinal = (randomChoice, choice[randomChoice]); // Picks a random choice 
    return randomChoiceFinal;
}