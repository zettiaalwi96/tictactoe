// Displaying player's name
const player1Name = document.querySelector(".player1");
const player2Name = document.querySelector(".player2");
const submitBtn = document.getElementById("button");
const out1 = document.getElementById("outputPlayer1");
const out2 = document.getElementById("outputPlayer2");

function names() {
  out1.innerText = player1Name.value;
  out2.innerText = player2Name.value;
  document.querySelector(".playersName").style.display = "none";
}

submitBtn.addEventListener("click", names);

// Tic Tac Toe logic
const boxes = Array.from(document.getElementsByClassName("boardCell"));

const player1 = "X";
const player2 = "O";
let currentPlayer = player1;

let playerText = document.getElementsByClassName("playerText");

let restartBtn = document.getElementById("restartButton");

const winCondition = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const blank = [null, null, null, null, null, null, null, null, null];
let score = 0;

let running = false;

function startGame() {
  boxes.forEach((boardCell) => boardCell.addEventListener("click", boxClicked));
  restartBtn.addEventListener("click", restartGame);
  running = true;
}

function boxClicked(e) {
  const id = e.target.id;
  // console.log(id);

  if (!blank[id]) {
    blank[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (checkWinner() == true) {
      return;
    }

    currentPlayer = currentPlayer == player1 ? player2 : player1;

    // document.querySelector('.playerText').innerText = `${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winCondition.length; i++) {
    const condition = winCondition[i];
    const cellA = blank[condition[0]];
    const cellB = blank[condition[1]];
    const cellC = blank[condition[2]];

    if (cellA == null || cellB == null || cellC == null) {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      showResult();
      return true;
    } else if (!blank.includes(null)) {
      document.querySelector(".winningMessage").innerText = "Draw !";
      document.querySelector(".winningMessage").style.display = "flex";
      document.querySelector(".board").style.display = "none";
    }
  }
}

function showScore() {
  for (score; score < 100; score++) {
    if (currentPlayer == player1) {
      let winScore1 = document.querySelector(".scoreP1").innerHTML;
      document.querySelector(".scoreP1").innerHTML = parseInt(winScore1) + 1;
      return;
    }
    if (currentPlayer == player2) {
      let winScore2 = document.querySelector(".scoreP2").innerHTML;
      document.querySelector(".scoreP2").innerHTML = parseInt(winScore2) + 1;
      return;
    }
  }
}

function soundEffect() {
  let audio = new Audio("sound.mp3");
  audio.play();
}

function showResult() {
  if (currentPlayer == player1) {
    document.querySelector(".winningMessage").innerText = `${
      document.querySelector(".player1").value
    } wins !`;
    soundEffect();
    showScore();
  }
  if (currentPlayer == player2) {
    document.querySelector(".winningMessage").innerText = `${
      document.querySelector(".player2").value
    } wins !`;
    soundEffect();
    showScore();
  }
  document.querySelector(".winningMessage").style.display = "flex";

  document.querySelector(".board").style.display = "none";
}

function restartGame() {
  blank.fill(null);

  boxes.forEach((box) => {
    box.innerText = "";
  });

  currentPlayer = player1;

  document.querySelector(".winningMessage").innerText = "";

  document.querySelector(".board").style.display = "grid";

  document.querySelector(".winningMessage").style.display = "none";
}

startGame();
