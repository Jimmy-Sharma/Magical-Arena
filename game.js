const Player = require('./player');

class MagicalArena {
    constructor(playerA, playerB) {
        this.players = [playerA, playerB];
    }

    // Method of the game
    mainGame() {
        let currentPlayer = this.players[0].health <= this.players[1].health ? 0 : 1;
        let opponentPlayer = 1 - currentPlayer;

        console.log("Magical Arena Game Starts")

        while (this.players[currentPlayer].health > 0 && this.players[opponentPlayer].health > 0) {
            let attackDice = Math.floor(Math.random() * 6) + 1;
            let defendDice = Math.floor(Math.random() * 6) + 1;

            let damageTaken = this.players[currentPlayer].attackOpponent(
                this.players[opponentPlayer],
                attackDice,
                defendDice
            );

            console.log(
                `Player ${currentPlayer + 1} attacks Player ${opponentPlayer + 1} with damage ${damageTaken}.`
            );

            // Switch players for the next turn
            currentPlayer = 1 - currentPlayer;
            opponentPlayer = 1 - currentPlayer;
        }

        // winner
        let winner = this.players[0].health > 0 ? 1 : 2;
        console.log("Game Over!!");
        console.log(`Player ${winner} wins the game!`);
    }
}

module.exports = MagicalArena;
