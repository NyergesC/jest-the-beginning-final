const declareWinner = require('./declareWinner');

const secondFighter = {
    name: "First Player",
    health: 80,
    damagePerAttack: 20
}

const firstFighter = {
    name: "Player 2",
    health: 50,
    damagePerAttack: 10
}

test('the fighter in the second parameter wins', () => {
    expect(declareWinner(firstFighter, secondFighter)).toBe(secondFighter.name);
});