
const Gameboard = function(){
    let gameBoardArray = ["e","e","e",
                          "e","e","e",
                          "e","e","e"] // "e" for empty
    let currentTurn;
    let winner = "undecided";
    let players = {
        player1 : "X",
        player2 : "O",
    }
    const calculateTurn = () => {
        if (!gameBoardArray.includes("X") && !gameBoardArray.includes("O")){ // Checks if any moves have been played
            currentTurn = players.player1;
            console.log(currentTurn)
        }
    }
    const playTurn = (cellPos) => {
        cellPos --;
        console.log("Current Turn: ", currentTurn);
        
        if (winner == "draw"){
            console.log("No More Moves Available it's a draw!");
        }
        else if (winner != "undecided"){
            console.log("The Winner is: ", winner);
        }
       
        else if (gameBoardArray[cellPos] !== "e"){
            console.log("Cell Already Taken!");
        }


        else if (currentTurn === players.player1){           
            gameBoardArray.splice(cellPos, 1, players.player1);
            console.log(gameBoardArray);
            winConditionCheck();
            drawConditionCheck()
            currentTurn = players.player2;
            
        }
        else if (currentTurn === players.player2) {
            gameBoardArray.splice(cellPos, 1, players.player2);
            console.log(gameBoardArray);
            winConditionCheck();
            drawConditionCheck();
            currentTurn = players.player1;
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
            winner = currentTurn
        }
    }
    const drawConditionCheck = () => {
        
        if (!gameBoardArray.includes("e")){
            winner = "draw";
            console.log("draw");
    }
    }

    return {calculateTurn, playTurn}
    
    
} ();

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
