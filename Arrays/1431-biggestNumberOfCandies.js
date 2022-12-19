/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let biggest = Math.max(...candies);
    let ans = [];
    for (let candy of candies) {
        if (candy + extraCandies >= biggest) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }
    return ans;
};