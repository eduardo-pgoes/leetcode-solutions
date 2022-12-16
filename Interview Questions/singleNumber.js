/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numberMap = new Map();
    let currentEntry = 0;
    for (let i = 0; i < nums.length; i++) {
        if (numberMap.get(nums[i])) {
            numberMap.set(nums[i], numberMap.get(nums[i]) + 1);
        } else {
            numberMap.set(nums[i], 1);
        }
    }
    for (let entry of numberMap) {
        if (entry[1] === 1) {
            return entry[0];
        }
    }
};

let nums = [4,1,2,1,2];
console.log(singleNumber(nums));