/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.filter((value) => value < 0).length === nums.length) {
        return Math.max(...nums);
    }
    if (nums.filter((value) => value > 0) === nums.length) {
        return Math.max(...nums);
    }
    let bestSum = 0;
    let currentSum = 0;
    for (let number of nums) {
        currentSum = Math.max(0, currentSum + number);
        bestSum = Math.max(currentSum, bestSum);
    }
    return bestSum;
};
