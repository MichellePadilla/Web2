const cells = document.querySelectorAll("td");
const message = document.getElementById("message");
const turnSpan = document.getElementById("turn");
const restartBtn = document.getElementById("restartBtn");

let current = "X";
let board = Array(9).fill("");
let running = true;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => handleClick(cell));
});

function handleClick(cell) {
  const index = cell.dataset.index;
  if (board[index] !== "" || !running) return;

  board[index] = current;
  cell.textContent = current;

  if (checkWinner(current)) {
    message.textContent = `¡Gana ${current}!`;
    running = false;
  } else if (!board.includes("")) {
    message.textContent = "¡Empate!";
    running = false;
  } else {
    current = current === "X" ? "O" : "X";
    turnSpan.textContent = current;
  }
}

function checkWinner(player) {
  return winCombos.some((combo) => {
    return combo.every((i) => board[i] === player);
  });
}

restartBtn.addEventListener("click", resetGame);

function resetGame() {
  board = Array(9).fill("");
  current = "X";
  running = true;
  cells.forEach((cell) => (cell.textContent = ""));
  message.textContent = "Turno de: ";
  turnSpan.textContent = current;
}

