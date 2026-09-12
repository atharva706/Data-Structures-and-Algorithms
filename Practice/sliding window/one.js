/**
 * Question 1: Maximum Sum of K Consecutive Elements
 *
 * Given an array nums and an integer k,
 * return the maximum sum of any k consecutive elements.
 *
 * Example:
 * nums = [2, 1, 5, 1, 3, 2]
 * k = 3
 *
 * Output: 9
 

function maxSumSubarray(nums, k) {
    // Write your Sliding Window solution here
    let left = 0;
    let sum = 0;
    let mxSum = -Infinity;

    for(let right = 0 ; right < nums.length ; right++){
        sum+=nums[right];

        if(right-left+1 ==k){
            mxSum = Math.max(mxSum , sum);
            sum-=nums[left];
            left++;
        }
    }

    return mxSum;
}


// Test Cases
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(maxSumSubarray([2, 3, 4, 1, 5, 6], 2));   // 11
console.log(maxSumSubarray([1, 1, 1, 1, 1], 2));       // 2
console.log(maxSumSubarray([-2, -1, -3], 2));           // -3
*/








/**
 * Question 2: Maximum Average of K Consecutive Elements
 *
 * Given an array nums and an integer k,
 * return the maximum average of any k consecutive elements.
 *
 * Example:
 * nums = [2, 1, 5, 1, 3, 2]
 * k = 3
 *
 * Output: 3
 


function maxAverageSubarray(nums, k) {
    // Write your Sliding Window solution here
    let left = 0;
    let sum = 0;
    let avg = 0;
    let mxSum = 0

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        if (right - left + 1 == k) {
            mxSum = Math.max(mxSum, sum);
            avg = mxSum/k;
            sum -= nums[left];
            left++;
        }
    }

    return avg;
}


// Test Cases
console.log(maxAverageSubarray([2, 1, 5, 1, 3, 2], 3)); // 3
console.log(maxAverageSubarray([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(maxAverageSubarray([5, 5, 5, 5], 2)); // 5
console.log(maxAverageSubarray([-1, -2, -3, -4], 2)); // -1.5
*/









/**
 * Question 3: Minimum Sum of K Consecutive Elements
 *
 * Given an array nums and an integer k,
 * return the minimum sum of any k consecutive elements.
 *
 * Example:
 * nums = [2, 1, 5, 1, 3, 2]
 * k = 3
 *
 * Output: 6


function minSumSubarray(nums, k) {
    // Write your Sliding Window solution here
    let left = 0;
    let sum = 0;
    let minSum = Infinity;

    for(let right = 0 ; right < nums.length ; right++){
        sum+=nums[right]

        if(right-left+1 === k){
            minSum = Math.min(minSum , sum);
            sum-=nums[left];
            left++;
        }
    }

    return minSum
}


// Test Cases
console.log(minSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 6
console.log(minSumSubarray([4, 2, 7, 1, 8], 2));     // 6
console.log(minSumSubarray([-1, -2, -3, -4], 2));     // -7
console.log(minSumSubarray([5, 5, 5, 5], 2));         // 10
*/








/**
 * Question 4: Maximum Number of Vowels in a Substring
 *
 * Given a string s and an integer k,
 * return the maximum number of vowels in any substring of length k.
 *
 * Vowels: a, e, i, o, u
 *
 * Example:
 * s = "abciiidef"
 * k = 3
 *
 * Output: 3
 */

function maxVowels(s, k) {
    // Write your Sliding Window solution here
    let left = 0;
    let cnt = 0;
    let mxCnt = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] == 'a' || s[right] == 'e' || s[right] == 'i' || s[right] == 'o' ||
            s[right] == 'u'
        ) {
            cnt++;
        }

        if (right - left + 1 == k) {
            mxCnt = Math.max(mxCnt, cnt);
            if (s[left] == 'a' || s[left] == 'e' || s[left] == 'i' || s[left] == 'o' ||
                s[left] == 'u') {
               cnt--;
            }
            left++;
        }
    }
    return mxCnt;
}


// Test Cases
console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2));     // 2
console.log(maxVowels("leetcode", 3));  // 2
console.log(maxVowels("rhythms", 3));   // 0
console.log(maxVowels("hello", 2));     // 1