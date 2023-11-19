const { Player, MagicalArena } = require('./index');


test('MagicalArena handles a game with equal initial health', () => {
    const playerA = new Player(30, 5, 10);
    const playerB = new Player(30, 8, 6);

    const arena = new MagicalArena(playerA, playerB);

    // Mock Math.random() to control dice rolls
    jest.spyOn(Math, 'random').mockReturnValue(0.5);

    // Mock console.log to capture output
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    arena.mainGame();

    // Check if the winner is correctly identified
    const winner = playerA.health > 0 ? 1 : 2;
    expect(consoleSpy).toHaveBeenCalledWith(`Player ${winner} wins the game!`);

    // Restore the original functions
    Math.random.mockRestore();
    console.log.mockRestore();
});


test('Player attack does not exceed defender health', () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(40, 8, 6);

    // Ensure that playerA's attack won't exceed playerB's health
    const attackDice = 2;
    const defendDice = 5;

    const damageTaken = playerA.attackOpponent(playerB, attackDice, defendDice);

    // Check if the damage is correctly calculated and playerB's health is not negative
    expect(damageTaken).toBe(0);
    expect(playerB.health).toBe(40);
});

test('MagicalArena simulates a game with two players', () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(40, 8, 6);

    const arena = new MagicalArena(playerA, playerB);

    // Mock Math.random() to control dice rolls
    jest.spyOn(Math, 'random').mockReturnValue(0.5);

    // Mock console.log to capture output
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

    arena.mainGame();

    // Check if the winner is correctly identified
    const winner = playerA.health > 0 ? 1 : 2;
    expect(consoleSpy).toHaveBeenCalledWith(`Player ${winner} wins the game!`);

    // Restore the original functions
    Math.random.mockRestore();
    console.log.mockRestore();
});
