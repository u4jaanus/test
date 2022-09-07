const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
}

// Play Game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

// Get computers choices
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 5) + 1;
  if (randomNumber === 1) {
    getComputerChoice = 'rock'
  }
  if (randomNumber === 2) {
    getComputerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    getComputerChoice = 'paper'
  }
  if (randomNumber === 4) {
    getComputerChoice = 'lizard'
  }
  if (randomNumber === 5) {
    getComputerChoice = 'spock'
  }
}

// Get game winner
function getWinner(pc, cc) {
  if(pc === cc) return 'draw';
  else if (pc === 'rock') {
    if(cc === 'paper') return 'computer';
    else return 'player';
  } else if (pc === 'paper') {
    if(cc === 'scissors') return 'computer';
    else return 'player';
  } else if (pc === 'scissors') {
      if(cc === 'rock') return 'computer';
      else return 'player';
    }
}

// Show winner

function showWinner(winner, computerChoice) {
  if(winner === 'player') {
    // Inc player score
    scoreboard.player++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-win">You Win!</h1>
      <hr>
      <i class="fa-solid fa-hand-${computerChoice}"></i>
      <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } else if(winner === 'computer') {
    // Inc computer score
    scoreboard.computer++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-lose">You Lose!</h1>
      <hr>
      <i class="fa-solid fa-hand-${computerChoice}"></i>
      <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  } else {
    // Show modal result
    result.innerHTML = `
      <h1>It's a Draw!</h1>
      <hr>
      <i class="fa-solid fa-hand-${computerChoice}n"></i>
      <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
  }
  // Show score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
  `;
  modal.style.display = 'block';
}

// Clear modal
function clearModal(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}

// Restart Game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
}

// Event Listener
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
