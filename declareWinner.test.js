const declareWinner = require('./declareWinner');

const firstFighter = {
    name: "First Player",
    health: 80,
    damagePerAttack: 20
}

const secondFighter = {
    name: "Player 2",
    health: 50,
    damagePerAttack: 10
}

test('the fighter in the first parameter wins', () => {
    expect(declareWinner(firstFighter, secondFighter)).toBe(firstFighter.name);
});