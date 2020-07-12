var options = ['Stone', 'Paper', 'Scissor'];
var player1Score = 0;
var player2Score = 0;
document.querySelector('.click-action').addEventListener('click', function () {
    var player1Index = Math.floor(Math.random() * options.length);
    var player2Index = Math.floor(Math.random() * options.length);
    document.getElementById('draw').textContent = '';
    document.getElementById('res1').textContent = options[player1Index];
    document.getElementById('res2').textContent = options[player2Index];
    if((options[player1Index] == 'Stone' && options[player2Index] == 'Scissor') ||
    (options[player1Index] == 'Paper' && options[player2Index] == 'Stone') ||
    (options[player1Index] == 'Scissor' && options[player2Index] == 'Paper')) {
        player1Score +=1;
        document.getElementById('score1').innerHTML = player1Score;
    } else if ((options[player1Index] == 'Scissor' && options[player2Index] == 'Stone') ||
    (options[player1Index] == 'Stone' && options[player2Index] == 'Paper') ||
    (options[player1Index] == 'Paper' && options[player2Index] == 'Scissor')) {
        player2Score +=1;
        document.getElementById('score2').innerHTML = player2Score;
    } else {
        document.getElementById('draw').textContent = "It's a draw, play again"
    }
    if(player1Score >= 5) {
        document.getElementById('win1').textContent = "Player 1 wins";
    } else if (player2Score >= 5) {
        document.getElementById('win2').textContent = "Player 2 wins";
    }
});

function newGame() {
    document.getElementById('res1').textContent = '';
    document.getElementById('res2').textContent = '';
    document.getElementById('score1').innerHTML = 0;
    document.getElementById('score2').innerHTML = 0;
    document.getElementById('win1').textContent = "";
    document.getElementById('win2').textContent = "";
}