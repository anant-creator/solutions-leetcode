// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function(s) {
    return s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase() === s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase().split('').reverse().join('')
};
