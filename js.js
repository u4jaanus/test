// Function to decide winner

const winner = (player, computer) => {
  const result = document.querySelector(".result");

  const playerScoreBoard = document.querySelector(".p-count");

  const computerScoreBoard = document.querySelector(".c-count");

  player = player.toLowerCase();

  computer = computer.toLowerCase();

  if (player === computer) {
    result.textContent = "Tie";
  } else if (player == "rock") {
    if (computer == "paper") {
      result.textContent = "Computer Won";

      computerScore++;

      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";

      playerScore++;

      playerScoreBoard.textContent = playerScore;
    }
  } else if (player == "scissors") {
    if (computer == "rock") {
      result.textContent = "Computer Won";

      computerScore++;

      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";

      playerScore++;

      playerScoreBoard.textContent = playerScore;
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      result.textContent = "Computer Won";

      computerScore++;

      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = "Player Won";

      playerScore++;

      playerScoreBoard.textContent = playerScore;
    }
  }
};


  // Function to decide winner

  const winner = (player, computer) => {
    const result = document.querySelector(".result");

    const playerScoreBoard = document.querySelector(".p-count");

    const computerScoreBoard = document.querySelector(".c-count");

    player = player.toLowerCase();

    computer = computer.toLowerCase();

    if (player === computer) {
      result.textContent = "Tie";
    } else if (player == "rock") {
      if (computer == "paper") {
        result.textContent = "Computer Won";

        computerScore++;

        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";

        playerScore++;

        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "rock") {
      if (computer == "spock") {
        result.textContent = "Computer Won";

        computerScore++;

        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";

        playerScore++;

        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.textContent = "Computer Won";

        computerScore++;

        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";

        playerScore++;

        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "spock") {
        result.textContent = "Computer Won";

        computerScore++;

        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";

        playerScore++;

        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.textContent = "Computer Won";

        computerScore++;

        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";

        playerScore++;

        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "lizard") {
        result.textContent = "Computer Won";

        computerScore++;

        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "Player Won";

        playerScore++;

        playerScoreBoard.textContent = playerScore;
      }
    }
  };