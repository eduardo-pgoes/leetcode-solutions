/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let n = nums.length;
    let ans = [];
    for (let i = 0; i < n; i++) {
        let k = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                if (nums[j] < nums[i]) {
                    k++;
                }
            }
        }
        ans.push(k);
    }
    return ans;
};