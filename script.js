let compScore = 0;
let humanScore = 0;
const GAMES_PLAYED = 5;

// Computer Selection
function computerPlay(){
    const choices = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

// Player Selection
function humanPlay(){
    const playerSelect = prompt('Please enter your choice, rock, paper or scissors');
    return playerSelect.toLowerCase();
}


// Score board
function calculateScore(){
    if(compScore === humanScore){
        console.log(`Computer score: ${compScore} Your score: ${humanScore} It's a tie`)
    }else if(compScore < humanScore){
        console.log(`Computer score: ${compScore} Computer lost! Your score: ${humanScore} You win!`);
    }else{
        console.log(`Computer Score: ${compScore} Computer wins! Your Score: ${humanScore} You lose!`);
    }
}

// Game plays and wins
function playRound(playerSelection, computerSelection){

    let winMessageCPU = `You Lose! ${computerSelection} beats ${playerSelection}`;
    let winMessagePYR = `You Win! ${playerSelection} beats ${computerSelection}`;

    
    if(computerSelection === 'rock' && playerSelection === 'scissors'){
        ++compScore;
        return winMessageCPU
    }else if(computerSelection === 'paper' && playerSelection === 'rock'){
        ++compScore;
        return winMessageCPU;
    }else if(computerSelection === 'scissors' && playerSelection == 'paper'){
        ++compScore;
        return winMessageCPU;
    }else if(computerSelection === 'rock' && playerSelection === 'paper'){
        ++humanScore;
        return winMessagePYR;
    }else if(computerSelection === 'paper' && playerSelection === 'scissors'){
        ++humanScore;
        return winMessagePYR;
    }else if(computerSelection == 'scissors' && playerSelection == 'rock'){
        ++humanScore;
        return winMessagePYR;
    }else if(computerSelection === playerSelection) {
        return 'It\' a tie!';
    }else{
        return 'Invalid input, please choose rock, paper, or scissors!';
    }
}

function game(){
    for(let i = GAMES_PLAYED; i > 0; --i){
        console.log(playRound(humanPlay(), computerPlay()));
    }
}

game();
calculateScore();


