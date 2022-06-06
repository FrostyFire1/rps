function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}
function play(playerSel, computerSelect) {
  let playerSelect = playerSel.toLowerCase();
  if (!["rock", "paper", "scissors"].includes(playerSelect)) {
    return "Invalid input!";
  }
  let outcome = "";
  if (playerSelect === "rock") {
    if (computerSelect === "rock") {
      outcome = "draw!";
    } else if (computerSelect === "scissors") {
      outcome = "win!";
    } else {
      outcome = "lose!";
    }
  } else if (playerSelect === "paper") {
    if (computerSelect === "rock") {
      outcome = "win!";
    } else if (computerSelect === "scissors") {
      outcome = "lose!";
    } else {
      outcome = "draw!";
    }
  } else if (playerSelect === "scissors") {
    if (computerSelect === "rock") {
      outcome = "lose!";
    } else if (computerSelect === "scissors") {
      outcome = "draw!";
    } else {
      outcome = "win!";
    }
  }
  if (outcome === "win!") {
    return `You win! ${playerSelect} beats ${computerSelect}`;
  } else if (outcome === "lose!") {
    return `You lose! ${computerSelect} beats ${playerSelect}`;
  } else return `Draw! ${playerSelect} can't beat ${computerSelect}`;
}

function game() {
  let playerScore = 0;
  let compScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Rock, paper or scissors?");
    let computerInput = computerPlay();
    let outcome = play(playerInput, computerInput);

    if (outcome === "Invalid input!") {
      i--;
      console.log("You entered an invalid input! let's try that again.");
      continue;
    }
    if (outcome === `You win! ${playerInput} beats ${computerInput}`) {
      playerScore++;
    } else if (outcome === `You lose! ${computerInput} beats ${playerInput}`) {
      compScore++;
    } else {
      playerScore++;
      compScore++;
    }
    console.log(outcome);
  }
  if (playerScore > compScore) {
    return "You win the best of 5!";
  } else if (compScore > playerScore) {
    return "You lost the best of 5!";
  }
}
