// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

let s = "A man, a plan, a canal: Panama";
var isPalindrome = function (s) {
    let str = "";

    for (let i = 0; i < s.length; i++) {
        if (/[^a-zA-Z0-9]/.test(s[i]) || s[i] == " ") {
            continue;
        }
        else {
            str += s[i].toLowerCase();
        }
    }

    let start = 0;
    let end = str.length - 1;

    while (start <= end) {
        if (str[start] != str[end]) {
            return false;
        }
        else {
            start++;
            end--;
        }
    }

    return true;
};
console.log(isPalindrome(s))