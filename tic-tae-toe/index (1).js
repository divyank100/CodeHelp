const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
// grid jispe puri game kheli ja rhi h
let gameGrid;

// storing the winning positions
const winningPos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]

    // 0 3 6
    // 1 4 7
    // 2 5 8
];

// function  to initialize the game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];

    // new game par click karne ke baad pirana game ki grid empty karni hogi isse karenge
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";

        // green hatana
        box.classList = `box box${index+1}`;
    });
    // initially new gamebutton ni dekhegi
    newGameBtn.classList.remove("active");

    // UI pe current player dikhayega
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }

    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver(){
    let ans = "";
    winningPos.forEach((position) => {
        // ye condition ye darshati h ki teeno boxes bhare hone chahiye mtlb empty ni or unme same value honi
        // chahiye jese ki XXX or OOO
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
        && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])
        ){

            // agar us position pe x ho t toh X winner ni to O winner
            if(gameGrid[position[0]] === "X")
               ans = "X";
            else
               ans = "O";

            // agar koi jeet gaya h to aage click na hone do
               boxes.forEach((box) => {
                   box.style.pointerEvents = "none";
               })  
             
            // ab un boxes ko green kardo
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
            
        }
    });

    // new game ki button lane ka logic
    //we have a winner
    if(ans !== ""){
        gameInfo.innerText = `Winner Player - ${ans}`;
        newGameBtn.classList.add("active");
        return;
    }

    // game tied logic
    let fillCount = 0;
    // kitne fill h check karenge
    gameGrid.forEach((box) => {
        if(box  !== "")
           fillCount++;
    });

    if(fillCount === 9){
        gameInfo.innerText = "Game Tied ! ";
        newGameBtn.classList.add("active");
    }
}

// ye function ka kaam - agar wo box jispe user ne click kiya  wo empty h to use fill karega X ya O se
function handleClick(index){
    if(gameGrid[index] === ""){
        // boxes UI pe update kar rha h
        boxes[index].innerText = currentPlayer;
        // isee humne jo upar grid banayi h usme update hoge, ye wali ["", "",   etc]
        gameGrid[index] = currentPlayer;
        // jab player likh jayega tab cursor pointer ni banega uspe
        boxes[index].style.pointerEvents = "none";
        // change the turn
        swapTurn();
        //check koi jeeta to ni
        checkGameOver();
    }
}

// ye har ek box pe click ko manage karega
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        // kese pta chalega ki konse box pe click hua h isliye index ka use kiya h
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", initGame);
