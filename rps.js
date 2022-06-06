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
  return outcome;
}

let buttons = document.querySelectorAll("button");
let playerWins = 0;
let computerWins = 0;
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let userVal = e.target.innerText;
    let computerVal = computerPlay();
    let result = play(userVal, computerVal);
    let resultDiv = document.querySelector("#result");
    if (result === "win!") {
      playerWins++;
    } else if (result === "lose!") {
      computerWins++;
    }
    if (playerWins === 5) {
      resultDiv.innerText = `You win ${playerWins} to ${computerWins}! Resetting the scores.`;
      playerWins = 0;
      computerWins = 0;
    } else if (computerWins === 5) {
      resultDiv.innerText = `You lose ${playerWins} to ${computerWins}! Resetting the scores.`;
      playerWins = 0;
      computerWins = 0;
    } else {
      resultDiv.innerText = `${result} Current score: ${playerWins} - ${computerWins}`;
    }
  });
});
