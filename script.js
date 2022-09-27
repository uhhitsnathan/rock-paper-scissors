
let gameArray = ['rock', 'paper', 'scissors'];
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*gameArray.length);
    var result = gameArray[randomIndex];
    return result;
}
function getPlayerChoice(){
    let playerInput = prompt('YOU MUST CHOOSE ROCK PAPER OR SCISSORS');
    return playerInput;
}
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return 'Its a tie!';
      } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
          return 'You lose! Papper beats rock!';
        } else {
          return 'You win! Rock beats scissors!';
        }
      } else if (playerSelection === 'papper') {
        if (computerSelection === "rock") {
          return 'You win! Papper beats rock!';
        } else {
          return 'You loose! Scissors beat papper';
        }
      } else {
        if (computerSelection === 'rock') {
          return 'You loose!! Rock beat scissors!';
        } else {
          return 'You win!! Scissors beat papper!';
        }
      }
    }


console.log(playRound(playerSelection, computerSelection));
