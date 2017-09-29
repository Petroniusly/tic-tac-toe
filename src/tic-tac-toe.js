class TicTacToe {
    constructor() {
        this.turn = 0;
        this.playerSymbol = 'x';
        this.arrayTicTacToe = [];
        for (var i = 0; i < 3; i++){
            this.arrayTicTacToe[i] = [];
            for (var j = 0; j < 3; j++) {
                this.arrayTicTacToe[i][j] = null;
            }
        }
            
    }
//!!
    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }
//!!
    nextTurn(rowIndex, colIndex) {
        //this.isFinished() != null ? :;
        if (this.arrayTicTacToe[rowIndex][colIndex] == null) {
            this.arrayTicTacToe[rowIndex][colIndex] = this.playerSymbol;
            this.playerSymbol = (this.playerSymbol == 'o') ? 'x' : 'o'; //change Symbol after correct turn
            this.turn++;
        }
    }

    isFinished() {
        return this.getWinner() != null || this.isDraw()//? this.getWinner() : null;
    }

    getWinner() {
        
        var symbol = (this.playerSymbol == 'o') ? 'x' : 'o';  //copy cause have a trouble with a scope in array.every() - think later
        var array = this.arrayTicTacToe; //copy by link for shortest name in function;
        
        for (var i = 0; i < 3; i++) {
            if (compareItem(array[i]) || //row or
                compareItem(array.map(row => row.filter((item,j) => j == i).join()) ) ) { //column
                return symbol;
            }
        }
        
        return (compareItem(array.map((row,i) => row.filter((item,j) => j == i)) ) || //forward diagonal or
                compareItem(array.map((row,i) => row.filter((item,j) => j == 2 - i)) ) ) //reverse diagonal 
                ? symbol : null;

        function compareItem(array) {
            return array.every((item => item == symbol));
        }
}


    noMoreTurns() {
        return this.turn == 9; //this.arrayTicTacToe.every(row => row.every(item => item != null));
    }

    //тру, если нет ходов и победитель равен нул isFinished - false; isWinner - null
    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arrayTicTacToe[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
