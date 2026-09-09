/**
 1. What is Sliding Window?

Sliding Window is a technique used mainly with arrays and strings when the problem 
involves a continuous/subarray/substring portion of the data.

The basic idea:

Instead of repeatedly calculating the same elements, maintain a "window" and move it 
through the array.

let left = 0;

for (let right = 0; right < arr.length; right++) {

    // add arr[right]

    if (window size === k) {

        // calculate/update answer

        // remove arr[left]

        left++;
    }
}


 */

// max and min sum of fixed size window

// let arr = [2, 3, 4, 1, 5];
// let k = 3;

// let left = 0, sum = 0, minSum = Infinity;

// for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];

//     if (right - left + 1 == k) {
//         minSum = Math.min(minSum , sum)
//         sum-=arr[left];
//         left++;
//     }
// }

// console.log(minSum);








// Find the number of windows whose sum is greater than 10.

// let arr = [1, 2, 3, 4, 5, 6];
// let k = 3;

// let left = 0;
// let sum = 0;
// let cnt = 0;

// for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];

//     if (right - left + 1 == k) {
//         if (sum > 10) {
//             cnt++;
//         }
//         sum -= arr[left];
//         left++;
//     }
// }

// console.log(cnt)











// Find the starting index of the window having the maximum sum.

// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;

// let left = 0;
// let sum = 0;
// let mxSum = -Infinity;
// let idx;

// for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];

//     if (right - left + 1 == k) {
//         if (sum > mxSum) {
//             mxSum = sum
//             idx = left;
//         }
//         sum -= arr[left];
//         left++;
//     }
// }

// console.log(idx)












// Find the maximum average of k consecutive elements.

let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

let left = 0 ;
let sum = 0;
let ms = -Infinity;
let avg = 0;

for(let right = 0 ; right < arr.length ; right++){
    sum+=arr[right];

    if(right-left+1 == k){
        if(sum>ms){
            ms = sum;
            avg = ms/k;
        }
        sum-=arr[left];
        left++;
    }
}

console.log(avg)





