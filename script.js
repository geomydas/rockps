function getComputerChoice() {
  let computerChoice = Math.random();

  if (computerChoice < 0.333) {
    computerChoice = "rock";
  } else if (computerChoice < 0.666) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose from rock, paper, or scissors").toLowerCase();
  return humanChoice;
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    switch (humanChoice) {
      case "rock":
        switch (computerChoice) {
          case "rock":
            console.log("You choose rock, computer chooses rock. You tie");
            humanScore = ++humanScore;
            break;
          case "paper":
            console.log("You choose rock, computer chooses paper. You lose");
            humanScore = ++humanScore;
            break;
          case "scissors":
            console.log("You choose rock, computer chooses scissors. You win");
            humanScore = ++humanScore;
            break;
        }
        break;

      case "paper":
        switch (computerChoice) {
          case "rock":
            console.log("You choose paper, computer chooses rock. You win");
            break;
          case "paper":
            console.log("You choose paper. comptuer chooses paper. You tie");
            break;
          case "scissors":
            ++humanScore;
            break;
        }
        break;

      case "scissors":
        switch (computerChoice) {
          case "rock":
            console.log("You choose scissors, computer chooses rock. You lose");
            break;
          case "paper":
            console.log("You choose scissors, computer chooses paper. You win");
            break;
          case "scissors":
            console.log("You choose scissors, computer chooses scissors. You tie");
            break;
        }
        break;
    }
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    return;
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();
