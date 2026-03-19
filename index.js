const cells = document.querySelectorAll(".cell");
const resultSection = document.querySelector(".resultSection");
const sumbitBtn = document.querySelector(".submitBtn");

let cellsArr = Array.from(cells);
console.log(cellsArr);




const Gameboard = function(){
    const currentTurnHeader = document.createElement("h1");
    document.body.appendChild(currentTurnHeader);
    



    const cellListener = () => {
        cellsArr.forEach(cell => {
        cell.addEventListener("click", () => {
            const currentCell = cellsArr.indexOf(cell) + 1;
            console.log("clicked", currentCell);
            Gameboard.playTurn(currentCell);
            console.log(gameBoardArray);
            displayController.reRenderGrid();       
        }); 
    });
    }

    let gameBoardArray = ["e","e","e",
                          "e","e","e",
                          "e","e","e"] // "e" for empty
   
    let winner = "undecided";
    let players = {
        player1 : {playerName: "firstPlayer", playerSybmol : "X"},
        player2 : {playerName: "secondPlayer", playerSybmol : "O"},
    }

    const getPlayerNames = (player1name, player2name) => {
        players.player1.playerName = player1name;
        players.player2.playerName = player2name;
        console.log(`Players are now registered with Name: ${players.player1.playerName} and Name: ${players.player2.playerName}`);

    }; 



    let currentTurn = players.player1.playerSybmol;
    const calculateTurn = () => {
        if (!gameBoardArray.includes("X") && !gameBoardArray.includes("O")){ // Checks if any moves have been played
            currentTurn = players.player1.playerSybmol;
            console.log(currentTurn)
        }
    }
    const playTurn = (cellPos) => {
        cellPos --;
       
        
        console.log("Current Pos: ", cellPos);
        console.log("current turn: ", currentTurn);
        if (winner == "draw"){
            console.log("No More Moves Available it's a draw!");
            
        }
        else if (winner != "undecided"){
            console.log("The Winner is: ", winner);
            
        }
       
        else if (gameBoardArray[cellPos] !== "e"){
            console.log("Cell Already Taken!");
        }


        else if (currentTurn === players.player1.playerSybmol){

            gameBoardArray.splice(cellPos, 1, players.player1.playerSybmol);
            console.log(gameBoardArray);
            
            drawConditionCheck();
            winConditionCheck();
            currentTurn = players.player2.playerSybmol;
            currentTurnHeader.textContent =  players.player2.playerName + " turn!";
            
        }
        else if (currentTurn === players.player2.playerSybmol) {
            gameBoardArray.splice(cellPos, 1, players.player2.playerSybmol);
            console.log(gameBoardArray);
            drawConditionCheck();
            winConditionCheck();
            currentTurn = players.player1.playerSybmol;
            currentTurnHeader.textContent =  players.player1.playerName + " turn!";
        }
        
    }
    
    const winConditionCheck = () => {
        
        if ((gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2] && gameBoardArray[0] != "e") || 
            (gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5] && gameBoardArray[3] != "e") ||
            (gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8] && gameBoardArray[6] != "e") || // Horizontal Checks Done

            (gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6] && gameBoardArray[0] != "e") ||
            (gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7] && gameBoardArray[1] != "e") ||
            (gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8] && gameBoardArray[2] != "e") || // Vertical Checks Done
            
            (gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8] && gameBoardArray[0] != "e") ||
            (gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6] && gameBoardArray[2] != "e") // Diagonal Checks Done
        ){
            console.log("The Winner is: ", currentTurn);
            winner = currentTurn;
            resultSection.textContent = `The winner is ${winner}` ; 
        }
    }
    const drawConditionCheck = () => {
        
        if (!gameBoardArray.includes("e")){
            winner = "draw";
             resultSection.textContent = `The outcome is a ${winner}` ; 
            console.log("draw");
    }
    }
    const checkArray = () => {
        return gameBoardArray;
    }

    

    return {calculateTurn, playTurn, checkArray, cellListener, getPlayerNames};
    
    
} ();

const displayController = function(){
    const gameBoardArray = Gameboard.checkArray();
    console.log("Array Check function: ", gameBoardArray);
    const reRenderGrid = () => {
        let index = 0;!
        cells.forEach(cell => {
            if (gameBoardArray[index] !== "e"){
                cell.textContent = gameBoardArray[index];
            }
            index++;

    });
    }
   return {reRenderGrid}
}();

displayController.reRenderGrid();
Gameboard.cellListener();
/*
cellsArr.forEach(cell => {
        cell.addEventListener("click", () => {
            const currentCell = cellsArr.indexOf(cell);
            console.log("clicked", currentCell);
            
        }); 
    });

*/

sumbitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const player1name = document.forms["playerInfoForm"]["player1-Name"].value;
    const player2name = document.forms["playerInfoForm"]["player2-Name"].value;
    console.log(`Clicked with values ${player1name} and ${player2name}`);
    Gameboard.getPlayerNames(player1name, player2name);
    sumbitBtn.parentElement.remove();
    


});











/*
Gameboard.calculateTurn();
Gameboard.playTurn(5); 
Gameboard.playTurn(1); 
Gameboard.playTurn(9); 
Gameboard.playTurn(8); 
Gameboard.playTurn(2); 
Gameboard.playTurn(3); 
Gameboard.playTurn(7); 
Gameboard.playTurn(4); 
Gameboard.playTurn(6); 
*/
