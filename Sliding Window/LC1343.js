/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let left = 0;
    let sum = 0, mxSum = -Infinity, cnt = 0;
    let avg = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        if (right - left + 1 == k) {
            // mxSum = Math.max(sum, mxSum);
            // avg = mxSum / k;

            avg = sum /k;

            if (avg >= threshold) {
                cnt++;
            }
            sum -= arr[left]
            left++;
        }
    }
    return cnt;
};