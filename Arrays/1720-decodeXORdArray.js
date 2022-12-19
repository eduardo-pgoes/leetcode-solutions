/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let ans = Array(encoded.length + 1).fill(0);
    ans[0] = first;
    for (let i = 1; i < encoded.length + 1; i++) {
        ans[i] = encoded[i-1] ^ ans[i-1];
    }
    return ans;
};

let encoded = [1,2,3], first = 1;
console.log(decode(encoded, first));