var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[nums.length - 1] == target) {
            return [i, nums.length-1];
        }
        for (let j = 1; j < nums.length - 1; j++) {
            if (nums[i] + nums[j] == target && i !== j) {
                return [i, j];
            }
        }
    }    
};

let nums = [3,2,4], target = 6;

console.log(twoSum(nums, target));