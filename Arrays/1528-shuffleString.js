/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let ans = [];
    for (let i = 0; i < s.length; i++) {
        ans[indices[i]] = s[i];
    }
    return ans.join("");
};

let s = "codeleet", indices = [4,5,6,7,0,1,2,3];
console.log(restoreString(s, indices));