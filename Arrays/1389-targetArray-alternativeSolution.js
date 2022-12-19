/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let n = index.length;
    let target = [];
    for (let i = 0; i < n; i++) {
        insertAtIndex(target, nums[i], index[i]);
    }  
    return target;
};

function insertAtIndex(array, value, index) {
    for (let i = array.length; i > index; i--) {
        array[i] = array[i-1];
    }
    array[index] = value;
}

let nums = [0,1,2,3,4], index = [0,1,2,2,1];
console.log(createTargetArray(nums, index));