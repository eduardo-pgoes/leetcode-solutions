/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0, j = 0, n = nums.length;
    while (j < n) {
        if (nums[j] === 0) j++;
        else {
            swap(nums, i, j);
            i++;
            j++;
        }
    }
};

function swap(nums, i, j) {
    let aux = nums[i];
    nums[i] = nums[j];
    nums[j] = aux;
}

let nums = [0,1,0,3, 5, 0, 12];
moveZeroes(nums);
console.log(nums);