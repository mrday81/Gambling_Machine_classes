// load packages
const prompt = require('prompt-sync')();

class gamblingInput {

    constructor() {
    this.ROWS = 3;
    this.COLS = 3;
    this.balance = this.deposit();

};

deposit() {
    while (true) {
        const depositAmount = prompt("Enter the amount you want to deposit:  ");
        const numberDepositAmount = parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid amount, try again");
        } else {
            return numberDepositAmount
        }
    }
  };

  getNumberOfLines() {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3):  ");
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again");
        } else {
            return numberOfLines
        }
      }
    };

    getBet(balance, lines) {
        while (true) {
            const bet = prompt("Enter the bet per line:  ");
            const numberBet = parseFloat(bet);
        
            if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines) {
                console.log("Invalid bet, try again");
            } else {
                return numberBet
            }
        }
    };
};

module.exports = gamblingInput;


//const gamblingInput1 = new gamblingInput();
//gamblingInput1.getNumberOfLines();
//gamblingInput1.getBet(gamblingInput1.balance, gamblingInput1.getNumberOfLines());