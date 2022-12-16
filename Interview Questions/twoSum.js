/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

let nums = [3,2,4], target = 6;
console.log(twoSum(nums, target));