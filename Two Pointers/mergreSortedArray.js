/**
 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n
 */

let nums1 = [1,2,3];
let nums2 = [2,4,5];
let temp = [];

let left = 0;
let right = 0;

while(left < nums1.length && right < nums2.length){
    if(nums1[left]<=nums2[right]){
        temp.push(nums1[left]);
        left++;
    }
    else{
        temp.push(nums2[right]);
        right++;
    }
}

while(left<nums1.length){
    temp.push(nums1[left]);
    left++;
}

while(right<nums2.length){
    temp.push(nums2[right]);
    right++;
}

console.log(temp);