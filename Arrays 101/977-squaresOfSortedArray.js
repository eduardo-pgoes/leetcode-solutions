/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map((value) => Math.pow(value,2)).sort((a, b) => a - b);
};

let nums = [-4,-1,0,3,10];

console.log(sortedSquares(nums));