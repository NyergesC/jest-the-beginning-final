const findUnique = require('./findUnique');

const array1 = [1, 2, 4, 6];
const array2 = [2, 3, 4, 6];
const array3 = [2, 4, 3, 8];
const array4 = [];

test('the first number of the array is the odd one', () => {
    expect(findUnique(array1)).toBe(2);
});

test('the second number of the array is the odd one', () => {
    expect(findUnique(array2)).toBe(3);
});

test('where the odd one is not the first or second number of the array', () => {
    expect(findUnique(array3)).toBe(4);
});

test('where the odd one is not the first or second number of the array', () => {
    expect(() => findUnique(array4)).toThrow('Invalid input');
});