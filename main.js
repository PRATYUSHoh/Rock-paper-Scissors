/* function getComputerChoice() {
    const randomNumber = Math.random(); // number between 0 and 1
  
    if (randomNumber < 1 / 3) {
      return "rock";
    } else if (randomNumber < 2 / 3) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    return choice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const outputDiv = document.getElementById('output');
    const scoreDiv = document.getElementById('score');
    outputDiv.innerHTML = ""; 
    scoreDiv.innerHTML = "";

   function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        outputDiv.innerHTML += `<p>It's a tie! Both chose ${humanChoice}.</p>`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        outputDiv.innerHTML += `<p>You win! ${humanChoice} beats ${computerChoice}.</p>`;
        humanScore++;

    } else {
        outputDiv.innerHTML += `<p>You lose! ${computerChoice} beats ${humanChoice}.</p>`;
        computerScore++;
    }

   }

    for (let i = 0; i < 5; i++) {
          const humanChoice = getHumanChoice();
          const computerChoice = getComputerChoice();
          (playRound(humanChoice, computerChoice));
     }
    scoreDiv.innerHTML = `<p>Final Score - You: ${humanScore}, Computer: ${computerScore}</p>`;
    
     if (humanScore > computerScore) {
        outputDiv.innerHTML += `<p><strong>You win the game!</strong></p>`;
     } else if (computerScore > humanScore) {
        outputDiv.innerHTML += `<p><strong>You lose the game!</strong></p>`;
     } else {
        outputDiv.innerHTML += `<p><strong>The game is a tie!</strong></p>`;
     }

} 
*/
const button = document.createElement("button");
button.innerHTML = "Start Game";
button.setAttribute("onclick", "options()");
document.body.appendChild(button);
/*function options(){
  console.log("Game started")*/
  
function options(){
  console.log("GAME STARTED")
  console.log("Choose one")
 const button = document.createElement("button")
 button.innerHTML = "ROCK";
 button.addEventListener("click", playGame)
 document.body.appendChild(button);
 function playGame(){
  console.log("ROCK THROWN")
}
}