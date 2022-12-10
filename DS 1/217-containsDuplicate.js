/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, 0);
    }
    return map.size < nums.length;
};

let nums = [3, 3];
console.log(containsDuplicate(nums));