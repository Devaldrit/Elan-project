window.onload = function() {let playername1 = document.querySelector('#playername1');

const nameplayer = prompt('What is your name, player 1?');

if (nameplayer !== null) {
    playername1.innerText = nameplayer;
} else {
    playername1.innerText = "Default Name";
}

let playername2 = document.querySelector('#playername2');
const nameplayer2 = prompt('what is your name, player 2?')
if (nameplayer2 !== null) {
    playername2.innerText = nameplayer;
} else {
    playername2.innerText = "Default Name";
}
};


// tic tac toe game
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText');
const restartBtn = document.querySelector('#restartBtn');

const winConditions = [
    [0 , 1, 2],
    [3 , 4, 5],
    [6 , 7, 8],
    [0 , 6, 6],
    [1 , 4, 7],
]