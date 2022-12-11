/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let even = 0;
    for (let num of nums) {
        if (num.toString().length % 2 === 0) {
            even++;
        }
    }
    return even;
};

let nums = [12,345,2,6,7896];
console.log(findNumbers(nums));