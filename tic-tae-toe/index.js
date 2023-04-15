let gameInfo=document.querySelector('.game-info');
let boxes=document.querySelectorAll('.box');
let btn=document.querySelector('.btn');

let currentPlayer;
// gameInfo.innerText=`Current Player - ${currentPlayer}`;
let gridGame=["","","","","","","","",""];
btn.classList.add("active");
const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        handleClick(box,index);
    })
});

function swapPlayer(){
    if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X";
    }
}

function checkGameOver(){
    let answer="";
    winningPositions.forEach((position)=>{
        if(gridGame[position[0]]!=="" && gridGame[position[1]]!=="" && gridGame[position[2]]!==""
        && gridGame[position[0]]===gridGame[position[1]] && gridGame[position[1]]===gridGame[position[2]]){
            // Check if Winner is X/O
            if(gridGame[position[0]]==='X'){
                answer="X";
            }
            else{
                answer='O';
            }
            
            // Disable pointer Events
            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            })

            // Change color to Green
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");

        }
    });

    //it means we have a winner
    if(answer !== "" ) {
        gameInfo.innerText = `Winner Player - ${answer}`;
        btn.classList.add("active");
        return;
    }

    //We know, NO Winner Found, let's check whether there is tie
    let fillCount = 0;
    gridGame.forEach((box) => {
        if(box !== "" )
            fillCount++;
    });

    //board is Filled, game is TIE
    if(fillCount === 9) {
        gameInfo.innerText = "Game Tied !";
        btn.classList.add("active");
    }

}

function handleClick(box,index){
    
    box.innerText=currentPlayer;
    gridGame[index]=currentPlayer;
    console.log(gridGame[index]);
    box.style.pointerEvents="none";
    swapPlayer();
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
    checkGameOver();
}

function gameInit(){
    gridGame=["","","","","","","","",""];
    currentPlayer="X";
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
    
    boxes.forEach((box,index)=>{
        box.innerText="";
        box.classList.remove("win");
        box.style.pointerEvents="auto";
    })    
    // swapPlayer();  
}

gameInit();

btn.addEventListener('click',()=>{
    btn.classList.remove("active");
    gameInit();
});