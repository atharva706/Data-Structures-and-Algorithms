// // 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

/**
 Approach => My approach would br 
 1 = > take extra space , and store vowels in reverse order
 2 => loop through the original string and if we get vowel replace it with vowel
     of which we stored reversed order
 */

//let s = "IceCreAm"; // op => AceCreIm

function reverseVowels(s) {
    let s1 = [...s];

    let arr = [];

    for (let i = s1.length - 1; i >= 0; i--) {
        if (s1[i] == 'a' || s1[i] == 'e' || s1[i] == 'i' || s1[i] == 'o' || s1[i] == 'u' ||
            s1[i] == 'A' || s1[i] == 'E' || s1[i] == 'I' || s1[i] == 'O' || s1[i] == 'U'
        ) {
            arr.push(s1[i])
        }
    }
    let j = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] == 'a' || s1[i] == 'e' || s1[i] == 'i' || s1[i] == 'o' || s1[i] == 'u' ||
            s1[i] == 'A' || s1[i] == 'E' || s1[i] == 'I' || s1[i] == 'O' || s1[i] == 'U'
        ) {
            s1[i] = arr[j];
            j++;
        }

    }

    return s1.join("");
}

console.log(reverseVowels("leetcode"))
console.log(reverseVowels("IceCreAm"))


