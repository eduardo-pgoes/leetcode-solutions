/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let insertIndex = 0;
    let k = 0;
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            k++;
        } else {
            nums[insertIndex] = nums[i-1];
            insertIndex++;
        }
    }
    return nums.length - k;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
console.log(nums);