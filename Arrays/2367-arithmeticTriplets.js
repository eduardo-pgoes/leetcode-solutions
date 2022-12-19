/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let n = nums.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            for (let k = j; k < n; k++) {
                if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
                    count++;
                }   
            }
        }
    }  
    return count;
};