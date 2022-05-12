const monkeyTalk = require('./monkeyTalk');

const string1 = "";
const string2 = "majomka";
const string3 = "ello bello";
const string4 = "hogy mi van???"

test('empty string returns the correct value', () => {
    expect(monkeyTalk(string1)).toBe("Ook.");
});

test('a string with a single word returns the correct value', () => {
    expect(monkeyTalk(string2)).toBe("Ook.");
});

test('a string with multiple words starting with vowels and consonants returns the correct value', () => {
    expect(monkeyTalk(string3)).toBe("Eek ook.");
});

test('a string with multiple punctuation marks returns the correct value', () => {
    expect(monkeyTalk(string4)).toBe("Ook ook ook.");
});