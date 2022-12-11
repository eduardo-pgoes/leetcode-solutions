/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    sums = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            sums.push(nums[0]);
        } else {
            sum = 0;
            for (let j = 0; j <= i; j++) {
                sum += nums[j];
            }
            sums.push(sum);
        }
    }
    return sums;
};

let nums = [1,2,3,4];
console.log(runningSum(nums));
