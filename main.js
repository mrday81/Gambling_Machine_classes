// packages
const prompt = require('prompt-sync');
// user defined
const gamblingInput = require('./gamblingInput');
const gamblingActions = require('./gamblingActions');


const game = () => {
    const gi = new gamblingInput();
    const ga = new gamblingActions();

    ////let balance = deposit()
    //while (true) {
    //    const depositAmount = deposit();
    //    console.log(depositAmount);
    //    console.log("You have a blance of $" + balance);
    //    const numberOfLines = getNumberOfLines();
    //
    //    const bet = getBet(balance, numberOfLines);
    //    
    //    balance -= bet * numberOfLines;
    //
    //    const reels = spin();
    //
    //    const rows = transpose(reels);
    //  console.log(reels);
    ////  console.log(rows);
    ///    printRows(rows);

  //    const winnings = getWinnings(rows, bet, numberOfLines);
    //    balance += winnings;
    //    console.log("You W0n, $" + winnings);
    //
    //    if (balance <= 0) {
    //        console.log("You ran out of money");
    //    break;
    //    }
    //    const playAgain = prompt("Do you want to play again (y/n)?");
    //    if (playAgain != "y") break;
    //}
};

game();