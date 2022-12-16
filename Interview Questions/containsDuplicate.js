/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] === nums[i]) {
            return true;
        }
    }
    return false;
};

let nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums));