
let gameArray = ['rock', 'paper', 'scissors'];
function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()*gameArray.length);
    let randomChoice = gameArray[randomIndex];
    return randomChoice;
}
