function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}



let playerA = { name: "Player A", health: 100, strength: 5, attack: 10 };
let playerB = { name: "Player B", health: 100, strength: 10, attack: 5 };


let flag = true

if (playerA.health > playerB.health) {
    flag = false
}

console.log(playerA, playerB)

while (playerA.health <= 0 || playerB.health <= 0) {
    if (!flag) {
        takeTurn(playerB, playerA);
    } else {
        takeTurn(playerA, playerB);
    }

    // if (playerB.health <= 0) break;

    if (!flag) {
        takeTurn(playerA, playerB);
    } else {
        takeTurn(playerB, playerA);
    }
}