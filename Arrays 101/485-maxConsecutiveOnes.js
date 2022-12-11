/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currentConsecutiveOnes = 0, maxConsecutiveOnes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currentConsecutiveOnes++;
            if (currentConsecutiveOnes > maxConsecutiveOnes) {
                maxConsecutiveOnes = currentConsecutiveOnes;
            }
        } else {
            currentConsecutiveOnes = 0;
        }
    }
    return maxConsecutiveOnes;
};

let nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));