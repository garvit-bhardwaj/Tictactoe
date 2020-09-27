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

function gamewon()
{
    if(((origBoard[0]===origBoard[1])&&(origBoard[1]===origBoard[2])))
    {
        document.getElementById("0").style.background="#ffa0a0";
        document.getElementById("1").style.background="#ffa0a0";
        document.getElementById("2").style.background="#ffa0a0";
        if(origBoard[0]=='X')
        gameOver(aiPlayer);
        else
        gameOver(huPlayer);
    }
    else if(((origBoard[3]===origBoard[4])&&(origBoard[4]===origBoard[5])))
    {
        document.getElementById("3").style.background="#ffa0a0";
        document.getElementById("4").style.background="#ffa0a0";
        document.getElementById("5").style.background="#ffa0a0";
        if(origBoard[0]=='X')
        gameOver(aiPlayer);
        else
        gameOver(huPlayer);
    }
    else if(((origBoard[6]===origBoard[7])&&(origBoard[7]===origBoard[8])))
    {
        document.getElementById("6").style.background="#ffa0a0";
        document.getElementById("7").style.background="#ffa0a0";
        document.getElementById("8").style.background="#ffa0a0";
        if(origBoard[0]=='X')
        gameOver(aiPlayer);
        else
        gameOver(huPlayer);
    }
    else if(((origBoard[0]===origBoard[3])&&(origBoard[3]===origBoard[6])))
    {
        document.getElementById("0").style.background="#ffa0a0";
        document.getElementById("3").style.background="#ffa0a0";
        document.getElementById("6").style.background="#ffa0a0";
        if(origBoard[0]=='X')
        gameOver(aiPlayer);
        else
        gameOver(huPlayer);
    }
    else if(((origBoard[1]===origBoard[4])&&(origBoard[4]===origBoard[7])))
    {
        document.getElementById("1").style.background="#ffa0a0";
        document.getElementById("4").style.background="#ffa0a0";
        document.getElementById("7").style.background="#ffa0a0";
        if(origBoard[0]=='X')
        gameOver(aiPlayer);
        else
        gameOver(huPlayer);
    }
    else if(((origBoard[2]===origBoard[5])&&(origBoard[5]===origBoard[8])))
    {
        document.getElementById("2").style.background="#ffa0a0";
        document.getElementById("5").style.background="#ffa0a0";
        document.getElementById("8").style.background="#ffa0a0";
        if(origBoard[0]=='X')
        gameOver(aiPlayer);
        else
        gameOver(huPlayer);
    }
    else if(((origBoard[0]===origBoard[4])&&(origBoard[4]===origBoard[8])))
    {
        document.getElementById("0").style.background="#ffa0a0";
        document.getElementById("4").style.background="#ffa0a0";
        document.getElementById("8").style.background="#ffa0a0";
        if(origBoard[0]=='X')
        gameOver(aiPlayer);
        else
        gameOver(huPlayer);
    }
    else if(((origBoard[2]===origBoard[4])&&(origBoard[4]===origBoard[6])))
    {
        document.getElementById("2").style.background="#ffa0a0";
        document.getElementById("4").style.background="#ffa0a0";
        document.getElementById("6").style.background="#ffa0a0";
        if(origBoard[0]=='X')
        gameOver(aiPlayer);
        else
        gameOver(huPlayer);
    }
    else return;
}

function gameOver(winner)
{
    // console.log("hey");
    if(winner=='X')
    displaywin="A.I. ";
    else
    displaywin="You ";
    document.querySelector(".endgame").style.display="block";
    document.querySelector(".text").innerText= displaywin + "won";
    for(var i=0;i<cells.length;i++)
    {
        document.getElementById(i).removeEventListener("click",turnclick);
    }
}

function turnclick(square){
    turn(square.target.id,huPlayer);
    for(let t=0; ;t++)
    {
        if(origBoard[t]==='X'||origBoard[t]==='0')
        continue;
        else
        {
            turn(t,aiPlayer);
            break;
        }
    }
}

function turn(cellId,player)
{
    document.getElementById(cellId).innerText=player;
    document.getElementById(cellId).removeEventListener("click",turnclick);
    origBoard[cellId]=player;
    gamewon();
    if(checktie())
    {
        gametie();
    }
}

function checktie()
{
    for(var i=0;i<cells.length;i++)
    {
        if(origBoard[i]==='X'||origBoard[i]==='0')
        continue;
        else
        return false;
    }
    return true;
}

function gametie()
{
    document.querySelector(".endgame").style.display="block";
    document.querySelector(".text").innerText= "It's a tie!";
    for(var i=0;i<cells.length;i++)
    {
        document.getElementById(i).style.background="#ffa0a0";
        document.getElementById(i).removeEventListener("click",turnclick);
    }
}