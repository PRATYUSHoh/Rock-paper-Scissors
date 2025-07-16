const buttonsContainer = document.createElement("div");
buttonsContainer.id = "buttonsContainer";
document.body.appendChild(buttonsContainer);

const resultdiv = document.createElement("div");
resultdiv.id = "result";
document.body.appendChild(resultdiv);

function getComputerChoice() {
  const randomNumber = Math.random(); // number between 0 and 1

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}


function playGame(humanChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (!['rock', 'paper', 'scissors'].includes(humanChoice)) {
    displayresult("Invalid choice! Please choose rock, paper, or scissors.");
    return;
  }

  displayresult(`${humanChoice} THROWN`);
  const computerChoice = getComputerChoice();
  displayresult(`Computer chose: ${computerChoice}`);
  playRound(humanChoice, computerChoice) ;
  
}

let humanScore = 0;
let computerScore = 0;
let round = 0;
const maxRounds = 5;

function playRound(humanChoice, computerChoice) {
  if (round >= maxRounds) {
  displayresult("Game over! Maximum rounds reached.");
    return;
  }
  if (humanChoice === computerChoice) {
    displayresult(`It's a tie! Both chose ${humanChoice}.`);
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    displayresult(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    displayresult(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }
  round++;

  displayresult(`Round ${round} completed.`);

  displayresult(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);

  checkGameResult();
}

function checkGameResult(){
if (round>=maxRounds) {
  displayresult("----- Final Result -----");
  }
    if (humanScore > computerScore) {
      displayresult("You win the game!");
    } else if (computerScore > humanScore) {
      displayresult("You lose the game!");
    } else {
      displayresult("It's a tie!");
}
}

const button = document.createElement("button");
button.innerHTML = "Start Game";
button.setAttribute("onclick", "options()");
document.body.appendChild(button);
buttonsContainer.appendChild(button)

function options() {
  displayresult("GAME STARTED");
  displayresult("Choose one");

  const button1 = document.createElement("button");
  button1.innerHTML = "ROCK";
  button1.addEventListener("click", () => playGame("ROCK"));
  document.body.appendChild(button1);
  buttonsContainer.appendChild(button1)

  const button2 = document.createElement("button");
  button2.innerHTML = "PAPER";
  button2.addEventListener("click", () => playGame("PAPER"));
  document.body.appendChild(button2);
  buttonsContainer.appendChild(button2)

  const button3 = document.createElement("button");
  button3.innerHTML = "SCISSORS";
  button3.addEventListener("click", () => playGame("SCISSORS"));
  document.body.appendChild(button3);
  buttonsContainer.appendChild(button3)
}
function displayresult(message) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML += `<p>${message}</p>`;
}