// https://leetcode.com/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ans = [];
    let k1 = 0, k2 = n;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            ans.push(nums[k1]);
            k1++;
        } else {
            ans.push(nums[k2]);
            k2++;
        }
    }    
    return ans;
};

let nums = [2,5,1,3,4,7], n = 3;
let k = shuffle(nums, n);
console.log(k);