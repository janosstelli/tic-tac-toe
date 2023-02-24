
var game=['','','','','','','','',''];
var player='';
var playerTurn='';
var endOfGame='false';
var full=0;
var winningCasesPositions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function resetGame() {
    for ( i=0;i<=8;i++) {
        document.getElementById(i).src="images/empthy.png";
    }
    document.getElementById("message").innerHTML='Player <span id="change-player-turn">1</span> must choose!';
    document.getElementById("button").innerHTML="Begin Game";
    game=['','','','','','','','',''];
    player='';
    playerTurn='';
    endOfGame='false';
    full=0;
    winningCasesPositions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
}

function display(id) {
    document.getElementById("button").innerHTML="Reset Game";
    if (game[id]==='' && endOfGame==='false') {
        if (document.getElementById("change-player-turn").innerHTML==="1") {
            document.getElementById(id).src="images/x.png";
            document.getElementById("change-player-turn").innerHTML="2" ;
            playerTurn="x"; 
            player="1";
        } 
        else {
            document.getElementById(id).src="images/0.png";
            document.getElementById("change-player-turn").innerHTML="1" ;
            playerTurn="0";
            player="2";
        }
        game[id]=playerTurn;
        full+=1;
    } 

    for (i=0;i<=7;i++) {
        var win=winningCasesPositions[i];
        if (game[win[0]]===playerTurn && game[win[1]]===playerTurn && game[win[2]]===playerTurn) {
            document.getElementById("message").innerHTML="Player "+player+" wins";
            endOfGame='true';
        }
    }

    if (full===9 && endOfGame==='false') {
        document.getElementById("message").innerHTML="Draw!";
        endOfGame='true';
    }
}
