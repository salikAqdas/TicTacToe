
let gameCompleted = false;
let playerOne = "X";
let PlayerTwo = "0";
let isPlayerOne = true;

let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
document.querySelectorAll('.board-column').forEach((col) => {
    col.addEventListener('click', (e) => {
        if (gameCompleted) {
            alert("Refresh to play again!");
            return;
        }
        let elementId = e.target.id;
        updateColumn(elementId.charAt(0), elementId.charAt(1))

    })
})

function updateColumn(row, col) {
    if (board[row][col] === '') {
        if (isPlayerOne) {
            board[row][col] = playerOne;
        }
        else {
            board[row][col] = PlayerTwo;
        }
        isPlayerOne = !isPlayerOne;
        printBoard(row, col);
        decideWinner();
    }
}
function printBoard(row, col) {
    let column = document.getElementById(`${row}${col}`);
    let symbol = board[row][col];
    let img = document.createElement('img');
    if (symbol === playerOne) {
        img.src = './TicTacToe_Cross.png';
    }
    else {
        img.src = './TicTacToe_Circle.png';
    }
    column.appendChild(img);
}
function decideWinner() {
    if (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][0] != "") {
        winner(board[0][0]);
        colorBg("00", "01", "02");
    }
    if (board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][0] != "") {
        winner(board[1][0]);
        colorBg("10", "11", "12");
    }
    if (board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][0] != "") {
        winner(board[2][0]);
        colorBg("20", "21", "22");
    }
    if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[1][0] != "") {
        winner(board[0][0]);
        colorBg("00", "10", "20");
    }
    if (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[1][1] != "") {
        winner(board[0][1]);
        colorBg("01", "11", "21");
    }
    if (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[1][2] != "") {
        winner(board[0][2]);
        colorBg("02", "12", "22");
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1] != "") {
        winner(board[0][0]);
        colorBg("00", "11", "22");
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] != "") {
        winner(board[0][2]);
        colorBg("02", "11", "20");
    }

    if (board.flat().every(cell => cell !== "") && !gameCompleted) {
        document.querySelector('#verdict').innerHTML = "It's a Draw!";
    document.querySelector('#verdict').style.display = 'block';
    document.querySelector('#verdict').style.background = 'yellow';

        gameCompleted = true;
    }
}
function colorBg(...boxes) {
    boxes.forEach((box) => {
        // document.getElementById(box).style.classList.add("won");
        document.getElementById(box).classList.add("won");
    })
}
function winner(winnerSymbol) {
    let str = "";
    if (winnerSymbol === playerOne) {
        str = "Player One Won"
    }
    else {
        str = "Player Two Won"
    }
    document.querySelector('#verdict').innerHTML = str;
    document.querySelector('#verdict').style.display = 'block';
    gameCompleted = true;
}

function resetGame() {
    board = [["", "", ""], ["", "", ""], ["", "", ""]];
    isPlayerOne = true;
    gameCompleted = false;
    document.querySelector('#verdict').innerHTML = '';
    document.querySelectorAll('.board-column').forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('won', 'disabled');
    });
}
