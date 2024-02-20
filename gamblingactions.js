//const gamblingInput = require('./gamblingInput');
class gamblingActions {
    constructor() {
    this.ROWS = 3;
    this.COLS = 3;
    this.SYMBOLS_COUNT = {
        "A": 2,
        "B": 4,
        "C": 6,
        "D": 8
        };
    this.SYMBOL_VALUES = {
            "A": 5,
            "B": 4,
            "C": 3,
            "D": 2
        };        
    };

    spin() {
        const symbols = [];
        for (const [Symbol, count] of Object.entries(this.SYMBOLS_COUNT)){
            for (let i = 0; i < count; i++) {
                symbols.push(Symbol);
            }
        }
        const reels = [];
        for (let i = 0; i < this.COLS; i++) {
            reels.push([]);
            const reelSymbols = [...symbols];
            for (let j = 0; j < this.ROWS; j++) {
                const randomIndex = Math.floor(Math.random() * reelSymbols.length)
                const selectedSymbol = reelSymbols[randomIndex];
                reels[i].push(selectedSymbol);
                reelSymbols.splice(randomIndex, 1);
            }
        }
        return reels;
    };
    // TODO DOESNT TRANSPOSE WELL
    transpose(reels) {
        const rows = [];
        for (let i = 0; i < this.ROWS; i++) {
            rows.push([]);
            for (let j = 0; j < this.COLS; j++) {
                rows[i].push(reels[i][j])
            }
        }
        return rows
    };

    printRows(rows) {
        for (const row of rows) {
            let rowString = "";
            for (const [i,symbol] of row.entries()) {
                rowString += symbol
                if (i != row.length -1) {
                    rowString += " | "
                }
            }
            console.log(rowString)
        }
    };

    getWinnings(rows, bet, lines) {
        let winnings = 0;
        for (let row = 0; row < lines; row++) {
          const symbols = rows[row];
          let allSame = true;
          for (const symbol of symbols) {
            if (symbol != symbols[0]) {
              allSame = false;
              break;
            }
          }
          if (allSame) {
            winnings += bet * this.SYMBOL_VALUES[symbols[0]];
          }
        }
        return winnings;
    };
};

module.exports = gamblingActions;

//const gamblingActions1 = new gamblingActions();
//console.log(gamblingActions1.spin());
//console.log(gamblingActions1.transpose(gamblingActions1.spin()));
//gamblingActions1.printRows(gamblingActions1.transpose(gamblingActions1.spin()));
//gamblingActions1.getWinnings(gamblingActions1.transpose(gamblingActions1.spin()), 10, 3);