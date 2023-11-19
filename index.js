let Player = require('./player');
let MagicalArena = require('./game');


let playerA = new Player(50, 5, 10);
let playerB = new Player(100, 10, 5);

let arena = new MagicalArena(playerA, playerB);
arena.mainGame();



module.exports = { Player, MagicalArena }