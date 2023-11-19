class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    // Method to attack and update player health
    attackOpponent(defender, attackDice, defendDice) {
        let attackDamage = this.attack * attackDice;
        let defendDamage = defender.strength * defendDice;

        let damageTaken = Math.max(0, attackDamage - defendDamage);
        defender.health -= damageTaken;

        return damageTaken;
    }
}

module.exports = Player;
