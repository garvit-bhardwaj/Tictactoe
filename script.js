var origBoard;
var aiPlayer='X';
var huPlayer='0';
const winCombos=[
    [0,1,2],
    [3,4,5], 
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

const cells=document.querySelectorAll('.cell');
startGame();

function startGame(){
    document.querySelector(".endgame").style.display="none";
    origBoard=Array.from(Array(9).keys());
    for(var i=0;i<cells.length;i++)
    {
        document.getElementById(i).innerText="";
        document.getElementById(i).style.background="";
        document.getElementById(i).addEventListener("click",turnclick);
    }
}

function turnclick(square){
    turn(square.target.id,huPlayer);
}

function turn(cellId,player)
{
    document.getElementById(cellId).innerText=player;
    origBoard[cellId]=player;
}