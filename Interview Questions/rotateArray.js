/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

};

function shiftToTheRight(nums) {
    for (let i = 1; i < nums.length - 1; i++) {
        let aux = nums[i-1];
        nums[i-1] = nums[i];
        nums[i]
    }
}

function swap(nums, length) {
    let aux = nums[0];
    nums[0] = nums[length - 1];
    nums[length - 1] = aux;
}

let nums = [1,2,3,4,5,6,7], k = 1;
rotate(nums, k);
console.log(nums);