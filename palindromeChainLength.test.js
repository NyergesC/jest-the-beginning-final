const palindromeChainLength = require('./palindromeChainLength');

test('reverseNumber function test', () => {
    expect(palindromeChainLength.reverseNumber(691)).toBe(196);
});

test('isPalindrome function test', () => {
    expect(palindromeChainLength.isPalindrome(12345)).toBe(false);
});

test('test where it takes 0 iterations to get a palindrome', () => {
    expect(palindromeChainLength.palindromeChainLength(121)).toBe(0);
});

test('test where it takes 1 iteration to get a palindrome', () => {
    expect(palindromeChainLength.palindromeChainLength(120)).toBe(1);
});

test('test where it takes large number (e.g. 24) iteration to get a palindrome', () => {
    expect(palindromeChainLength.palindromeChainLength(97)).toBe(6);
});

test('there is a test where the number cannot be made into a palindrome and throws an error', () => {
    expect(() => palindromeChainLength.palindromeChainLength(196)).toThrow('Number is too big or a Lychrel number!')
})